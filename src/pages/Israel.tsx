
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, Zap, MessageCircle, BarChart3, Globe, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const Israel = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              🇮🇱 סוכנות דיגיטלית ישראל
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Goodleft: מומחים ב
            <span className="text-primary">יצירת לידים</span> בישראל
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            מתמחים בפרסום דיגיטלי מרובה פלטפורמות: Taboola, Google Ads, Meta, TikTok Ads ואוטומציות שיווק. צרו יותר לידים איכותיים לעסק הישראלי שלכם.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                צרו יותר לידים
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+972586841001" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                972+ 58 68 41 001
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* פלטפורמות המומחיות שלנו */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="פלטפורמות המומחיות שלנו"
            subtitle="שליטה מלאה בערוצי הפרסום הכי יעילים בשוק הישראלי"
            centered
            chip="רב-פלטפורמות"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Taboola Ads</h3>
              <p className="text-muted-foreground">
                פרסום נטיבי פרימיום באתרי החדשות והמדיה הגדולים בישראל. מקסימום מעורבות עם תוכן נטיבי.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Google Ads</h3>
              <p className="text-muted-foreground">
                השלטו בחיפושי Google בעברית ואנגלית. קמפיינים SEA מותאמים לשוק המקומי הישראלי.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Meta Ads</h3>
              <p className="text-muted-foreground">
                פרסומות Facebook ו-Instagram ממוקדות לקהלים ישראלים. קריאייטיבים מותאמים לקודים התרבותיים המקומיים.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pink-500">
              <div className="bg-pink-100 p-3 rounded-xl w-fit mb-6">
                <Smartphone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">TikTok Ads</h3>
              <p className="text-muted-foreground">
                הגעו לדור הצעיר הישראלי עם קמפיינים יצירתיים ומעוררי מעורבות ב-TikTok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* שירותים משלימים */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container">
          <SectionHeading
            title="שירותים משלימים"
            subtitle="גישה 360 מעלות למקסום המרות"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">אוטומציית שיווק</h3>
              <p className="text-muted-foreground">
                רצפים אוטומטיים של טיפוח ו-retargeting להמרת הפרוספקטים שלכם ללקוחות נאמנים.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">אנליטיקה ומעקב</h3>
              <p className="text-muted-foreground">
                מעקב מדויק אחר ביצועים עם לוחות בקרה מותאמים אישית ודיווח מפורט.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">אופטימיזציה מתמשכת</h3>
              <p className="text-muted-foreground">
                בדיקות A/B קבועות ואופטימיזציות מבוססות נתונים לשיפור ה-ROI באופן מתמיד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* למה לבחור ב-Goodleft */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading
              title="למה לבחור ב-Goodleft עבור ישראל?"
              subtitle="מומחיות ייחודית בשוק הישראלי ובפלטפורמות דיגיטליות"
              centered
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">מומחיות רב-פלטפורמות</h3>
                  <p className="text-muted-foreground">שליטה טכנית מתקדמת ב-Taboola, Google, Meta ו-TikTok עם אסטרטגיות מותאמות לכל ערוץ.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🇮🇱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">הכרת השוק המקומי</h3>
                  <p className="text-muted-foreground">הבנה עמוקה של המאפיינים התרבותיים וההתנהגותיים של השוק הישראלי.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">תוצאות מדידות</h3>
                  <p className="text-muted-foreground">גישה מבוססת נתונים עם KPIs ברורים ודיווח שקוף עבור ROI מותאם.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">יצירת קשר ישיר ישראל</h3>
              <div className="text-center space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-lg">📞 קו ישיר</p>
                  <a href="tel:+972586841001" className="text-2xl font-bold text-primary hover:underline">
                    972+ 58 68 41 001
                  </a>
                </div>
                <p className="text-muted-foreground">
                  זמינים בעברית, אנגלית וצרפתית
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+972586841001">
                    התקשרו עכשיו
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="מוכנים לחזק את הלידים שלכם בישראל?"
        description="צרו קשר עם המומחים שלנו כבר היום עבור אסטרטגיה רב-פלטפורמות מותאמת אישית וצרו יותר לידים איכותיים לעסק שלכם."
        buttonText="התחילו את האסטרטגיה שלי"
        buttonLink="/contact"
        className="bg-gradient-to-r from-primary/5 to-blue-50"
      />
    </div>
  );
};

export default Israel;
