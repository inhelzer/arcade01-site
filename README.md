# אתר מגמת משחקי מחשב — קמפוס פרס

שחזור סטטי של עמוד הבית ב־Google Sites, עם הגרפיקה והסדר המקוריים. קישורים לעמודים שעדיין לא הועברו מפנים לאתר המקורי.

## עריכה

- `index.html`: עמוד הבית.
- `styles/original-page.css`: עיצוב העמוד המקורי.
- `styles/google-sites-layout.css`: כללי הפריסה שנשמרו מתוך האתר המפורסם; אינו דורש JavaScript של Google Sites.
- `styles/site.css` ו־`site.js`: ניווט נגיש ותפריט נייד.
- `data/media-manifest.json`: מיפוי כל 50 התמונות למאגר המדיה.
- `data/navigation.json`: מפת הניווט לצורכי העברה בהמשך.

המדיה נמצאת רק ברפוזיטורי https://github.com/inhelzer/arcade01-media ומוגשת מ־raw.githubusercontent.com. קוד האתר אינו מכיל עותקי תמונות. להפעלה מקומית: `python3 -m http.server 4173`.

## פרסום

GitHub Settings → Pages → Deploy from a branch → main → /(root). לאחר ההפעלה הכתובת הצפויה היא https://inhelzer.github.io/arcade01-site/ .

## סטטוס

הושלם עמוד הבית בלבד. אין קוד מעקב, הרשאות או תלות בסקריפטים של Google Sites. קובצי הגרפיקה הועתקו כפי שהוגשו באתר המפורסם; אין בכך טענה שהם קובצי המקור לעריכה.
