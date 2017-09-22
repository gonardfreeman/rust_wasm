fn main() {
    println!("Hello, world!");
}


#[no_mangle]
pub fn fibonacci_rec(n: i32) -> u64 {
    if n < 0 {
        panic!("{} is negative!", n);
    }
    match n {
        0 => panic!("Zero is not right for fibonacci!"),
        1 | 2 => 1,
        3     => 2,
        _     => fibonacci_rec(n-1) + fibonacci_rec(n-2)
    }
}