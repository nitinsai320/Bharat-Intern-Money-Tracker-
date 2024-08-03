let expenses=[]
let totalAmount=0;
const category_select=document.getElementById('category_select')
const amount_Input=document.getElementById('amount_input')
const InfoInput=document.getElementById('info')
const dateInput=document.getElementById('date_input')
const addBtn=document.getElementById('add_btn')
const expensetTableBody=document.getElementById('expense-table-body')
const totalAmountCell=document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category=category_select.value;
    const info=InfoInput.value;
    const amount=Number(amount_Input.value);
    const date=dateInput.value;

    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount)|| amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(info ===' '){
        alert('please enter a valid amount info');
        return;
    }
    if(date ===' '){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,info,date})
    if(category==='Income'){
        totalAmount+=amount;
    }
    if(category==='Expense'){
        totalAmount+=amount;
    }
    totalAmountCell.textContent=totalAmount;

    const newRow=expensetTableBody.insertRow();

    const categoryCell=newRow.insertCell();
    const AmountCell=newRow.insertCell();
    const InfoCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();

    const deletEBtn=document.createElement('button');
    deletEBtn.textContent=('Delete');
    deletEBtn.classList.add('delete-btn');
    deletEBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);
        if(category==='Income'){
            totalAmount-=amount;
        }
        if(category==='Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expensetTableBody.removeChild(new Row)
    })
    const expense= expenses[expenses.length-1]
    categoryCell.textContent=expense.Category;
    AmountCell.textContent=expense.amount;
    InfoCell.textContent=expense.info;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deletEBtn);
});
for(const expense of expenses){
    if(category==='Income'){
        totalAmount+=amount;
    }
    if(category==='Expense'){
        totalAmount+=amount;
    }
    totalAmountCell.textContent=totalAmount;

    const newRow=expensetTableBody.insertRow();

    const categoryCell=newRow.insertCell();
    const AmountCell=newRow.insertCell();
    const InfoCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell=newRow.insertCell();

    const deletEBtn=document.createElement('button');
    deletEBtn.textContent=('Delete');
    deletEBtn.classList.add('delete-btn');
    deletEBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);
        if(Category==='Income'){
            totalAmount-=amount;
        }
        if(Category==='Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expensetTableBody.removeChild(new Row)
    })
    const expense= expenses[expenses.length-1]
    categoryCell.textContent=expense.Category;
    AmountCell.textContent=expense.amount;
    InfoCell.textContent=expense.info;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deletEBtn);
}