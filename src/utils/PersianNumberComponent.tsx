interface IPersianType {
  number: number;
}

const toPersianNumber = (number: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number.toString().replace(/\d/g, (x) => persianDigits[x]);
};

const PersianNumberComponent = ({ number }: IPersianType) => {
  return <div className="font-vazir text-right">{toPersianNumber(number)}</div>;
};

export default PersianNumberComponent;
