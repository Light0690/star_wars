/*
Формат CSS-переменной: 
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для 'light'
-theme-neitral-УникальноеИмя  # для 'neitral'
--theme-dark-УникальноеИмя    # для 'dark'
*/

export const changeCssVariables = theme => {
    const root = document.querySelector(':root');
    const cssVariables = ['header','bgimage'];
    
    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        )
    })
}