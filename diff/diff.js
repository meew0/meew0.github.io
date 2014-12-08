var a, b, c, d;
var a_, b_, c_;
var a__, b__;
var l = -5, u = 5;

rndInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

d = (Math.random() > 0.5) ? 0 : rndInt(l,u);
c = rndInt(0,u); // Nullstellen der ersten Ableitung sollen lösbar sein
b = rndInt(l,u);
a = rndInt(l,u);

// Ableiten
c_ = c;
b_ = 2*b;
a_ = 3*a;

b__ = b_;
a__ = 2*a_;

pow = Math.pow;

calc = function(x) {
  return a*pow(x,3)+b*pow(x,2)+c*x+d;
}

calc_ = function(x) {
  return a_*pow(x,2)+b*x+c;
}

calc__ = function(x) {
  return a__*x+b__;
}

delta = function() { return pow(b_,2) - 4*a_*c_; }
root_ = function() {
  return [
    ((-b)+Math.sqrt(delta()))/(2*a),
    ((-b)-Math.sqrt(delta()))/(2*a),
  ];
}

root__ = function() {
  return (-b__)/a__;
}

evs = root_();

// Extremwertentscheid
maxSgn = (calc__(evs[0]) < 0) ? 1 : -1;
minSgn = (calc__(evs[0]) >= 0) ? 1 : -1;

maxNum = (Number.isInteger(Math.sqrt(delta()))) 
  ? ("" + ((-b)*maxSgn+Math.sqrt(delta()))) 
  : ("" + (-b) + ((maxSgn > 0) ? "+" : "-") + "\\sqrt{" + delta() + "}");
  
minNum = (Number.isInteger(Math.sqrt(delta()))) 
  ? ("" + ((-b)*minSgn+Math.sqrt(delta()))) 
  : ("" + (-b) + ((minSgn > 0) ? "+" : "-") + "\\sqrt{" + delta() + "}");

denom = 2*a;

max = "\\frac{" + maxNum + "}{" + denom + "}";
min = "\\frac{" + minNum + "}{" + denom + "}";

w = (Number.isInteger(root__()))
  ? ("" + root__())
  : ("\\frac{" + (-b__) + "}{" + (a__) + "}");

randoms = [
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u)
]

things = [
  [
    katex.renderToString("(" + randoms[0] + "|" + calc(randoms[0]) + ")") + " ist Punkt der Funktion",
    katex.renderToString("(" + 0 + "|" + calc(0) + ")") + " ist Punkt der Funktion",
  ],
  [
    katex.renderToString("\\left(" + max + "|" + calc(max) + "\\right)") + " ist ein lokales Maximum",
    katex.renderToString("\\left(" + min + "|" + calc(min) + "\\right)") + " ist ein lokales Minimum",
    katex.renderToString("(" + randoms[1] + "|" + calc(randoms[1]) + ")") + " ist Punkt der ersten Ableitung"
    "Der Punkt " + katex.renderToString("(" + randoms[0] + "|" + calc(randoms[0]) + ")") + " hat eine Steigung von " + katex.renderToString(calc_(randoms(0))),
  ],
  [
    katex.renderToString("f\\left(" + w + "\\right)") + " ist ein Wendepunkt, die zugehörige Wendetangente hat eine Steigung von " + katex.renderToString(calc_(w)),
    "Die zweite Ableitung hat einen " + katex.renderToString("y") + "-Achsenabschnitt von " + katex.renderToString("" + b__),
    katex.renderToString("(" + randoms[2] + "|" + calc(randoms[2]) + ")") + " ist Punkt der zweiten Ableitung"
  ]
]
