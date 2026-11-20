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

הועברו עמוד הבית, פרויקטי כיתה י׳, 12 פרויקטי כיתה י״א, פרויקטי כיתה י״ב ותתי־העמודים שלהם, עמודי ההדרכה המשותפים ותכנית הלימודים. חומרי לימוד שטרם הועברו עדיין מקושרים לאתר המקורי. `sitemap.xml` כולל את העמודים החדשים.

פרטי העברה וקישורים מקוריים נשמרים ב־`data/*-migration.json`, ופרטי המדיה ובדיקות SHA-256 ב־`data/*-media-manifest.json`. קישורי המדיה החדשים מוצמדים לגרסת commit ברפוזיטורי המדיה. טבלת הניהול: https://docs.google.com/spreadsheets/d/1U_UvdpfIOSH49fC2abCOyjs6yygAvtacifanCWv6r9Q/edit . ירוק מציין עמוד שהועבר; הערות בכתום מציינות סוגיה פתוחה.

### כיתה י״א — סוגיות פתוחות, 20.11.2026

- נשמרו 147 קובצי מדיה מקוריים. ייצוא 13 תמונות רקע/קרוסלה טרם הצליח; כתובות המקור שלהן נשמרו, והן אינן אמינות מחוץ ל־Google Sites. הפריטים מסומנים בטבלה. כאשר יש טקסט בהיר מעל רקע חסר, מוגדר צבע כהה לשמירת הקריאות.
- הטמעות itch.io נשמרו לפי הבקשה; חלקן מחזירות 429. מצגות Canva ו־Google Slides נשמרו ונבדקו.
- קישורי Share My Game שאינם זמינים נשמרו לעדכון עתידי, לרבות בעינו של האח הגדול ובמשחקים רציניים. בעינו של האח הגדול המשחקים הועברו לתחתית, אחרי הגרפיקות.
- Game Jam 2022 מציג שישה קישורי משחק ישירים מ־beta.simmer.io. אין ליצור את שבעת תתי־העמודים הישנים, ואין לקשר לחומרי המתכנתים.
- נוסח תכנית הלימודים מבוסס על מסמך העבודה, וממתין לעריכה נוספת של המחברת.

אין קוד מעקב, הרשאות או תלות בסקריפטים של Google Sites. קובצי הגרפיקה הועתקו כפי שהוגשו באתר המפורסם; אין בכך טענה שהם קובצי המקור לעריכה. הגרפיקה המקורית נשמרה במאגר המדיה, גם כאשר כותרת שהייתה בתמונה הוחלפה בטקסט בעמוד.

## Shared Guitar Hero tutorial

All migrated Guitar Hero project pages should link to `guides/guitar-hero/`. The Genially resource is embedded once there: https://view.genial.ly/65bd671856150300140860ea. Keep this URL shared when migrating other editions of the project.
