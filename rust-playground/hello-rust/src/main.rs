// 使用use关键字导入标准库/其他库
// use std::io;
use rand::Rng;
// fn main (){
    
//     // !代表是宏与函数不同 
//     println!("请输入一个数字");
    
//     // 使用mut来声明可变变量，仅使用let定义的变量没办法二次赋值
//     // ::代表new是String的关联函数，类同Java或其他语言中的静态方法
//     let mut guess = String::new();

//     // 通过在标准库导入io模块来读取终端输入
//     // expect：会在程序异常时执行
//     // &guess：表示我们在此使用guess的引用，它们指向内存的同一块空间
//     // &mut：表示此处的接收的引用也是可变的
//     io::stdin().read_line(&mut guess).expect("读取失败");

//     // 通过{}占位符来输出guess
//     println!("输入的数字是：{}", guess);
// }


fn main() {
    let mut rng = rand::thread_rng();
    // 1~100的随机数生成
    let random_num = rng.gen_range(1..101);
    println!("生成随机数：{}", random_num)
}


