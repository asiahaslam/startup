# startup
Here are some edits from VS Code
Here are some edits from GitHub
Here is a merge of both edits

#Notes
I learned tons from this assignment. I think I had originally made some kind of mistake while cloning the repository and it was pretty stressful. However, after some stress, I finally figured it out. I am feeling a lot more confident using the terminal on VS Code as well as using GitHub and communicating between the two. One of the most important things I learned was the importance of making sure I was in the right directory.

Elevator pitch: 
Have you ever played the Oregon Trail game that was released back in the 70’s? Maybe you've read a Choose Your Own Adventure book as a kid. Our new app is designed to bring back the fun and nostalgia of a simple game where you can affect the outcome by making choices. Eventually, we hope to have a variety of themes to choose from, but right now we are focusing on a mission to space. This app will allow you to make an account, choose your path through a series of exciting scenes, and see how you compare to other players that day.

[Screenflow](https://github.com/asiahaslam/startup/files/10526008/Screenflow.Diagram.Flowchart.Whiteboard.in.Pink.Yellow.Adjacent.Color.Blocks.Style.pdf)

HTML and CSS:
I learned tons about how to use Bootstrap while making this simple application. I have never used Bootstrap before, so it was a good learning experience. I found an online tool where I could change the color scheme in Bootstrap to make it a bit more like space.

div is “division element”

To point to another dns record use this dns record type: CNAME. CNAMES are aliases. Pointer to another record. Also know what A is.

You can use import @url in CSS to load fonts from google

const p = new Promise((resolve, reject) => (
	setTimeout(() => (
	console.log(‘taco’);
	resolve(true);
     ),   10000);
));
console.log(‘burger’);

p
.then((result) => console.log(‘shake’))
.catch((e) => console.log(‘salad’))
.finally(() => console.log(‘noodles’))

console.log(‘fries’);

Understand what a promise script will output: burger fries taco shake noodles

Valid JSON: {“x”:3}. Key values are always in quotes. It’s not JavaScript. Undefined is not valid for JSON, but null is.

Which is not valid? <javascript>1+1</javascript>        <div onclick=’1+1’></div> is valid

let a  = [‘cow’, ‘rat’, ‘fish];
let b = a.filter(v => v.match(/A|f/i));
console.log(b);

Answer is {‘rat’, ‘fish’}

let a  = [‘cow’, ‘rat’, ‘fish];
let b = a.reduce((a, v) => [a, v].join(‘:’));
console.log(b);

Answer is cow:rat:fish

Which is not valid JavaScript function: function f(x) = {}

valid:
Const f = function(x) {}
Const f = {x} => {}

Know reduce, map, filter, sum, any for arrays

“li” means list item

Know the commonly used HTML in the instruction

Understand the dom

document.querySelector(‘p’).addEventListener(‘mouseover’, console.log);

Above code adds a mouseover event listener to a p element

Hover is pseudo descriptor in CSS but mouseover is event handler for javascript. Same thing though but don’t overuse because does not work on mobile

let a = [1, 2, 3];
let e = a.map(number => {
	return (‘a’ + number)
});
console.log(e);

[‘a1,’ ’a2,’ ‘a3’] single quotes or double quotes for strings

const a = async function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => (console.log(‘D’); resolve(true)}, 10000);
	})
}

try {
	console.log(‘A’);
	await a();
	console.log(‘B’)
} catch(e) {
	console.log(‘C’);
}

Output is A D B

Async will always return a promise. Even if you don’t specify a promise, it will create one for you

Dom txt is replacing what’s there with a child that is just text

DNS subdomain: c260.cs.byu.edu the whole thing is the subdomain

Flex column with column reverse means it flips everything upside down. Useful for right-to-left languages etc.

Get more comfortable with arrow functions. Don’t need parentheses for arrow

No equal signs for JavaScript objects. JSON uses double quotes but weird in JavaScript

Chmod +x deploy.sh is the console command that makes a script executable.

Know
ls
Sudo
Chmod
Ssh

Arrow functions (these two are the same):

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);

These are also the same:

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3



Function
Meaning
Example
push
Add an item to the end of the array
a.push(4)
pop
Remove an item from the end of the array
x = a.pop
slice
Return a sub-array
a.slice(1,-1)
sort
Run a function sort an array in place
a.sort((a,b) => b-a)
values
Creates an iterator for use with a for of loop
for (i of a.values()) {...}
find
Find the first item satisfied by a test function
a.find(i => i < 2)
forEach
Run a function on each array item
a.forEach(console.log)
reduce
Run a function to reduce each array item to a single item
a.reduce((a, c) => a + c)
map
Run a function to map an array to a new array
a.map(i => i+i)
filter
Run a function to remove items
a.filter(i => i%2)
every
Run a function to test if all items match
a.every(i => i < 3)
some
Run a function to test if any items match
a.some(i => 1 < 1)


echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
You can also chain the input and output of commands using special characters
| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists


