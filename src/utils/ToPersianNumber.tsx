interface IPersianType {
  number: number | string;
}

const changeNumber = (number: number | string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number.toString().replace(/\d/g, (x) => persianDigits[x]);
};

const ToPersianNumber = ({ number }: IPersianType) => {
  return <div className="font-vazir text-right">{changeNumber(number)}</div>;
};

export default ToPersianNumber;
