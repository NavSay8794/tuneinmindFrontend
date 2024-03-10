export const mapServiceText = (service) => {
    let content = []
    if (service.name.toLowerCase() !== 'workshops') {
        console.log(service.name)
        let serviceTextArr = service.description.split('.')
        serviceTextArr.forEach((item) => {
            if (item !== ' ') {
                let temp = <p className="innerItem">{item}.</p>
                content.push(temp)
            }
        })
        return content
    }
    else{
        
    }

}