export const Practice1 = () => {
  const calcNumber = (num: number) => {
    console.log(num * 1.1);
  };
  const onClickButton = () => {
    calcNumber(1000); // 1100
    //Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

    // calcNumber("1000"); // 1100（暗黙の型変換）
    // calcNumber("1,000"); // NaN
  };
  return (
    <div>
      <p>練習問題1　引数の型指定</p>
      <button onClick={onClickButton}>練習問題1</button>
    </div>
  );
};
