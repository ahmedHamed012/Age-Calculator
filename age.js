var bd = document.getElementById("base_day"),
bm = document.getElementById("base_month"),
by = document.getElementById("base_year"),
output = document.getElementById("ot"),
sub = document.getElementById("sub");
var currd = new Date();
var cd = currd.getDate(),
cm = currd.getMonth(),
cy = currd.getFullYear(); 
var marr = [31,28,31,30,31,30,31,31,30,31,30,31],
c = 0;
sub.onclick = function()
{
    if(bd.value < 1 || bd.value > 31 || bm.value < 1 || bm.value > 12 || by.value < 1800)
    {
        output.innerHTML = "Please! Check Yourr input You may insert invalid data";
    }
    else
    {
    var ay = 0, ad = 0, am = 0;
if(cm > bm.value && cd < bd.value)
{
ay = cy - by.value;  
for (var i = bd.value;i < marr[cm-3];i++)
{
c++;
}  
ad = c + cd + 1;
am = (cm - bm.value);
}
else if (cm > bm.value && cd > bd.value)
{
ad = cd - bd.value;
am = (cm - bm.value);
ay = cy - by.value; 
}
else if (cm < bm.value && cd < bd.value)
{
ay = (cy - by.value)-1;
am = (12-bm.value) + cm;
ad = (marr[cm-1] - bd.value) + cd ;
}
else if (cm < bm.value && cd > bd.value)
{
ay = (cy - by.value)-1;
am = (12-bm.value)+(cm+1);
ad = cd - bd.value;
}
if (am === 12 )
{
    ay++;
    am = 0;
}
output.innerHTML = "Your Age is : "+"<br>"+ay+" Years "+ am+" Months "+ad+" Days ";
}
}