---
title: "Kontakt"
permalink: "/contact.html"
---

<form action="https://formspree.io/f/mgedaald" method="POST">    
<p class="mb-4">Sende eine Nachricht an {{site.name}}. Wir melden uns sobald es geht!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Adresse*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Nachricht*" required></textarea>    
<input class="btn btn-success" type="submit" value="Send">
</form>
