<script>
  function sharePayment() {
    const message = encodeURIComponent("ShadowAbssy Support is requesting ₹30 via UPI.\nUPI ID: 7656844764-2@ybl\nScan the QR or click to pay: upi://pay?pa=7656844764-2@ybl&pn=ShadowAbssy Support&am=30&cu=INR");
    const whatsappURL = `https://wa.me/?text=${message}`;
    window.open(whatsappURL, '_blank');
  }
</script>
