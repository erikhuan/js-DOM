/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var name1 = document.getElementById('name1');
name1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var pos2 = document.getElementById('position2');
pos2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var alias3 = document.getElementById('alias3');
alias3.innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profiles = document.getElementsByClassName('profile');
profiles[0].innerHTML = '-insert lyrics-';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profiles[1].innerHTML = '-insert quote-';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliases = document.getElementsByClassName('alias');
aliases[2].innerHTML = 'As Samuel Jackson';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var divElem = document.createElement('div');
divElem.id = 'name7';
divElem.innerHTML = 'Peter Griffin';
nameParent.appendChild(divElem);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var divAlias = document.createElement('alias8');
divAlias.innerHTML = 'Old Man Riverwalk';
aliasParent.appendChild(divAlias);

//Final Boss
/*9. Create your own profile.*/

var rows = document.getElementsByClassName('row');

var myName = document.createElement('div');
myName.id = 'name9';
myName.innerHTML = 'Erik';

var myPos = document.createElement('div');
myPos.id = 'position9';
myPos.innerHTML = 'Upcoming Programmer';

var myDescription = document.createElement('div');
myDescription.innerHTML = 'Mysterious Gray Blob';

var myQuote = document.createElement('div');
myQuote.innerHTML = '"Calm down and chill out."';

rows[2].appendChild(myName);
rows[2].appendChild(myPos);
rows[2].appendChild(myDescription);
rows[2].appendChild(myQuote);