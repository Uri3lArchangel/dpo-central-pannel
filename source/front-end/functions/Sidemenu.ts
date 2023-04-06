let isOpened=false

export function open(){
   let sidebarContainer = document.getElementById('sidenav_container') as HTMLDivElement
   let sideBar = document.getElementById('menuIcon') as HTMLButtonElement
   if(!isOpened){
   sidebarContainer.style.left='0'
   sideBar.style.width='10%'
   isOpened=true
   }else{
    sidebarContainer.style.left='-100%'
    sideBar.style.width='100%'
    isOpened=false
   }
}

