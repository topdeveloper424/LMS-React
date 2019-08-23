import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        // background: '#f6f7fb',
        paddingBottom: 70,
        minHeight: '100%'
    },
    gridCard: {
        marginTop: 70,
        background: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 3px 4px #aaaaaa',
        padding: 30,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
        }
    },
    paragraph: {
        paddingTop: 10,
        paddingBottom: 10
    },
    paragraphTitle: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        "&:hover": {
            color: '#6ac145'
        }
    },
    paragraphTxt: {
        direction: 'rtl',
        textAlign: 'right',
        lineHeight: 2
    }
})

class Terms extends Component {
    render() {
        const { classes } = this.props
        return (
            <div style={{background: '#f6f7fb', height: '100%'}}>
                <Grid container className={classes.bg}>
                    <Grid item xs={12} sm={8} className={classes.gridCard}>
                        <div style={{textAlign: 'center'}}>
                            <Link to="/"><img alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} style={{width: 150}}/></Link>
                        </div>
                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>شروط استخدام الموقع الإلكتروني</h4>&nbsp;<i className="fas fa-spa"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                يتضمن هذا المستند شروط استخدام موقع أكاديمية ڤجن للتعليم عن بُعد ("شروط الاستخدام") التي بناءً عليها يمكن استخدام خدمات هذا الموقع ("www.VisionAcademy.online‬")، سواء 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                بصفتك زائراً أو مستخدماً مسجلاً. يخضع استخدامك للموقع إلى شروط الاستخدام، لذا يُرجى قراءتها بعناية قبل البدء في استخدام الموقع.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                إن استخدامك أو مشاركتك في هذا الموقع، يعني قراءتك لهذه الشروط وموافقتك على الالتزام بها، فإذا لم توافق عليها بإمكانك عدم إكمال التسجيل؛ لأن انتقالك للخطوة التالية يعني 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                موافقتك على ما ذُكر. كما تحتفظ أكاديمية ڤجن بحق تحديث شروط الاستخدام كلما دعت الحاجة، وعليه نرجو الاطلاع على مستجدات شروط الاستخدام باستمرار.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>معلومات عن الموقع</h4>&nbsp;<i className="fas fa-info-circle"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                 أكاديمية ڤجن: هي عبارة عن مؤسسة تعليمية إلكترونية تهدف إلى تطوير التعليم بأساليب حديثة ومميزة لإخراج طلبة ذو كفاءة عالية ومهارات حقيقية في مختلف المجالات لمواكبة احتياج سوق 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                العمل وإثراء الطلبة معرفيًا.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;من خلال: تقديم مقررات مكثفة تضمن تحسين المستوى التعليمي بشكل مؤكد.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>حسابك وكلمة المرور الخاصة بك</h4>&nbsp;<i className="fas fa-user-circle"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;في حال تسجيلك بالموقع وإضافة بريدك الإلكتروني وإنشاء كلمة المرور، فيجب عليك التعامل مع هذه المعلومات على أنها معلومات سرية. وبناءً على ذلك يجب الامتناع عن الإفصاح عنها إلى أي شخص.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; يجوز للدعم الفني إذا لاحظت أي نشاط مشتبه به وبحسب ما تراه مناسباً وبما تقتضي الشروط والأحكام التي تم توضحيها بتعطيل دخولك للموقع في أي وقت.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; كما يجب عليك إعادة تعيين كلمة المرور في حال معرفتك أو اشتباهك أن البريد الإلكتروني أو كلمة المرور الخاصة بك معروفة لشخص غيرك.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>تسديد الرسوم</h4>&nbsp;<i className="fas fa-money-check-alt"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;يحق للطالب تجربة جودة شرح المُحاضر قبل سداد الرسوم في حالة كان المحاضر جديداً في المجال، حيث أن لكل مقرر مطروح عدداً من المحاضرات (أوائل المحاضرات) تبقى متاحة لمن يريد تجربة جودة الشرح ولا تحتاج للسداد.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; الأكاديمية لا تستقبل حوالات أو سداد للرسوم إلا على حسابها الرسمي الموحد، والإدارة غير مسؤولة عن أي حوالات خارج الحساب الرسمي.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; يتم تفعيل المقرر خلال ٢٤ ساعة من رفع الايصال، وإن لم يتم التفعيل يرجى مراجعة بريدك الإلكتروني أو مراسلة الدعم الفني على البريد الإلكتروني: Support@VisionAcademy.online.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>إعادة الرسوم</h4>&nbsp;<i className="fas fa-spa"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;الرسوم المدفوعة لا يتم استرجاعها إلا في حال تم إلغاء المقرر قبل إكماله من قِبل المُحاضر، في حال تم إلغاء المقرر فإن للمُحاضر الحق في أن ينال نسبة من الرسوم بحسب المقدار الذي قدمه من المقرر، والباقي سيعود للطلبة.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; لا يُقبل عذر " محتوى المقرر لا يتوافق مع مقرري الجامعي أُطالب باستعادة مالي " حيث أن لكل مقرر وصف مخصص لمحتواه في الموقع ويتحمل الطالب مسؤولية عدم قراءته وصف المقرر.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>إعادة الرسوم</h4>&nbsp;<i className="fas fa-spa"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;الرسوم المدفوعة لا يتم استرجاعها إلا في حال تم إلغاء المقرر قبل إكماله من قِبل المُحاضر، في حال تم إلغاء المقرر فإن للمُحاضر الحق في أن ينال نسبة من الرسوم بحسب المقدار الذي قدمه من المقرر، والباقي سيعود للطلبة.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; لا يُقبل عذر " محتوى المقرر لا يتوافق مع مقرري الجامعي أُطالب باستعادة مالي " حيث أن لكل مقرر وصف مخصص لمحتواه في الموقع ويتحمل الطالب مسؤولية عدم قراءته وصف المقرر.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>سياسة الإلغاء وحجب الحساب</h4>&nbsp;<i className="fas fa-eye-slash"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                يتم تعطيل الدخول للحساب لأحد الأسباب التالية:   
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;استخدام الحساب من قِبل أكثر من مستخدم واحد، حيث أن النظام يقوم بمتابعة دخولك وتتبع المحاضرات التي قمت بمشاهدتها وفي حال لوحظ أن الحساب قد تم استخدامه من قِبل أكثر من مستخدم سوف يتم الإلغاء مباشرة ولا يحق لك المطالبة باسترجاع الرسوم.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; في حال تسجيل المحاضرات أو تسريبها بأي طريقة كانت يحق للدعم الفني إغلاق الحساب وحذف المقرر.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; جميع المحتويات التي يتم تقديمها لك في المقرر والتي يتم كتابتها من قبل مٌحاضرين أكاديمية ڤجن سواءً كانت ملخصات وتمارين وغيرها من المحتوى النظري الذي يتم إنتاجه من قبل ڤجن، لا يجوز لك نشرها أو التعديل عليها أو الطمس على الحقوق، فجميع ما يتم تقديمه لك يجب عدم مشاركته وألا قد تعرض للمساءلة القانونية وإغلاق الحساب.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>الاستخدام المحظور</h4>&nbsp;<i className="fas fa-user-lock"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                يُسمح باستخدام الموقع فقط للأغراض المشروعة وعليه فإنه يُمنع استخدام الموقع:
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; بأي طريقة تكون مخالفة لأي من القوانين.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; بأي طريقة غير شرعية أو احتيالية، أو تنطوي على أي غرض أو أثر غير شرعي أو احتيالي.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;لغرض إلحاق الضرر بالغير بأية طريقة.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; لنقل أو التكليف بإرسال أي إعلانات أو مواد دعائية غير مطلوبة أو غير مصرح بها أو أي شكل آخر من أشكال الحث أو التسويق.
                                كما أنك تلتزم بالآتي:
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; عدم إعادة إنتاج أو تكرار أو نسخ أو إعادة بيع أي جزء من الموقع بطريقة مخالفة لأحكام شروط الاستخدام.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; عدم الدخول غير المصرح به أو التدخل أو إلحاق الضرر أو تعطيل:
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142', paddingRight: 20}} className="fas fa-exclamation"></i>&nbsp;أي جزء من الموقع.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142', paddingRight: 20}} className="fas fa-exclamation"></i>&nbsp;أي معدات أو شبكة يكون الموقع مخزناً عليها.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142', paddingRight: 20}} className="fas fa-exclamation"></i>&nbsp; أي برامج مستخدمة في تقديم الموقع.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142', paddingRight: 20}} className="fas fa-exclamation"></i>&nbsp; أي معدات أو شبكة أو برامج مملوكة أو مستخدمة من قبل أي طرف ثالث.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                وإضافة لما سبق: فإنك توافق أيضاً:
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp;على عدم استخدام الموقع بأي طريقة تهدف إلى إلحاق الضرر أو تعطيل أو إثقال أو إضعاف أي خادم أو شبكة (شبكات) مربوطة بخادم الموقع أو التدخل في استخدام أي طرف آخر للموقع أو استمتاعه به.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; ولا يحق لك كذلك محاولة الدخول غير المصرح به على الموقع أو على أي حسابات أخرى أو أنظمة كمبيوتر أو شبكات مرتبطة بخادم الموقع من خلال القرصنة أو اختراق كلمة المرور أو أي وسيلة أخرى.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; فضلاً عن أنه لا يحق لك الحصول أو محاولة الحصول على أي مواد أو معلومات مخزنة على الموقع أو خوادم الموقع أو أجهزة الكمبيوتر المرتبطة به من خلال أي وسيلة غير متاحة من خلال الموقع.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>ملفات تعريف الرابط (Cookies)</h4>&nbsp;<i className="fas fa-spa"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                تقوم أكاديمية ڤجن عبر موقعها وخدماتها عبر الإنترنت باستخدام "ملفات تعريف الرابط (Cookies)". تمكّنك ملفات تعريف الرابط (Cookies) من تخصيص استخدامك على مواقعنا، تقوم ملفات 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                تعريف الرابط (Cookies) أيضاً بإخبارنا بالأجزاء التي قمت بزيارتها في مواقعنا وتساعدنا على قياس فعالية الإعلانات وعمليات البحث على الإنترنت، كما تتيح لنا اكتساب معارف دقيقة بسلوك 
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                المستخدم بحيث نتمكن من تحسين منتجاتنا واتصالاتنا.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                نظرًا لأن ملفات تعريف الرابط (Cookies) تُستخدم من خلال مواقعنا على الويب، فقد يؤدي تعطيلها إلى منعك من استخدام أجزاء معينة في المواقع.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                <h4>سياسة الاقتراحات والشكاوى</h4>&nbsp;<i className="fas fa-comments"></i>
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; يمنع منعاً باتاً تشويه سمعة الأكاديمية بأي قول أو تصرف، حيث أن الأكاديمية أتاحت للطالب الحق في تقديم شكوى رسمية ضد أياً من منسوبي الأكاديمية أو خدماتها، ونعد باتخاذ الإجراء المناسب للشكوى المُقدمة، وفي حال صدور أي محاولة لتشويه سمعة الأكاديمية بغير حق فإن للإدارة الحق في اتخاذ أي إجراء قانوني ضدك بعد أن يتم إلغاء حسابك.
                            </Grid>
                            <Grid className={classes.paragraphTxt}>
                                <i style={{color: '#6ac142'}} className="fas fa-caret-left"></i>&nbsp; يجب إرسال الشكوى باستخدام خدمة الرسائل داخل موقع الأكاديمية إلى حساب " الشكاوى والاقتراحات " وبيان نوع الشكوى بالتفصيل وسيتم النظر فيها من قِبل المسؤولين واتخاذ الإجراء المناسب.
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                Aug. 2018 29&nbsp;&nbsp; | &nbsp;&nbsp;  تاريخ النشر  <i className="fas fa-calendar-plus" style={{color: '#6ac142'}}></i>
                            </Grid>
                        </Grid>

                        <Grid className={classes.paragraph}>
                            <Grid className={classes.paragraphTitle}>
                                Aug. 2018 29&nbsp;&nbsp; | &nbsp;&nbsp;  آخر تحديث  <i className="fas fa-calendar-alt" style={{color: '#6ac142'}}></i>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(Terms)
