export const Practice3 = () => {
  const calcNumber = (num: number) => {
    const resultNum = num * 1.1;
    console.log(resultNum);
    return resultNum.toString();
  };
  const onClickButton = () => {
    let total: number = 0;
    //Type 'string' is not assignable to type 'number'.ts(2322)
    total = calcNumber(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題3 変数の型指定</p>
      <button onClick={onClickButton}>練習問題３</button>
    </div>
  );
};
