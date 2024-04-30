const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};



const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localize = function(static, ...tags){
    const spTranslations = translations[language];
    
    for(let i=0;i<tags.length;i++){
        tags[i] = spTranslations[tags[i]];
    }
    let res = static[0];
    for(let i=0; i<tags.length; i++){
        res += tags[i]+static[i+1];
    }
    return res;
}



const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")