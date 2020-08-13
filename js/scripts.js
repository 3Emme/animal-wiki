$(document).ready(function() {
  $("button#horse-1-button").click(function() {
    const love1 = parseInt(prompt("1-10 how much do you love this horse?"));
    
    if (love1 > 5) {
      $('#horse-1-love').show();
    } else if (love1 === 5) {
      alert("WRONG! Tell me how your really feel. This 'ol horse has no time for ambivalence.");
    } else {
      $('#horse-1-hate').show();
    }
  });

  $("button#horse-2-button").click(function() {
    const love2 = parseInt(prompt("1-10 how much do you love this horse?"));

    if (love2 > 5) {
      $('#horse-2-love').show();
    } else if (love2 === 5) {
      alert("WRONG! Tell me how your really feel. This 'ol horse has no time for ambivalence.");
    } else {
      $('#horse-2-hate').show();
    }
  });

  $("button#horse-3-button").click(function() {
    const love3 = parseInt(prompt("1-10 how much do you love this horse?"));
    if (love3 > 5) {
      $('#horse-3-love').show();
    } else if (love3 === 5) {
      alert("WRONG! Tell me how your really feel. This 'ol horse has no time for ambivalence.");
    } else {
      $('#horse-3-hate').show();
    }
  });

});