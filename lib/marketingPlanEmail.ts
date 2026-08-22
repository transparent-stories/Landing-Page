import { MarketingPlanFormData } from '@/app/components/marketing-form/types'

function list(items: string[]) {
  return items.length
    ? `<ul style="margin:8px 0;padding-left:20px;">
        ${items
          .map(
            (item) =>
              `<li style="margin-bottom:4px;">${item}</li>`
          )
          .join('')}
      </ul>`
    : '<p>—</p>'
}

/* ------------------------------------------ */
/* Admin Email */
/* ------------------------------------------ */

export function adminMarketingPlanEmail(
  data: MarketingPlanFormData
) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Marketing Plan Request</title>
</head>

<body
style="
margin:0;
padding:40px;
background:#F6F5F3;
font-family:Arial,sans-serif;
color:#1E1E1E;
"
>

<div
style="
max-width:700px;
margin:auto;
background:white;
border-radius:18px;
overflow:hidden;
border:4px solid #575A83;
"
>

<div
style="
background:#10A2D4;
padding:30px;
text-align:center;
"
>

<h1
style="
margin:0;
color:white;
font-size:30px;
font-weight:900;
"
>
New Marketing Plan Request
</h1>

</div>

<div style="padding:35px;">

<h2 style="color:#575A83;">
Services Required
</h2>

${list(data.services)}

<hr>

<h2 style="color:#575A83;">
Goals
</h2>

${list(data.goals)}

<hr>

<h2 style="color:#575A83;">
Monthly Budget
</h2>

<p>${data.budget}</p>

<hr>

<h2 style="color:#575A83;">
Website
</h2>

<p>${data.website}</p>

<hr>

<h2 style="color:#575A83;">
Contact Details
</h2>

<table
style="
width:100%;
border-collapse:collapse;
"
>

<tr>
<td><strong>Name</strong></td>
<td>${data.name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${data.email}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${data.phone}</td>
</tr>

</table>

</div>

</div>

</body>
</html>
`
}

/* ------------------------------------------ */
/* Customer Email */
/* ------------------------------------------ */

export function customerMarketingPlanEmail(
  data: MarketingPlanFormData
) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body
style="
margin:0;
padding:40px;
background:#F6F5F3;
font-family:Arial,sans-serif;
color:#1E1E1E;
"
>

<div
style="
max-width:700px;
margin:auto;
background:white;
border-radius:18px;
overflow:hidden;
border:4px solid #575A83;
"
>

<div
style="
background:#10A2D4;
padding:30px;
text-align:center;
"
>

<h1
style="
margin:0;
color:white;
font-size:30px;
font-weight:900;
"
>
Thank You!
</h1>

</div>

<div style="padding:35px;">

<p>
Hi <strong>${data.name}</strong>,
</p>

<p>
Thank you for requesting your free marketing plan.
</p>

<p>
Our strategy team has received your request and will begin analysing your business immediately.
</p>

<p>
You'll receive your personalised marketing plan shortly.
</p>

<br>

<p>
Regards,<br>
<strong>Transparent Stories</strong>
</p>

</div>

</div>

</body>
</html>
`
}