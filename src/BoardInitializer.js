export function initializeBoard(container){
    for(let i=1; i<=10; i++)
    {
        for(let j=1; j<=10; j++)
        {
            const field = document.createElement("div");
            field.classList.add("field");
            field.setAttribute("x", j.toString())
            field.setAttribute("y", i.toString())
            container.appendChild(field);
            
            
        }
    }
}