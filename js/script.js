// {
//     let arr =[1, 2, 3, 4];
//     arr.forEach((value, index, arr)=> {
//     console.log(value, index, arr);
// })
// }
//1-misol
    //Berilgan sonlardan tashkil topgan massivdan 10 dan kataalaridan iborat yangi massiv  hosil qiluvchi funksiya yozing.
{
    let arr = [3, 6, 7, 14, 13, 45, 23 ,-10];
    let el = arr.filter((value) => {
        return value > 10;
    })
    console.log(el);
}
//2-misol
//sonlardan tashkil topgan massiv elementlari kublaridan iborat yangi massiv hosil qiladigan funksiya yozing.
{
    let arr = [2, 4, 6, 9, 10];
    let res = arr.map((value) => {
        return value **3;
    })
    console.log(res);
}
//3-misol
//sonlardan tashkil topgan massiv elementlari orasida 3 ga hamda 5 ga karrali son bor yoki yoqligini tekshiruvchi funksiya yozing.
{
    let arr = [15, 44, 76, 80];
    let res = arr.some((value) => {
        return value % 15 == 0;
    })
    console.log(res);
}
//4-miosl
//sonlardan tashkil topgan massiv elementari orasidan 3- eng kattasini topuvchi funksiya yozing.
{
    let arr = [15, 45, 54, 55];
    console.log(arr.at(-3));
}
//5-misol
//sonlardan tashkil topgan massivni teskari tartibda yozib uni yozuv korinishga otkazib beruvchi funksiya yozing.
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let a = arr.reverse().join;
    console.log(a);
}