//how many notification is unread
const notificationQuantity = document.querySelector('.notification-quantity');
//mark all notification as read4
const markAll = document.getElementById("mark-all");
// catch "remove" class to remove it when clicked on notification
const unread = document.querySelector('.unread');
//and last is a notification div
const notification = document.querySelectorAll('.notifications');

let count = 0;

const markAllAsRead = () => {
    markAll.addEventListener("click" , () =>{
        for(let i = 0; i < notification.length; i++){
            if(notification[i].classList.contains('unread')){
                notification[i].classList.remove('unread');
                notificationQuantity.textContent = '0';
            }
        }
    })
}

//counter how many notification is unread

const countUnread = () =>{
    for(let i = 0; i < notification.length; i++){
        if(notification[i].classList.contains('unread')){
            count ++;
        }
    }
    console.log(count);
}

const readOnCLick = () =>{
    countUnread();
    notificationQuantity.innerHTML = count;
    for(let i = 0; i < notification.length; i++){
        notification[i].addEventListener('click', () =>{
            if(notification[i].classList.contains('unread')){
                notification[i].classList.remove('unread');
                count --;
                notificationQuantity.textContent = count;
            }
        })
    }
    
}

//
markAllAsRead();
readOnCLick();
