export default function saveData(data){
    localStorage.setItem('myData', JSON.stringify(data));
}

export function loadData(){
    const data = localStorage.getItem('myData');
    return JSON.parse(data);
}