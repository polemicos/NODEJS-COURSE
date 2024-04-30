const highlightKeywords = function(static, ...tags){
    const length = tags[0].length;
    for(let i=0;i<length;i++){
        tags[0][i] = '<span class=\'highlight\'>' + tags[0][i] + '</span>';
    }
    for(let i=0; i<length;i++){
        static = static.replace(new RegExp(`\\$\\{${i}\\}`, 'g'), tags[i]);
    }

    return static;
}









const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> 
// tagged templates to create custom <span class='highlight'>
// template</span> literals for <span class='highlight'>tagged</span> manipulation."