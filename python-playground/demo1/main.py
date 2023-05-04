# print("hello world")

"""
import keyword
print(keyword.kwlist)
"""

# x = 1.23
# type(x)


# x = (1, 2, 3)
# type(x)


# x = [1, 2, 3]
# type(x)


# input("这是一个简单的input信息")  # 这是一个简单的input样例，他输出input信息并接受一个字符串
# x = input("请输入X的值：")  # 这是一个常见的input样例，他输出提示信息，然后接受一个字符串并将值传递给一个变量X
# print(x)  # 打印变量，可以看到输入的x的值
# print(type(x))  # 查看这个变量的类型

# x = int(input("请输入一个数值："))  # 配合强制类型转换，可以将字符串转变为int类型（字符串类型不能参与计算）
# # 也可以分步写成：
# # x=input("请输入一个数值：") # 接受一个字符串
# # x=int(x)   #将x转换为int型

# # 这里强制转换也可以转换为其他类型，详细的转换方法请参考基本数据类型的强制转换相关内容

# print(x)  # 打印变量，可以看到输入的x的值
# print(type(x))  # 查看这个变量的类型

# input("\n\n按下 enter 键后退出。")
# # 其实这里并没有接受任何内容，input函数以enter作为结尾，所以只有输入回车后才会结束input函数


#!/usr/bin/python3

# import sys

# x = "W3Cschool"
# sys.stdout.write(x + "\n")

# from sys import argv, path  #  导入特定的成员

# print("================python from import===================================")
# print("path:", path)  # 因为已经导入path成员，所以此处引用时不需要加sys.path


#!/usr/bin/python3
# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数

# a, b = 0, 1

# print(a)
# print(b)
# print([1, 2, 3])
# while b < 10:
#     print(b)
#     a, b = b, a + b

age = int(input("请输入你家狗狗的年龄: "))
print("")
if age < 0:
    print("请输入正确的年龄。")
elif age == 1:
    print("相当于 14 岁的人。")
elif age == 2:
    print("相当于 22 岁的人。")
elif age > 2:
    human = 22 + (age - 2) * 5
    print("对应人类年龄: ", human)
### 退出提示，本地环境下可以使用这样的退出提示使代码更易用
input("点击 enter 键退出")
