import "./ExpenseDate.css";

function ExpenseDate (props) {
    const Month = new Date (props.date).toLocaleDateString("en-us",{month:'long'});
    const day = new Date (props.date).toLocaleDateString("en-us",{day:'2-digit'});
    const year = new Date(props.date).getFullYear();
    return (
        <div className="expense-date">
        <div className="expense-date__month">{Month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );
}

export default ExpenseDate;