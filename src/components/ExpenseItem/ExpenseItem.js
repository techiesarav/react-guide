import './ExpenseItem.css';

function ExpenseItem(props) {
  const Month = new Date (props.date).toLocaleDateString("en-us",{month:'long'});
  const day = new Date (props.date).toLocaleDateString("en-us",{day:'2-digit'});
  const year = new Date(props.date).getFullYear();
  return (
    <div className='expense-item'>
      <div>
        <div>{Month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;