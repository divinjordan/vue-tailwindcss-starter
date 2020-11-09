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
    fields.forEach( element => {
        if(data){
            formModel[element.name] = data[element.name];
        }
        else{
            if( element.type == 'checkbox'){
                formModel[element.name] = [];
            }else{
                formModel[element.name] = ''
            }
        }
    })

    return {
        fields: fields,
        values: formModel
    }
}
