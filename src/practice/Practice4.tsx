export const Practice4 = () => {
  const calcNumber = (num) => {
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
      <p>練習問題4　設定ファイルを触る</p>
      <button onClick={onClickButton}>練習問題4</button>
    </div>
  );
};
