export const Practice2 = () => {
  const calcNumber = (num: number): number => {
    const resultNum = num * 1.1;
    console.log(resultNum);
    return resultNum;
    //Type 'string' is not assignable to type 'number'.ts(2322)
    // return resultNum.toString();
  };
  const onClickButton = () => {
    calcNumber(1000);
  };
  return (
    <div>
      <p>練習問題2 返却値の型指定</p>
      <button onClick={onClickButton}>練習問題2</button>
    </div>
  );
};
