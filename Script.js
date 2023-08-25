/**
 * 
 */
$(document).ready(function () {
 var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
 var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

// function inWords(num) {
//  if ((num = num.toString()).length > 9) return 'overflow';
//  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//  if (!n) return;
//  var str = '';
//  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
//  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
//  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
//  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
//  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
//
//  function withDecimal(str) {
//   var nums = n.toString().split('.');
//   var whole = inWords(num[0]);
//
//   if (nums.length === 2) {
//    var fraction = inWords(nums[1]);
//    return whole + ' and ' + fraction + ' Paise';
//   } else {
//    return whole;
//   }
//  }
//  return str;
// }
 
function numberToWords(number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "lakh", "crore"];
    
    function convertGroup(num) {
        const parts = [];
        
        if (num >= 100) {
            parts.push(ones[Math.floor(num / 100)] + " hundred");
            num %= 100;
        }
        
        if (num >= 11 && num <= 19) {
            parts.push(teens[num - 10]);
        } else if (num >= 20) {
            parts.push(tens[Math.floor(num / 10)]);
            num %= 10;
        }
        
        if (num >= 1 && num <= 9) {
            parts.push(ones[num]);
        }
        
        return parts.join(" ");
    }
    
    if (number === 0) {
        return "zero rupees";
    }
    
    let result = "";
    let groupIndex = 0;
    
    while (number > 0) {
        const group = number % 1000;
        if (group > 0) {
            result = convertGroup(group) + " " + thousands[groupIndex] + " " + result;
        }
        
        number = Math.floor(number / 1000);
        groupIndex++;
    }
    
    return result.trim();
}

function convertNumberWithDecimal(number) {
    const [integerPart, decimalPart] = number.toString().split(".");
    const integerWords = numberToWords(parseInt(integerPart));
    const decimalWords = numberToWords(parseInt(decimalPart)) || "zero";
    
    const result = [];
    if (integerWords !== "zero") {
        result.push(integerWords);
        result.push("and");
    }
    result.push(decimalWords);
    result.push(decimalPart === "1" ? "paise" : "paise");
    
    return result.join(" ");
}



 $(".input").keyup(function () {
  var valp1 = +$(".prec1").val();
  var valr1 = +$(".rate1").val();
  var valq1 = +$(".qty1").val();

  var valp2 = +$(".prec2").val();
  var valr2 = +$(".rate2").val();
  var valq2 = +$(".qty2").val();

  var valp3 = +$(".prec3").val();
  var valr3 = +$(".rate3").val();
  var valq3 = +$(".qty3").val();

  var valp4 = +$(".prec4").val();
  var valr4 = +$(".rate4").val();
  var valq4 = +$(".qty4").val();

  var valp5 = +$(".prec5").val();
  var valr5 = +$(".rate5").val();
  var valq5 = +$(".qty5").val();


  var valp6 = +$(".prec6").val();
  var valr6 = +$(".rate6").val();
  var valq6 = +$(".qty6").val();

  $("#Gst1").val((valr1 * valq1) * valp1 / 100);
  $("#Gst2").val((valr2 * valq2) * valp2 / 100);
  $("#Gst3").val((valr3 * valq3) * valp3 / 100);
  $("#Gst4").val((valr4 * valq4) * valp4 / 100);
  $("#Gst5").val((valr5 * valq5) * valp5 / 100);
  $("#Gst6").val((valr6 * valq6) * valp6 / 100);

  var GstTotal = ((valr1 * valq1) * valp1 / 100) + ((valr2 * valq2) * valp2 / 100) +
   ((valr3 * valq3) * valp3 / 100) + ((valr4 * valq4) * valp4 / 100) +
   ((valr5 * valq5) * valp5 / 100) + ((valr6 * valq6) * valp6 / 100);


  $("#GstT").val(GstTotal + ("/-"));
  $("#CGST").val((GstTotal / 2) + ("/-"));
  $("#SGST").val((GstTotal / 2) + ("/-"));
 });

 $(".input").keyup(function () {

  var val1 = +$(".rate1").val();
  var val2 = +$(".qty1").val();

  var val3 = +$(".rate2").val();
  var val4 = +$(".qty2").val();

  var val5 = +$(".rate3").val();
  var val6 = +$(".qty3").val();

  var val7 = +$(".rate4").val();
  var val8 = +$(".qty4").val();

  var val9 = +$(".rate5").val();
  var val10 = +$(".qty5").val();

  var val11 = +$(".rate6").val();
  var val12 = +$(".qty6").val();

  var valp1 = +$(".prec1").val();
  var valp2 = +$(".prec2").val();
  var valp3 = +$(".prec3").val();
  var valp4 = +$(".prec4").val();
  var valp5 = +$(".prec5").val();
  var valp6 = +$(".prec6").val();

  var valr1 = +$(".rate1").val();
  var valr2 = +$(".rate2").val();
  var valr3 = +$(".rate3").val();
  var valr4 = +$(".rate4").val();
  var valr5 = +$(".rate5").val();
  var valr6 = +$(".rate6").val();

  var valq1 = +$(".qty1").val();
  var valq2 = +$(".qty2").val();
  var valq3 = +$(".qty3").val();
  var valq4 = +$(".qty4").val();
  var valq5 = +$(".qty5").val();
  var valq6 = +$(".qty6").val();

  $("#result1").val(val1 * val2);
  $("#result2").val(val3 * val4);
  $("#result3").val(val5 * val6);
  $("#result4").val(val7 * val8);
  $("#result5").val(val9 * val10);
  $("#result6").val(val11 * val12);

  var AmountTotal = (val1 * val2) + (val3 * val4) + (val5 * val6) + (val7 * val8) +
   (val9 * val10) + (val11 * val12);

  var GrandTotal = ((val1 * val2) + (val3 * val4) + (val5 * val6) + (val7 * val8) +
   (val9 * val10) + (val11 * val12)) + (((valr1 * valq1) * valp1 / 100) +
   ((valr2 * valq2) * valp2 / 100) +
   ((valr3 * valq3) * valp3 / 100) + ((valr4 * valq4) * valp4 / 100) +
   ((valr5 * valq5) * valp5 / 100) + ((valr6 * valq6) * valp6 / 100));


  $('#AmountT').val(AmountTotal + ("/-"));

  $("#grandT").val(GrandTotal + ("/-"));

  $("#word").val(convertNumberWithDecimal(GrandTotal) + (" only"));

 });
});



window.onload = function () {
 document.getElementById("download")
  .addEventListener("click", () => {
   const invoice = this.document.getElementById("invoice");
   console.log(invoice);
   console.log(window);
   var opt = {
    margin: 1,
    filename: 'InvoiceDeom.pdf',
    image: {
     type: 'jpeg',
     quality: 0.98
    },
    html2canvas: {
     scale: 2
    },
    jsPDF: {
     unit: 'mm',
     format: 'a4',
     orientation: 'portrait'
    }
   };
   html2pdf().from(invoice).set(opt).save();
  })
}




//$(window).on({
//   'beforeprint': () => {
//       this.detectPrintPreview();
//    },
//    'print-preview': () => {
//        this.formatDesktopPrintPreview();
//    }
//});
//
//detectPrintPreview() {
//    $('#capture').trigger('print-preview');
//}
//
//formatPrintPreview() {
//    console.log('print preview');
//
//    $('.page').appendTo('.example-elem);
//
//}