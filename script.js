const fs = require('fs')

let surahs_info = [];

try{
    
    let path = __dirname  + '/surahs_info.txt';
    const data = fs.readFileSync(path, 'utf-8'); // whole file

    let lines = data.split('\n');
    
    
    let singleLine;
    for(let i = 0; i < lines.length; i++){
       singleLine = lines[i].split('\t');
      
    
    surahs_info.push(
        {
            number: parseInt(singleLine[0]),
            alphapitical_order: parseInt(singleLine[1]),
            name: singleLine[2].slice(0, singleLine[2].length-1),
            verses_count: parseInt(singleLine[3]),
            revlelation_order: parseInt(singleLine[4]),
            type: singleLine[5].slice(0, singleLine[5].length-1)
        }
        )

    }
 
 //   console.log(surahs_info[9]);

    

    const json = JSON.stringify(surahs_info);
    path = __dirname + '/surahs.json'
       fs.writeFileSync(path, json, 'utf8', function(err){
            if(err){ 
                  console.log(err); 
            } else {
                console.log('DONE!');
                
            }})
    

}catch(err){

console.log(err);
}


// numer
// alphapitical_order
// name
// verses_count
// revlelation_order
// type