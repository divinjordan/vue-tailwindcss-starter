/**
 * 
 * This function will create a form such as it would be usefull for my form component
 * data is option, if data are set, it will ne use as optional data
 * 
 * fields and data should be define as follow:
 * fields:[
 * ... 
 * {
 * name:"",
 * label: "",
 * placeholder:"",
 * .....
 *  }
 * ]
 * 
 * data:{
 * name:"Nguekeu divin"
 * }
 * 
 * @param {*} fields 
 * @param {*} data 
 */

export const createForm = (fields,data = undefined) => {

    const formModel = {};
    const formFields = {};
    const formGrid = [];

    // create formModel and formFields
    fields.map( item => {
        if(!Array.isArray(item))
            return [item]
        else
            return item
    }).forEach( line => {
        // if we don't want multiple columns
        const gridLine = [];
        line.forEach( element => {
            gridLine.push(element.name);
            //create field
            formFields[element.name] = element;
            // create model
            if(data[element.name]){
                switch(element.type){
                    case 'prepend':
                        const prepend = data[element.name];
                        formModel[element.name] = prepend;    
                        break;
                    default:
                        formModel[element.name] =  data[element.name];
                        break;
                }
            }
            else{
                switch(element.type){
                    case 'checkbox':
                        formModel[element.name] = [];
                        break;
                    case 'prepend':
                        formModel[element.name] = element.prepend ? [element.prepend,""] : [];
                        break;
                    default:
                        formModel[element.name] = ''
                    break;
                }
            }
        })
        formGrid.push(gridLine);
    })

    return {
        grid: formGrid,
        fields: formFields,
        values: formModel
    }
}
