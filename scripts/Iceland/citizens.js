export const Citizens = (citizen) => {
    return `<li>${citizen}</li>`
}

/* leave citizen parameter singular to denote that items will be passed through one at a time */

/* had previously returned... 
    `<ul>
        <li>${citizen}</li>
    </ul>` 
....however, this would be a problem as then each item passed through the function would be 
    given its own <ul>.     
*/
