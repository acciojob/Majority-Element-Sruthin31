//your code here
function elem(n){
let count = 0;
let person = null;

for(let i =0;i<n.length;i++){
	if(person==0){
		person = n[i];
	}
	if(n[i]===person){
		count++;
	}
	else{
		count--;
	}
}
	return;
}