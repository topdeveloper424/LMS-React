import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import { Collapse } from 'reactstrap'

import { Link } from 'react-router-dom'

const style = theme => ({
    bg: {
        // background: '#f6f7fb',
        paddingBottom: 70,
        minHeight: '100%'
    },
    gridCard: {
        marginTop: 70,
        // background: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        // boxShadow: '1px 1px 3px 4px #aaaaaa',
        padding: 30,
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
        }
    },
    paragraph: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'block',
        textAlign: 'right'
    },
    paragraphTitle: {
        display: 'block',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        fontSize: 18,
        lineHeight: 1.4,
        color: '#343e51',
        fontWeight: 500,
    },
    contentPart: {
        display: 'block', 
        background: 'white', 
        borderBottom: '1px solid #dddddd'
    },
    question: {
        padding: 20,
        direction: 'rtl',
    },
    answer: {   
        borderTop: '1px solid #dddddd', 
        padding: 20,
        direction: 'rtl',
        color: '#6ac145'
    },

})

const faqs = [
    {
        id: 1,
        title: 'أكاديمية فجن',
        contents: [
            {id: 1, question: 'ماهي أكاديمية ڤجن ؟', answer: ' هي عبارة عن مؤسسة تعليمية إلكترونية تهدف إلى تطوير التعليم بأساليب حديثة ومميزة لإخراج طلبة ذو كفاءة عالية ومهارات حقيقية في مختلف المجالات لمواكبة احتياج سوق العمل وإثراء الطلبة معرفيًا من خلال تقديم مقررات مكثفة تضمن تحسين المستوى التعليمي بشكل مؤكد.'},
            {id: 2, question: 'ما هي المقررات التي يتم تقديمها في أكاديمية ڤجن؟ ', answer: ' تُقدم أكاديمية ڤجن العديد من المقررات في مختلف المجالات مثل : علوم الحاسب ، الرياضيات ، الاحصاء ، الكيمياء وغيرها . يمكنك الإطلاع على جميع المقررات بالذهاب لصفحة المقررات في الأكاديمية .'},
            {id: 3, question: 'ما هو المستوى التعليمي للمُحاضرين في الأكاديمية ؟', answer: 'يتولى التدريس نخبة من المُحاضرين المتخصصين في مجالاتهم .'}
        ],
        collapsed: false
    },
    {
        id: 2, 
        title: 'سداد الرسوم',
        contents: [
            {id: 1, question: 'ما هو رقم الحساب الذي سيتم تحويل الرسوم له ؟', answer: ' رقم الحساب : 321608010209551 البنك: الراجحي اسم صاحب الحساب: نايف عالي محمد الشهري'},
            {id: 2, question: 'هل يمكن التحويل من بنك غير بنك الراجحي ؟ ', answer: 'نعم من خلال استخدام الايبان التالي : SA85 8000 0321 6080 1020 9551 اسم صاحب الحساب: نايف عالي محمد الشهري'},
            {id: 3, question: 'تم التحويل لكن لم يطبع الايصال؟ ', answer: 'يمكنك تصوير الايصال من موقع البنك أو تطبيق البنك ،فقط توجه لكشف الحساب و من ثم اختار عملية التحويل وستظهر لك جميع التفاصيل الخاصة بالتحويل ( الحساب المحول له ، المبلغ ، التاريخ ، رقم عملية التحويل أو الرقم المرجعي )'},
            {id: 4, question: 'كيف اقوم برفع ايصال الدفع ؟', answer: 'من خلال التوجه لصفحة الدفع ، وبعدها يتم رفع صورة الايصال في المكان المخصص له و أيضا يتم اختيار المقرر المراد الدفع له .'},
            {id: 5, question: 'هل يمكن التحويل من تطبيق البنك؟', answer: ' نعم يمكنك ذلك .'},
            {id: 6, question: 'هل يجب أن يكون الايصال ورقي أو يسمح بـ ارسال الايصال الإلكتروني؟ ', answer: ' لا بأس بايصال كان ورقي أم إلكتروني .'},
            {id: 7, question: 'كيفية الحصول على الايصال من تطبيق الكتروني ؟', answer: 'بالدخول على تطبيق البنك والتوجه لكشف الحساب بعدها اختيار عملية التحويل ، وستظهر لك جميع التفاصيل الخاصة بالتحويل ( الحساب المحول له ، المبلغ ، التاريخ ، رقم عملية التحويل أو الرقم المرجعي ).'},
            {id: 8, question: 'هل يمكنني دفع بالاقساط ؟', answer: 'نعم ، ولكن في فترة محددة ويُعلن عنها في حسابنا على تويتر : @visionacademy00'},
        ],
        collapsed: false
    },
    {   
        id: 3,
        title: 'التسجيل بالمقررات و الإنسحاب',
        contents: [
            {id: 1, question: 'ماهي المدة المتاحة للمقرر في حسابي ؟', answer: ' فصل دراسي واحد .'},
            {id: 2, question: 'عند الاعتذار عن مادة أو حذفها هل يسترجع لي المبلغ ؟', answer: 'يتم الأخذ بعين الأعتبار عند حذف المادة ، موافقة مٌحاضر المادة نفسها ، وبعدها يتم إرسال صورة من الجدول الدراسي أو من بيانات الطالب الدراسية لتوضيح حذف أو الاعتذار . ولا يتم استرجاع المبلغ بل يتم احتفاظه كرصيد عند الأكاديمية لك للتسجيل بالمقرر مرة أخرى .'},
            {id: 3, question: 'ما هو المستوى التعليمي للمُحاضرين في الأكاديمية ؟', answer: ' يتولى التدريس نخبة من المُحاضرين المتخصصين في مجالاتهم .'},
        ],
        collapsed: false
    },
    {
        id: 4,
        title: 'التواصل مع الدعم الفني',
        contents: [
            {id: 1, question: 'طريقة التواصل مع الدعم الفني ؟ ', answer: 'عن طريق البريد الإلكتروني : Support@VisionAcademy.online أو عن طريق حسابنا على تويتر : @VisionAcademy00 أو عن طريق حسابنا على التيلجرام : @VisionAcademy0'},
            {id: 2, question: 'هل سأستفيد من التواصل مع الدعم الفني لحل أي مشكلة لدي ؟ ', answer: 'فريق الدعم الفني سيكون متواجد دائما لخدمتك لحل جميع المشاكل التي تواجهها.'},
            {id: 3, question: 'لدي شكوى لمن أرسلها ؟', answer: 'لفريق الدعم الفني على البريد الإلكتروني ، أو من خلال صفحة التواصل مع الدعم الفني الموجودة في الموقع.'},
            {id: 4, question: 'ما هي طريقة التقديم على وظيفة في فريق فجن كمحاضر ؟', answer: ' عن طريق التواصل مع فريق التوظيف الخاص بأكاديمية ڤجن على البريد التالي : jobs@visionacademy.online'},
            {id: 5, question: 'إذا حصلت لي مشكلة بخصوص بعض المحاضرين ؟', answer: 'يمكنك التواصل مع الدعم الفني و تقديم الشكوى مع ذكر كافة التفاصيل.'}
        ],
        collapsed: false
    },
    {
        id: 5,
        title: 'الأسئلة العامة',
        contents: [
            {id: 1, question: 'ماهي أسباب حظر الحساب ؟', answer: 'عند الدخول بأكثر من جهاز أو مشاركة الحساب مع أي شخص أخر.'},
            {id: 2, question: 'ماهو الدخول المتكرر ولماذا لا أستطيع الدخول بأكثر من جهاز ؟', answer: 'للحفاظ على عدم تعرض حسابك للحظر من قبل الأكاديمية ، يجب المحافظة بالدخول من جهاز واحد فقط ، ولو تم مخالفة ذلك سوف يرسل لك تنبيه وفي حال تكرر سوف يتم حظر الحساب .'},
            {id: 3, question: 'عند نسيان كلمة المرور لحسابي ؟', answer: ' عند نسيان كلمة المرور يوجد في صفحة تسجيل الدخول خيار إعادة تعيين كلمة المرور.'},
        ],
        collapsed: false
    }
]

class Faqs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    toggle = (index, idx) => {
        faqs[index].contents[idx].collapsed = !faqs[index].contents[idx].collapsed
        console.log(faqs[index].contents[idx].collapsed)
    }

    render() {
        const { classes } = this.props
        
        return (
            <div style={{background: '#f6f7fb', height: '100%', width: '100%'}}>
                <Grid container className={classes.bg}>
                    <Grid item xs={12} sm={8} className={classes.gridCard}>
                        <h3 style={{textAlign: 'right', fontSize: 36, color: '#212262', paddingBottom: 20}}>الأسئلة الشائعة</h3>
                        {
                            faqs.map((faq, index) => {
                                return (
                                    <Grid key={index} className={classes.paragraph}>
                                        <Grid className={classes.paragraphTitle}>
                                            <h4 style={{fontSize: 18}}>{faq.title}</h4>
                                            {
                                                faq.contents.map((content, idx) => {
                                                    return (
                                                        <Grid key={idx} className={classes.contentPart}>
                                                            <Grid className={classes.question}>
                                                                <i style={{paddingLeft: 10}} className="fa fa-question-circle"></i><Link to="#" onClick={() => this.toggle(index, idx)} data-target="#collapse" style={{textDecoration: 'none', color: '#343e51'}}>{content.question}</Link>
                                                            </Grid>
                                                            <Collapse isOpen={faqs[index].contents[idx].collapsed} id="collapse" className={classes.answer}>
                                                                <i style={{color: 'black', paddingLeft: 10}} className="fa fa-check"></i>{content.answer}
                                                            </Collapse>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(Faqs)

