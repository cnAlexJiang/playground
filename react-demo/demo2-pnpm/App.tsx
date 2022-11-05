import * as React from 'react';
import { useEffect, useRef, useLayoutEffect } from 'react';
import './style.css';
import { runInAction as $set } from 'mobx';
import {
  observer as createElement,
  useLocalObservable as reactive,
  useObserver as computed,
} from 'mobx-react-lite';

function watch<T>(
  value: T,
  cb: (val: T, pre?: T) => void,
  options?: { immediate?: boolean; flush?: 'pre' | 'post' }
) {
  const pre = useRef<T | undefined>(undefined);
  const cbRef = useRef(cb);
  const optionsRef = useRef(options);
  const started = useRef(false);
  useLayoutEffect(() => {
    cbRef.current = cb;
    optionsRef.current = options;
  }, [cb, options]);
  useLayoutEffect(() => {
    if (optionsRef.current?.flush === 'post') return;
    if (!started.current) {
      started.current = true;
      if (!optionsRef.current?.immediate) return;
    }
    cbRef.current(value, pre.current);
    pre.current = value;
  }, [value]);
  useEffect(() => {
    if (optionsRef.current?.flush !== 'post') return;
    if (!started.current) {
      started.current = true;
      if (!optionsRef.current?.immediate) return;
    }
    cbRef.current(value, pre.current);
    pre.current = value;
  }, [value]);
}

const Compo = createElement(function Compo() {
  const data = reactive(() => ({
    name: '',
  }));
  const name = computed(() => data.name);
  watch(
    name,
    (val, pre) => {
      console.log(val, pre);
    },
    {
      immediate: true,
      flush: 'post',
    }
  );
  return (
    <input
      value={data.name}
      onChange={(e) => {
        $set(() => {
          data.name = e.target.value;
        });
      }}
    />
  );
});

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Compo />
    </div>
  );
}
