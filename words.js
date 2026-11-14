/* CET-6 词表（7884 词）
   来源：用户提供的《六级词汇7884词（正序版）》docx
   - 原文件「释义」列整列为空（转换丢失），所以这里只保留词头与音标
   - 原音标存在字体映射错误：θ→ə、œ→æ，已还原
   - 释义在文章里遇到时自动补全，见 app.js 的 recOf() */
const CET6_RAW = `a	/ə/ or /eɪ/	
an	/ən/ or /æn/	
abandon	/ə ˈbændən/	
abbreviation	/ə ˌbriːvi ˈeɪʃən/	
abide	/ə ˈbaɪd/	
able	/ˈeɪbəl/	
ability	/ə ˈbɪlɪti/	
abnormal	/æ bˈn0ːrməl/	
aboard	/ə ˈb0ːrd/	
abolish	/ə ˈbɑːlɪʃ/	
abolition	/ˌæbə ˈ lɪʃən/	
abort	/ə ˈb0ːrt/	
abortion	/ə ˈb0ːrʃən/	
about	/ə ˈbaut/	
above	/ə ˈbΛv/	
abreast	/ə ˈbrest/	
abroad	/ə ˈbr0ːd/	
abrupt	/ə ˈbrΛpt/	
absent	/ˈæbsənt/	
absence	/ˈæbsəns/	
absolute	/ˈæbsəluːt/	
absorb	/əbˈz0ːrb/	
absorption	/əbˈz0ːrpʃən/	
abstract	/ˈæbstrækt/	
absurd	/əbˈs3ːrd/	
absurdity	/əbˈs3ːrdɪti/	
abundant	/ə ˈbΛndənt/	
abundance	/ə ˈbΛndəns/	
abuse	/ə ˈbjuːz/ (v.) /ə ˈbjuːs/ (n.)	
abusive	/ə ˈbjuːsɪv/	
academy	/ə ˈ kædəmi/	
academic	/ ˌækəˈdemɪk/	
academician	/ə ˌ kædə ˈ mɪʃən/	
accelerate	/ək ˈseləreɪt/	
acceleration	/əkˌseləˈreɪʃən/	
accent	/ˈæksent/	
accept	/əkˈsept/	
acceptance	/əkˈseptəns/	
acceptable	/əkˈseptəbəl/	
access	/ˈækses/	
accessible	/əkˈsesəbəl/	
accessory	/ək ˈsesəri/	
accident	/ˈæksɪdənt/	
accidental	/ ˌæksɪˈdentl/	
acclaim	/ə ˈ kleɪm/	
accommodate	/ə ˈ kɑːmədeɪt/	
accommodation	/ə ˌ kɑːməˈdeɪʃən/	
accompany	/ə ˈ kΛmpəni/	
accomplish	/ə ˈ kɑːmplɪʃ/	
accomplishment	/ə ˈ kɑːmplɪʃmənt/	
accord	/ə ˈ k0ːrd/	
accordance	/ə ˈ k0ːrdəns/	
accordingly	/ə ˈ k0ːrdɪŋli/	
account	/ə ˈ kaunt/	
accounting	/ə ˈ kauntɪŋ/	
accountant	/ə ˈ kauntənt/	
accountancy	/ə ˈ kauntənsi/	
accountable	/ə ˈ kauntəbəl/	
accountability	/ə ˌ kauntə ˈbɪlɪti/	
accumulate	/ə ˈ kjuːmjəleɪt/	
accumulation	/ə ˌ kjuːmjə ˈ leɪʃən/	
accumulative	/ə ˈ kjuːmjələtɪv/	
accurate	/ˈækjərət/	
accuracy	/ˈækjərəsi/	
accuse	/ə ˈ kjuːz/	
accusation	/ˌækju ˈzeɪʃən/	
accustom	/ə ˈ kΛstəm/	
accustomed	/ə ˈ kΛstəmd/	
ace	/eɪs/	
ache	/eɪk/	
achieve	/ə ˈtʃiːv/	
achievement	/ə ˈtʃiːvmənt/	
acid	/ˈæsɪd/	
acidity	/ə ˈsɪdɪti/	
acknowledge	/ək ˈ nɑːlɪd3/	
acknowledgement	/əkˈ nɑːlɪd3mənt/	
acquaint	/ə ˈ kweɪnt/	
acquaintance	/ə ˈ kweɪntəns/	
acquire	/ə ˈ kwaɪər/	
acquisition	/ˌækwɪˈzɪʃən/	
acre	/ˈeɪkər/	
across	/ə ˈ kr0ːs/	
act	/ækt/	
action	/ˈækʃən/	
acting	/ˈæktɪŋ/	
activate	/ˈæktɪveɪt/	
active	/ˈæktɪv/	
activity	/æk ˈtɪvɪti/	
activist	/ˈæktɪvɪst/	
actor	/ˈæktər/	
actress	/ˈæktrəs/	
actual	/ˈæktʃuəl/	
actually	/ˈæktʃuəli/	
acupuncture	/ˈækj upΛŋktʃər/	
acute	/ə ˈ kjuːt/	
adapt	/ə ˈdæpt/	
adaptation	/ˌædæpˈteɪʃən/	
adaptive	/ə ˈdæptɪv/	
add	/æd/	
addition	/ə ˈdɪʃən/	
additional	/ə ˈdɪʃənl/	
addict	/ˈædɪkt/ (n.) /ə ˈdɪkt/	
addiction	/(əˈ)dɪkʃən/	
addictive	/ə ˈdɪktɪv/	
address	/ə ˈdres/ (US)/ˈædres/ (Uĸ)	
adequate	/ˈædɪkwət/	
adequacy	/ˈædɪkwəsi/	
adequately	/ˈædɪkwətli/	
adhere	/ədˈhɪr/	
adherence	/ədˈhɪrəns/	
adjacent	/ə ˈd3eɪsənt/	
adjective	/ˈæd3ɪktɪv/	
adjust	/ə ˈd3Λst/	
adjustment	/ə ˈd3Λstmənt/	
administer	/ədˈmɪnɪstər/	
administrate	/ədˈmɪnɪstreɪt/	
administration	/ədˌmɪnɪˈstreɪʃən/	
administrative	/ədˈmɪnɪstreɪtɪv/	
admire	/ədˈmaɪər/	
admiration	/ˌædməˈ reɪʃən/	
admirable	/ˈædmərəbəl/	
admit	/ədˈmɪt/	
admission	/ədˈmɪʃən/	
admittance	/ədˈmɪtəns/	
admittedly	/ədˈmɪtɪdli/	
adolescent	/ ˌædə ˈ lesənt/	
adolescence	/ ˌædə ˈ lesəns/	
adopt	/ə ˈdɑːpt/	
adoption	/ə ˈdɑːpʃən/	
adore	/ə ˈd0ːr/	
adorable	/ə ˈd0ːrəbəl/	
adult	/ə ˈdΛlt/	
adulthood	/ə ˈdΛlthud/	
advance	/ədˈvæns/	
advancement	/ədˈvænsmənt/	
advanced	/ədˈvænst/	
advantage	/ədˈvæntɪd3/	
advantageous	/ˌædvənˈteɪd3əs/	
advent	/ˈædvent/	
adventure	/ədˈventʃər/	
adventurer	/ədˈventʃərər/	
adventurous	/ədˈventʃərəs/	
adverb	/ˈædv3ːrb/	
adversary	/ˈædvərseri/	
adverse	/ædˈv3ːrs/	
adversity	/ædˈv3ːrsɪti/	
advertise	/ˈædvərtaɪz/	
advertisement	/ ˌædvərˈtaɪzmənt/	
advertising	/ˈædvərtaɪzɪŋ/	
advice	/ədˈvaɪs/	
advise	/ədˈvaɪz/	
adviser	/ədˈvaɪzər/	
advisor	/ədˈvaɪzər/	
advisory	/ədˈvaɪzəri/	
advisable	/ədˈvaɪzəbəl/	
advocate	/ˈædvəkeɪt/ (v.) /ˈædvəkət/ (n.)	
advocacy	/ˈædvəkəsi/	
aerial	/ˈeriəl/	
aesthetics	/esˈəetɪks/	
aesthetic	/esˈəetɪk/	
affair	/ə ˈfer/	
affect	/ə ˈfekt/	
affection	/ə ˈfekʃən/	
affectionate	/ə ˈfekʃənət/	
affiliate	/ə ˈfɪlieɪt/ (v.) /ə ˈfɪliət/ (n.)	
affiliation	/ə ˌfɪli ˈeɪʃən/	
affirm	/ə ˈf3ːrm/	
affirmation	/ˌæfərˈ meɪʃən/	
affirmative	/ə ˈf3ːrmətɪv/	
affix	/ə ˈfɪks/ (v.) /ˈæfɪks/	
affixation	/(ˌæ)fɪk ˈseɪʃən/	
affluent	/ˈæfluənt/	
affluence	/ˈæfluəns/	
afford	/ə ˈf0ːrd/	
affordable	/ə ˈf0ːrdəbəl/	
affordability	/ə ˌf0ːrdə ˈbɪlɪti/	
afloat	/ə ˈflout/	
afraid	/ə ˈfreɪd/	
after	/ˈæftər/	
aftermath	/ˈæftərmæə/	
afternoon	/ ˌæftərˈ nuːn/	
afterward	/ˈæftərwərd/	
afterwards	/ˈæftərwərdz/	
again	/ə ˈɡen/	
against	/ə ˈɡenst/	
age	/eɪd3/	
aged	/eɪd3d/ (adj. ) or /ˈeɪd3ɪd/ (adj.	
aging	/ˈeɪd3ɪŋ/	
agenda	/ə ˈd3endə/	
agency	/ˈeɪd3ənsi/	
agent	/ˈeɪd3ənt/	
aggravate	/ˈæɡrəveɪt/	
aggravation	/ˌæɡrəˈveɪʃən/	
aggregate	/ˈæɡrɪɡət/ (n./adj.) /ˈæɡrɪɡeɪt/ (v.)	
aggressive	/ə ˈɡresɪv/	
aggression	/ə ˈɡreʃən/	
agitate	/ˈæd3ɪteɪt/	
agitation	/ˌæd3ɪˈteɪʃən/	
ago	/ə ˈɡou/	
agree	/ə ˈɡriː/	
agreement	/ə ˈɡriːmənt/	
agreeable	/ə ˈɡriːəbəl/	
agony	/ˈæɡəni/	
agriculture	/ˈæɡrɪkʌltʃər/	
agricultural	/ˌæɡrɪ ˈ kʌltʃərəl/	
ahead	/ə ˈ hed/	
aid	/eɪd/	
aide	/eɪd/	
aids	/eɪdz/	
ail	/eɪl/	
ailment	/ˈeɪlmənt/	
aim	/eɪm/	
air	/er/	
airborne	/ˈerbɔːrn/	
aircraft	/ˈerkræft/	
airline	/ˈerlaɪn/	
airplane	/ˈerpleɪn/	
aeroplane	/ˈerəpleɪn/	
airport	/ˈerpɔːrt/	
aisle	/aɪl/	
akin	/ə ˈ kɪn/	
alarm	/ə ˈlɑːrm/	
album	/ˈælbəm/	
alcohol	/ˈælkəhɔːl/	
alcoholic	/ ˌælkə ˈ hɔːlɪk/	
ale	/eɪl/	
alert	/ə ˈlɜːrt/	
algebra	/ˈældʒɪbrə/	
alien	/ˈeɪliən/	
alienate	/ˈeɪliəneɪt/	
alienation	/ˌeɪliə ˈ neɪʃən/	
align	/ə ˈlaɪn/	
alignment	/ə ˈlaɪnmənt/	
alike	/ə ˈlaɪk/	
alive	/ə ˈlaɪv/	
all	/ɔːl/	
allege	/ə ˈledʒ/	
allegation	/ˌælɪˈɡeɪʃən/	
alleged	/ə ˈledʒd/	
allegedly	/ə ˈledʒɪdli/	
allergic	/ə ˈlɜːrdʒɪk/	
allergy	/ˈælərdʒi/	
alleviate	/ə ˈliːvieɪt/	
alleviation	/ə ˌliːvi ˈeɪʃən/	
alley	/ˈæli/	
allocate	/ˈæləkeɪt/	
allocation	/ˌæləˈ keɪʃən/	
allot	/ə ˈlɑːt/	
allotment	/ə ˈlɑːtmənt/	
allow	/ə ˈlau/	
allowance	/ə ˈlauəns/	
alloy	/ˈæl0ɪ/ (n.) /ə ˈl0ɪ/ (v.)	
allude	/ə ˈluːd/	
allusion	/ə ˈluː3ən/	
allure	/ə ˈlur/	
allurement	/ə ˈlurmənt/	
ally	/ˈælaɪ/ (n.) /ə ˈlaɪ/ (v.)	
alliance	/ə ˈlaɪəns/	
almighty	/0ːl ˈ maɪti/	
almost	/ˈ0ːlmoust/	
aloft	/ə ˈl0ːft/	
alone	/ə ˈloun/	
along	/ə ˈl0ːŋ/	
alongside	/ə ˌl0ːŋˈsaɪd/	
aloud	/ə ˈlaud/	
alphabet	/ˈælfəbet/	
alphabetic	/ ˌælfəˈbetɪk/	
alphabetical	/ ˌælfəˈbetɪkəl/	
already	/0ːl ˈ redi/	
also	/ˈ0ːlsou/	
alter	/ˈ0ːltər/	
alteration	/ˌ0ːltə ˈreɪʃən/	
alternate	/ˈ0ːltərneɪt/ (v.) /0ːl ˈt3 ːrnət/ (adj.)	
alternation	/ˌ0ːltərˈ neɪʃən/	
alternately	/0ːl ˈt3ːrnətli/	
alternative	/0ːl ˈt3ːrnətɪv/	
although	/0ːlˈŎou/	
altitude	/ˈæltɪtuːd/	
altogether	/ˌ0ːltəˈɡeŎər/	
aluminium	/ˌæljə ˈ mɪniəm/	
always	/ˈ0ːlweɪz/	
am	/æm/	
amass	/ə ˈ mæs/	
amateur	/ˈæmətər/ or /ˈæmətʃ	
amaze	/ə /ˈmeɪz/	
amazing	/ə ˈ meɪzɪŋ/	
amazement	/ə ˈ meɪzmənt/	
ambassador	/æmˈbæsədər/	
ambiguous	/æmˈbɪɡjuəs/	
ambiguity	/ˌæmbɪ ˈɡjuːəti/	
ambition	/æmˈbɪʃən/	
ambitious	/æmˈbɪʃəs/	
ambulance	/ˈæmbjələns/	
amend	/ə ˈ mend/	
amendment	/ə ˈ mendmənt/	
amiable	/ˈeɪmiəbəl/	
amidst	/ə ˈ mɪd(st)/	
ammunition	/ˌæmjə ˈ nɪʃən/	
amongst	/ə ˈ mΛŋ(st)/	
amount	/ə ˈ maunt/	
ample	/ˈæmpəl/	
amplify	/ˈæmplɪfaɪ/	
amplification	/ˌæmplɪfɪˈ keɪʃən/	
amuse	/ə ˈ mjuːz/	
amusing	/ə ˈ mjuːzɪŋ/	
amusement	/ə ˈ mjuːzmənt/	
analogue	/ˈænəl0ːɡ/	
analogous	/ə ˈ næləɡəs/	
analogy	/ə ˈ næləd3i/	
analyze	/ˈænəlaɪz/	
analyse	/ˈænəlaɪz/	
analysis	/ə ˈ næləsɪs/	
analytic	/ ˌænəˈ lɪtɪk/	
analytical	/ ˌænəˈ lɪtɪkəl/	
analyst	/ˈænəlɪst/	
ancestor	/ˈænsestər/	
ancestry	/ˈænsestri/	
anchor	/ˈæŋkər/	
anchorage	/ˈæŋkərɪd3/	
ancient	/ˈeɪnʃənt/	
and	/ænd/	
anecdote	/ˈænɪkdout/	
anecdotal	/ ˌænɪkˈdoutəl/	
anew	/ə ˈ njuː/	
angel	/ˈeɪnd3əl/	
angle	/ˈæŋɡəl/	
angry	/ˈæŋɡri/	
anger	/ˈæŋɡər/	
anguish	/ˈæŋɡwɪʃ/	
animal	/ˈænɪməl/	
animate	/ˈænɪmeɪt/	
animated	/ˈænɪmeɪtɪd/	
animation	/ˌænɪˈ meɪʃən/	
ankle	/ˈæŋkəl/	
annex	/ə ˈ neks/	
annexation	/ˌænekˈseɪʃən/	
anniversary	/ ˌænɪ ˈv3ːrsəri/	
announce	/ə ˈ nauns/	
announcement	/ə ˈ naunsmənt/	
annoy	/ə ˈ n0ɪ/	
annoyance	/ə ˈ n0ɪəns/	
annual	/ˈænjuəl/	
anonymous	/ə ˈ nɑːnɪməs/	
anonymity	/ ˌænəˈ nɪmɪti/	
another	/ə ˈ nΛŎər/	
answer	/ˈænsər/	
ant	/ænt/	
antagonist	/ænˈtæɡənɪst/	
antagonistic	/ænˌtæɡəˈ nɪstɪk/	
antagonistically	/ænˌtæɡəˈ nɪstɪkli/	
antagonism	/ænˈtæɡənɪzəm/	
antenna	/ænˈtenə/	
anticipation	/ænˌtɪsɪˈpeɪʃən/	
antibiotic	/ ˌæntibaɪ ˈɑːtɪk/	
anticipate	/ænˈtɪsɪpeɪt/	
antique	/æn ˈtiːk/	
antonym	/ˈæntənɪm/	
anxiety	/æŋˈzaɪəti/	
anxious	/ˈæŋkʃəs/	
any	/ˈeni/	
apologize	/ə ˈ pɑːləd3aɪz/	
apologise	/ə ˈ pɑːləd3aɪz/	
apologetic	/ə ˌ pɑːləˈd3etɪk/	
anybody	/ˈenibɑːdi/	
anyone	/ˈeniwΛn/	
anyhow	/ˈenihau/	
anything	/ˈeniəɪŋ/	
anyway	/ˈeniweɪ/	
anywhere	/ˈeniwer/	
apart	/ə ˈ pɑːrt/	
apartment	/ə ˈ pɑːrtmənt/	
apt	/ə ˈ pɑːrtmənt/	
ape	/eɪp/	
apology	/ə ˈ pɑːləd3i/	
app	/æp/	
appal	/ə ˈ p0ːl/	
appall	/ə ˈ p0ːl/	
apparatus	/ˌæpəˈ rætəs/	
apparent	/ə ˈ pærənt/	
apparently	/ə ˈ pærəntli/	
appeal	/ə ˈ piːl/	
appealing	/ə ˈ piːlɪŋ/	
appear	/ə ˈ pɪr/	
appearance	/ə ˈ pɪrəns/	
appease	/ə ˈ piːz/	
appeasement	/ə ˈ piːzmənt/	
appendix	/ə ˈ pendɪks/	
applause	/ə ˈ pl0ːz/	
appetite	/ˈæpɪtaɪt/	
applaud	/ə ˈ pl0ːd/	
apple	/ˈæpəl/	
application	/ˌæplɪˈ keɪʃən/	
applicant	/ˈæplɪkənt/	
applicable	/ˈæplɪkəbəl/	
appliance	/ə ˈ plaɪəns/	
apply	/ə ˈ plaɪ/	
appoint	/ə ˈ p0ɪnt/	
appointment	/ə ˈ p0ɪntmənt/	
appraise	/ə ˈ preɪz/	
appraisal	/ə ˈ preɪzəl/	
appreciate	/ə ˈ priːʃieɪt/	
appreciation	/ə ˌ priːʃi ˈeɪʃən/	
appreciative	/ə ˈ priːʃətɪv/	
apprentice	/ə ˈ prentɪs/	
appropriation	/ə ˌ proupriˈeɪʃən/	
approach	/ə ˈ proutʃ/	
appropriate	/ə ˈ proupriət/	
approve	/ə ˈ pruːv/	
approval	/ə ˈ pruːvəl/	
approximate	/ə ˈ prɑːksɪmət/	
approximately	/ə ˈ prɑːksɪmətli/	
approximation	/ə ˌ prɑːksɪˈ meɪʃən/	
april	/ˈeɪprəl/	
apron	/ˈeɪprən/	
aptly	/ˈæptli/	
aptitude	/ˈæptɪtuːd/	
arbitrary	/ˈɑːrbɪtreri/	
arbitrarily	/ ˌɑːrbɪ ˈtrerɪli/	
arbitrate	/ˈɑːrbɪtreɪt/	
arbitration	/ˌɑːrbɪ ˈtreɪʃən/	
arc	/ɑːrk/	
arch	/ɑːrtʃ/	
architect	/ˈɑːrkɪtekt/	
architecture	/ˈɑːrkɪtektʃər/	
archive	/ˈɑːrkaɪv/	
ardent	/ˈɑːrdnt/	
area	/ˈeriə/	
arena	/ə ˈ riːnə/	
argue	/ˈɑːrɡjuː/	
argument	/ˈɑːrɡjəmənt/	
argumentation	/ˌɑːrɡjumenˈteɪʃən/	
argumentative	/ˌɑːrɡjə ˈ mentətɪv/	
arguable	/ˈɑːrɡjuəbəl/	
arise	/ə ˈ raɪz/	
aristocrat	/ə ˈ rɪstəkræt/	
aristocratic	/ə ˌ rɪstəˈ krætɪk/	
aristocracy	/ ˌærɪ ˈstɑːkrəsi/	
arithmetic	/ə ˈ rɪəmətɪk/	
arm	/ɑːrm/	
armament	/ˈɑːrməmənt/	
armor	/ˈɑːrmər/	
armour	/ˈɑːrmər/	
army	/ˈɑːrmi/	
around	/ə ˈ raʊnd/	
arouse	/ə ˈ raʊz/	
arousal	/ə ˈ raʊzəl/	
arrange	/ə ˈ reɪndʒ/	
arrangement	/ə ˈ reɪndʒmənt/	
array	/ə ˈ reɪ/	
arrest	/ə ˈ rest/	
arrive	/ə ˈ raɪv/	
arrival	/ə ˈ raɪvəl/	
arrogant	/ˈærəɡənt/	
arrogance	/ˈærəɡəns/	
arrow	/ˈæroʊ/	
art	/ɑːrt/	
artist	/ˈɑːrtɪst/	
artistic	/ɑːr ˈtɪstɪk/	
artistically	/ɑːr ˈtɪstɪkli/	
artery	/ˈɑːrtəri/	
article	/ˈɑːrtɪkəl/	
articulate	/ɑːr ˈtɪkj uleɪt/	
articulation	/ɑːrˌtɪkju ˈleɪʃən/	
artifact	/ˈɑːrtɪfækt/	
artificial	/ˌɑːrtɪ ˈfɪʃəl/	
artillery	/ɑːr ˈtɪləri/	
as	/æz/	
ascend	/ə ˈsend/	
ascendance	/ə ˈsendəns/	
ascertain	/ ˌæsərˈteɪn/	
ascribe	/ə ˈskraɪb/	
ash	/æʃ/	
ashamed	/ə ˈʃeɪmd/	
ashore	/ə ˈʃɔːr/	
aside	/ə ˈsaɪd/	
ask	/æsk/	
asleep	/ə ˈsliːp/	
aspect	/ˈæspekt/	
aspire	/ə ˈspaɪər/	
aspiration	/ˌæspəˈ reɪʃən/	
ass	/æs/	
assassination	/ə ˌsæsɪˈ neɪʃən/	
assassin	/ə ˈsæsɪn/	
assassinate	/ə ˈsæsɪneɪt/	
assault	/ə ˈsɔːlt/	
assemble	/ə ˈsembəl/	
assembly	/ə ˈsembli/	
assert	/ə ˈsɜːrt/	
assertion	/ə ˈsɜːrʃən/	
assertive	/ə ˈsɜːrtɪv/	
assess	/ə ˈses/	
assessment	/ə ˈsesmənt/	
asset	/ˈæset/	
assign	/ə ˈsaɪn/	
assignment	/ə ˈsaɪnmənt/	
assimilate	/ə ˈsɪmɪleɪt/	
assimilation	/ə ˌsɪmɪˈleɪʃən/	
assist	/ə ˈsɪst/	
assistance	/ə ˈsɪstəns/	
assistant	/ə ˈsɪstənt/	
associate	/ə ˈsouʃieɪt/ (v.) /ə ˈsou ʃiət/ (n./adj.)	
association	/ə ˌsousiˈeɪʃən/	
assorted	/ə ˈs0ːrtɪd/	
assortment	/ə ˈs0ːrtmənt/	
assume	/ə ˈsuːm/	
assumption	/ə ˈsΛmpʃən/	
assure	/ə ˈʃur/	
assurance	/ə ˈʃurəns/	
astonish	/ə ˈstɑːnɪʃ/	
astonishment	/ə ˈstɑːnɪʃmənt/	
astray	/ə ˈstreɪ/	
astronaut	/ˈæstrən0ːt/	
astronomy	/ə ˈstrɑːnəmi/	
astronomer	/ə ˈstrɑːnəmər/	
astronomical	/ ˌæstrəˈnɑːmɪkəl/	
asylum	/ə ˈsaɪləm/	
at	/æt/	
athlete	/ˈæəliːt/	
athletic	/æəˈletɪk/	
atlas	/ˈætləs/	
atmosphere	/ˈætməsfɪr/	
atmospheric	/ ˌætməsˈferɪk/	
atom	/ˈætəm/	
atomic	/ə ˈtɑːmɪk/	
atop	/ə ˈtɑːp/	
atrocity	/ə ˈtrɑːsɪti/	
atrocious	/ə ˈtrouʃəs/	
attach	/ə ˈtætʃ/	
attachment	/ə ˈtætʃmənt/	
attack	/ə ˈtæk/	
attain	/ə ˈteɪn/	
attainment	/ə ˈteɪnmənt/	
attempt	/ə ˈtempt/	
attend	/ə ˈtend/	
attendance	/ə ˈtendəns/	
attendant	/ə ˈtendənt/	
attention	/ə ˈtenʃən/	
attentive	/ə ˈtentɪv/	
attic	/ˈætɪk/	
attitude	/ˈætɪtuːd/	
attorney	/ə ˈt3ːrni/	
attract	/ə ˈtrækt/	
attraction	/ə ˈtrækʃən/	
attractive	/ə ˈtræktɪv/	
attribute	/ə ˈtrɪbjuːt/ (v.) /ˈætrɪ bjuːt/ (n.)	
attributable	/ə ˈtrɪbjətəbəl/	
auction	/ˈ0ːkʃən/	
auctioneer	/ˌ0ːkʃə ˈ nɪr/	
audience	/ˈ0ːdiəns/	
audio	/ˈ0ːdiou/	
audit	/ˈ0ːdɪt/	
auditing	/ˈ0ːdɪtɪŋ/	
auditorium	/ ˌ0ːdɪ ˈt0ːriəm/	
augment	/0ːɡˈ ment/	
augmentation	/ˌ0ːɡmenˈteɪʃən/	
august	/ˈ0ːɡəst/	
aunt	/ænt/	
auntie	/ˈænti/	
authentic	/0ː ˈəentɪk/	
authenticity	/ ˌ0ːəenˈtɪsɪti/	
author	/ˈ0ːəər/	
authoritative	/ə ˈə0ːrəteɪtɪv/	
authority	/ə ˈə0ːrəti/	
authorize	/ˈ0ːəəraɪz/	
authorise	/ˈ0ːəəraɪz/	
authorization	/ˌ0ːəərɪˈzeɪʃən/	
authorisation	/ˌ0ːəərɪˈzeɪʃən/	
automobile	/ˈ0ːtou (mə ˈbiːl)/	
autobiography	/ˌ0ːtəbaɪ ˈɑːɡrəfi/	
autobiographic	/ˌ0ːtəˌbaɪəˈɡræfɪk/	
automate	/ˈ0ːtəmeɪt/	
automation	/ˌ0ːtəˈmeɪʃən/	
autonomous	/0ːˈtɑːnəməs/	
autonomy	/0ː ˈtɑːnəmi/	
autumn	/ˈ0ːtəm/	
auxiliary	/0ːɡ ˈzɪliəri/	
avail	/ə ˈveɪl/	
available	/ə ˈveɪləbəl/	
availability	/ə ˌveɪlə ˈbɪlɪti/	
avenge	/ə ˈvend3/	
avenue	/ˈævənuː/	
average	/ˈævərɪd3/	
avert	/ə ˈv3ːrt/	
aversion	/ə ˈv3ːr3ən/	
aviation	/ˌeɪviˈeɪʃən/	
avoid	/ə ˈv0ɪd/	
avoidance	/ə ˈv0ɪdəns/	
await	/ə ˈweɪt/	
awake	/ə ˈweɪk/	
award	/ə ˈw0ːrd/	
aware	/ə ˈwer/	
awareness	/ə ˈwernəs/	
away	/ə ˈweɪ/	
awe	/0ː/	
awesome	/ˈ0ːsəm/	
awful	/ˈ0ːfəl/	
awkward	/ˈ0ːkwərd/	
ax	/æks/	
axe	/æks/	
axis	/ˈæksɪs/	
baby	/ˈbeɪbi/	
bachelor	/ˈbætʃələr/	
back	/bæk/	
background	/ˈbækɡraund/	
backup	/ˈbækΛp/	
backward	/ˈbækwərd/	
backwards	/ˈbækwərdz/	
backyard	/ˌbæk ˈjɑːrd/	
bacon	/ˈbeɪkən/	
bacteria	/bæk ˈtɪriə/	
bad	/bæd/	
badge	/bæd3/	
badly	/ˈbædli/	
badminton	/ˈbædmɪntən/	
baffle	/ˈbæfəl/	
bag	/bæɡ/	
baggage	/ˈbæɡɪdʒ/	
bail	/beɪl/	
bait	/beɪt/	
bake	/beɪk/	
bakery	/ˈbeɪkəri/	
balance	/ˈbæləns/	
balcony	/ˈbælkəni/	
bald	/bɔːld/	
ball	/bɔːl/	
ballet	/bæ ˈ leɪ/	
balloon	/bə ˈluːn/	
ballot	/ˈbælət/	
bamboo	/bæmˈbuː/	
ban	/bæn/	
banana	/bə ˈ nænə/	
band	/bænd/	
bandage	/ˈbændɪdʒ/	
bang	/bæŋ/	
bank	/bæŋk/	
banknote	/ˈbæŋknoʊt/	
bankrupt	/ˈbæŋkrʌpt/	
bankruptcy	/ˈbæŋkrʌptsi/	
banner	/ˈbænər/	
banquet	/ˈbæŋkwɪt/	
bar	/bɑːr/	
barbecue	/ˈbɑːrbɪkjuː/	
bbq	/ˈbɑːrbɪkjuː/	
barber	/ˈbɑːrbər/	
bare	/ber/	
barely	/ˈberli/	
bargain	/ˈbɑːrɡən/	
barge	/bɑːrdʒ/	
bark	/bɑːrk/	
barn	/bɑːrn/	
barometer	/bə ˈ rɑːmɪtər/	
barracks	/ˈbærəks/	
barrel	/ˈbærəl/	
barren	/ˈbærən/	
barrier	/ˈbæriər/	
base	/beɪs/	
baseball	/ˈbeɪsbɔːl/	
basement	/ˈbeɪsmənt/	
basic	/ˈbeɪsɪk/	
basically	/ˈbeɪsɪkli/	
basin	/ˈbeɪsən/	
basis	/ˈbeɪsɪs/	
basket	/ˈbæskɪt/	
basketball	/ˈbæskɪtbɔːl/	
bass	/beɪs/	
bat	/bæt/	
batch	/bætʃ/	
bath	/bæə/	
bathe	/beɪð/	
bathroom	/ˈbæəruːm/	
battalion	/bə ˈtæliən/	
batter	/ˈbætər/	
battery	/ˈbætəri/	
battle	/ˈbætəl/	
bay	/beɪ/	
be	/biː/	
beach	/biːtʃ/	
bead	/biːd/	
beak	/biːk/	
beam	/biːm/	
bean	/biːn/	
bear	/ber/	
beard	/bɪrd/	
bearing	/ˈberɪŋ/	
beast	/biːst/	
beat	/biːt/	
beauty	/ˈbjuːti/	
beautiful	/ˈbjuːtɪfəl/	
beautify	/ˈbjuːtɪfaɪ/	
because	/bɪ ˈ kɔːz/	
beckon	/ˈbekən/	
become	/bɪ ˈ kʌm/	
bed	/bed/	
bedding	/ˈbedɪŋ/	
bee	/biː/	
beef	/biːf/	
beer	/bɪr/	
beetle	/ˈbiːtəl/	
before	/bɪ ˈfɔːr/	
beforehand	/bɪ ˈfɔːrhænd/	
beg	/beɡ/	
begin	/bɪ ˈɡɪn/	
beggar	/ˈbeɡər/	
beginning	/bɪ ˈɡɪnɪŋ/	
behalf	/bɪ ˈ hæf/	
behave	/bɪ ˈ heɪv/	
behaviour	/bɪ ˈ heɪvjər/	
behavioral	/bɪ ˈ heɪvjərəl/	
behind	/bɪ ˈ haɪnd/	
being	/ˈbiːɪŋ/	
belief	/bɪ ˈliːf/	
believe	/bɪ ˈliːv/	
bell	/bel/	
belly	/ˈbeli/	
belong	/bɪ ˈlɔːŋ/	
belongings	/bɪ ˈlɔːŋɪŋz/	
beloved	/bɪ ˈlʌvɪd/	
below	/bɪ ˈloʊ/	
belt	/belt/	
bench	/bentʃ/	
bend	/bend/	
beneath	/bɪ ˈ niːə/	
benefit	/ˈbenɪfɪt/	
beneficial	/ˌbenɪ ˈfɪʃəl/	
beneficiary	/ˌbenɪ ˈfɪʃieri/	
benevolence	/bə ˈ nevələns/	
benevolent	/bə ˈ nevələnt/	
benign	/bɪ ˈ naɪn/	
berry	/ˈberi/	
beset	/bɪ ˈset/	
beside	/bɪ ˈsaɪd/	
besides	/bɪ ˈsaɪdz/	
siege	/siːdʒ/	
best	/best/	
bet	/bet/	
betray	/bɪ ˈtreɪ/	
betrayal	/bɪ ˈtreɪəl/	
better	/ˈbetər/	
between	/bɪ ˈtwiːn/	
beverage	/ˈbevərɪd3/	
beware	/bɪ ˈwer/	
bewilder	/bɪ ˈwɪldər/	
bewilderment	/bɪ ˈwɪldərmənt/	
beyond	/bi ˈjɑːnd/	
bias	/ˈbaɪəs/	
bible	/ˈbaɪbəl/	
biblical	/ˈbɪ blɪkəl/	
bibliography	/ˌbɪ bli ˈɑːɡrəfi/	
bicycle	/ˈbaɪsɪkəl/	
bike	/baɪk/	
bid	/bɪd/	
big	/bɪɡ/	
bilateral	/baɪˈ lætərəl/	
bill	/bɪl/	
billion	/ˈbɪljən/	
bin	/bɪn/	
billionaire	/ˌbɪljə ˈner/	
bind	/baɪnd/	
binoculars	/bɪ ˈ nɑːkjələrz/	
biochemistry	/ ˌ baɪouˈ kemɪstri/	
biochemical	/ ˌ baɪouˈ kemɪkəl/	
biochemist	/ ˌ baɪouˈ kemɪst/	
biography	/baɪ ˈɑːɡrəfi/	
biographical	/ˌbaɪəˈɡræfɪkəl/	
biographer	/baɪˈɑːɡrəfər/	
biology	/baɪ ˈɑːləd3i/	
biological	/ˌbaɪəˈlɑːd3ɪkəl/	
biologist	/baɪˈɑːləd3ɪst/	
biotechnology	/ˌbaɪoutekˈ nɑːləd3i/	
bird	/b3ːrd/	
birth	/b3ːrə/	
birthday	/ˈb3ːrədeɪ/	
biscuit	/ˈbɪskɪt/	
bishop	/ˈbɪʃəp/	
bit	/bɪt/	
bitch	/bɪtʃ/	
bite	/baɪt/	
bitter	/ˈbɪtər/	
bizarre	/bɪ ˈzɑːr/	
black	/blæk/	
blackboard	/ˈblækbɔːrd/	
blackmail	/ˈblækmeɪl/	
blade	/bleɪd/	
blame	/bleɪm/	
blank	/blæŋk/	
blanket	/ˈblæŋkɪt/	
blast	/blæst/	
blaze	/bleɪz/	
bleach	/bliːtʃ/	
bleak	/bliːk/	
bleed	/bliːd/	
blend	/blend/	
bless	/bles/	
blessing	/ˈblesɪŋ/	
blind	/blaɪnd/	
blink	/blɪŋk/	
bloc	/blɑːk/	
block	/blɑːk/	
blog	/blɑːɡ/	
blond	/blɑːnd/	
blonde	/blɑːnd/	
blood	/blʌd/	
bloody	/ˈblʌdi/	
bloom	/bluːm/	
blossom	/ˈblɑːsəm/	
blouse	/blaʊs/	
blow	/bloʊ/	
blue	/bluː/	
blueprint	/ˈbluːprɪnt/	
bluff	/blʌf/	
blunder	/ˈblʌndər/	
blunt	/blʌnt/	
blur	/blɜːr/	
blush	/blʌʃ/	
board	/bɔːrd/	
boast	/boʊst/	
boastful	/ˈboʊstfəl/	
boat	/boʊt/	
body	/ˈbɑːdi/	
bodily	/ˈbɑːdɪli/	
boil	/b0ɪl/	
boiler	/ˈb0ɪlər/	
bold	/bould/	
bolster	/ˈboulstər/	
bolt	/boult/	
bomb	/bɑːm/	
bond	/bɑːnd/	
bondage	/ˈbɑːndɪd3/	
bone	/boun/	
bony	/ˈbouni/	
bonus	/ˈbounəs/	
book	/buk/	
boom	/buːm/	
boost	/buːst/	
boot	/buːt/	
booth	/buːə/	
border	/ˈb0ːrdər/	
bore	/b0ːr/	
boring	/ˈb0ːrɪŋ/	
born	/b0ːrn/	
borrow	/ˈbɑːrou/	
boss	/b0ːs/	
botany	/ˈbɑːtəni/	
botanical	/bə ˈtænɪkəl/	
both	/bouə/	
bother	/ˈbɑːŎər/	
bottle	/ˈbɑːtəl/	
bottom	/ˈbɑːtəm/	
bounce	/bauns/	
bound	/baund/	
boundary	/ˈbaundəri/	
bouquet	/buːˈ keɪ/ or /bouˈ keɪ/	
bout	/baut/	
bow	/bau/	
bowel	/ˈbauəl/	
bowl	/boul/	
box	/bɑːks/	
boxing	/ˈbɑːksɪŋ/	
boy	/bɔɪ/	
boycott	/ˈbɔɪkɑːt/	
brace	/breɪs/	
bracket	/ˈbrækɪt/	
brag	/bræɡ/	
brain	/breɪn/	
brake	/breɪk/	
branch	/bræntʃ/	
brand	/brænd/	
brand-new	/ ˌ brændˈnuː/	
brandy	/ˈbrændi/	
brass	/bræs/	
brave	/breɪv/	
bravery	/ˈbreɪvəri/	
breach	/briːtʃ/	
bread	/bred/	
break	/breɪk/	
breakdown	/ˈbreɪkdaʊn/	
breakfast	/ˈbrekfəst/	
breakthrough	/ˈbreɪkəruː/	
breast	/brest/	
breath	/breə/	
breathe	/briːð/	
breed	/briːd/	
breeze	/briːz/	
brew	/bruː/	
brewery	/ˈbruːəri/	
bribe	/braɪb/	
bribery	/ˈbraɪbəri/	
brick	/brɪk/	
bride	/braɪd/	
bridegroom	/ˈbraɪdɡruːm/	
bridge	/brɪdʒ/	
brief	/briːf/	
briefcase	/ˈbriːfkeɪs/	
brigade	/brɪˈɡeɪd/	
bright	/braɪt/	
brilliant	/ˈbrɪljənt/	
briefing	/ˈbriːfɪŋ/	
brighten	/ˈbraɪtən/	
brilliance	/ˈbrɪljəns/	
bring	/brɪŋ/	
broaden	/ˈbr0ːdən/	
brink	/brɪŋk/	
brisk	/brɪsk/	
broad	/br0ːd/	
broadcast	/ˈbr0ːdkæst/	
brochure	/brouˈʃur/	
broke	/brouk/	
broker	/ˈbroukər/	
bronze	/brɑːnz/	
brood	/bruːd/	
broom	/bruːm/	
brother	/ˈbrΛŎər/	
brow	/brau/	
brown	/braun/	
browse	/brauz/	
bruise	/bruːz/	
brunch	/brΛntʃ/	
brush	/brΛʃ/	
brutal	/ˈbruːtəl/	
bubble	/ˈbΛbəl/	
buck	/bΛk/	
bucket	/ˈbΛkɪt/	
buckle	/ˈbΛkəl/	
bud	/bΛd/	
buddy	/ˈbΛdi/	
browser	/ˈbrauzər/	
brutality	/bruː ˈtæləti/	
buddhism	/ˈbuːdɪzəm/	
buddhist	/ˈbuːdɪst/	
budget	/ˈbΛd3ɪt/	
budgetary	/ˈbΛd3ɪteri/	
buffalo	/ˈbΛfəlou/	
buffer	/ˈbΛfər/	
buffet	/bə ˈfeɪ/ (n.) /ˈbΛfɪt/	
bug	/(bΛ)ɡ/	
build	/bɪld/	
bulb	/bΛlb/	
bulk	/bΛlk/	
bull	/bul/	
building	/ˈbɪldɪŋ/	
bulky	/ˈbΛlki/	
bullet	/ˈbʊlɪt/	
bulletin	/ˈbʊlətɪn/	
bully	/ˈbʊli/	
bump	/bʌmp/	
bumper	/ˈbʌmpər/	
bunch	/bʌntʃ/	
bundle	/ˈbʌndəl/	
burden	/ˈbɜːrdən/	
bureau	/ˈbjʊroʊ/	
bureaucrat	/ˈbjʊrəkræt/	
bureaucratic	/ˌbjʊrəˈkrætɪk/	
bureaucracy	/bjʊ ˈ rɑːkrəsi/	
burglar	/ˈbɜːrɡlər/	
burglary	/ˈbɜːrɡləri/	
burn	/bɜːrn/	
burial	/ˈberiəl/	
burst	/bɜːrst/	
bury	/ˈberi/	
bus	/bʌs/	
bush	/bʊʃ/	
business	/ˈbɪznəs/	
businessman	/ˈbɪznəsmæn/	
bushy	/ˈbʊʃi/	
bust	/bʌst/	
busy	/ˈbɪzi/	
but	/bʌt/	
butcher	/ˈbʊtʃər/	
butt	/bʌt/	
butter	/ˈbʌtər/	
butterfly	/ˈbʌtərflaɪ/	
button	/ˈbʌtən/	
buy	/baɪ/	
buyer	/ˈbaɪər/	
buzz	/bʌz/	
by	/baɪ/	
bypass	/ˈbaɪpæs/	
bystander	/ˈbaɪstændər/	
cab	/kæb/	
cabbage	/ˈkæbɪdʒ/	
cabin	/ˈkæbɪn/	
cabinet	/ˈkæbɪnət/	
cable	/ˈkeɪbəl/	
cafe	/kæˈfeɪ/	
cafeteria	/ ˌ kæfəˈtɪriə/	
cage	/keɪdʒ/	
cake	/keɪk/	
calcium	/ˈkælsiəm/	
calculate	/ˈkælkjuleɪt/	
calculation	/ˌkælkju ˈleɪʃən/	
calculator	/ˈkælkjuleɪtər/	
calculating	/ˈkælkjuleɪtɪŋ/	
calendar	/ˈkælɪndər/	
calf	/kæf/	
call	/kɔːl/	
calling	/ˈkɔːlɪŋ/	
calm	/kɑːm/	
calorie	/ˈkæləri/	
camel	/ˈkæməl/	
camera	/ˈkæmərə/	
camp	/kæmp/	
campaign	/kæmˈpeɪn/	
campus	/ˈkæmpəs/	
can	/kæn/	
canal	/kəˈ næl/	
cancel	/ˈkænsəl/	
cancellation	/ˌkænsəˈ leɪʃən/	
cancer	/ˈkænsər/	
candidate	/ˈkændɪdeɪt/	
candidacy	/ˈkændɪdəsi/	
candle	/ˈkændəl/	
candy	/ˈkændi/	
cane	/keɪn/	
cannon	/ˈkænən/	
canoe	/kəˈ nuː/	
canteen	/kænˈtiːn/	
canvas	/ˈkænvəs/	
cap	/kæp/	
capable	/ˈkeɪpəbəl/	
capability	/ˌkeɪpə ˈbɪlɪti/	
capacity	/kəˈ pæsɪti/	
cape	/keɪp/	
capital	/ˈkæpɪtəl/	
capitalism	/ˈkæpɪtəlɪzəm/	
capsule	/ˈkæpsjuːl/	
captain	/ˈkæptɪn/	
caption	/ˈkæpʃən/	
captive	/ˈkæptɪv/	
capture	/ˈkæptʃər/	
car	/kɑːr/	
caravan	/ˈkærəvæn/	
carbohydrate	/ ˌ kɑːrbouˈhaɪdreɪt/	
carbon	/ˈkɑːrbən/	
card	/kɑːrd/	
cardboard	/ˈkɑːrdb0ːrd/	
cardinal	/ˈkɑːrdɪnəl/	
care	/ker/	
careless	/ˈkerləs/	
career	/kə ˈ rɪr/	
cargo	/ˈkɑːrɡou/	
carpenter	/ˈkɑːrpəntər/	
carpet	/ˈkɑːrpɪt/	
carriage	/ˈkærɪd3/	
carrier	/ˈkæriər/	
carrot	/ˈkærət/	
carry	/ˈkæri/	
cart	/kɑːrt/	
carton	/ˈkɑːrtən/	
cartoon	/kɑːrˈtuːn/	
cartoonist	/kɑːrˈtuːnɪst/	
carve	/kɑːrv/	
carving	/ˈkɑːrvɪŋ/	
case	/keɪs/	
catastrophic	/ ˌ kætəˈstrɑːfɪk/	
cash	/kæʃ/	
cashier	/kæ ˈʃɪr/	
casino	/kəˈsiːnou/	
cast	/kæst/	
castle	/ˈkæsəl/	
casual	/ˈkæ3uəl/	
casualty	/ˈkæ3uəlti/	
cat	/kæt/	
catalog	/ˈkætəl0ːɡ/	
catalogue	/ˈkætəl0ːɡ/	
catastrophe	/kəˈtæstrəfi/	
catch	/kætʃ/	
cautious	/ˈkɔːʃəs/	
category	/ˈkætəɡɔːri/	
cater	/ˈkeɪtər/	
cathedral	/kə ˈəiːdrəl/	
catholic	/ˈkæəəlɪk/	
cattle	/ˈkætəl/	
cauliflower	/ˈkɔːliflaʊər/	
cause	/kɔːz/	
caution	/ˈkɔːʃən/	
cave	/keɪv/	
celebration	/ˌselɪ ˈbreɪʃən/	
cavity	/ˈkævɪti/	
cease	/siːs/	
ceiling	/ˈsiːlɪŋ/	
celebrate	/ˈselɪbreɪt/	
celebrity	/sə ˈlebrəti/	
cell	/sel/	
cellar	/ˈselər/	
celsius	/ˈselsiəs/	
cement	/sɪˈ ment/	
cemetery	/ˈseməteri/	
censor	/ˈsensər/	
censorship	/ˈsensərʃɪp/	
census	/ˈsensəs/	
cent	/sent/	
center	/ˈsentər/	
central	/ˈsentrəl/	
centigrade	/ˈsentɪɡreɪd/	
centralize	/ˈsentrəlaɪz/	
centimeter	/ˈsentɪmiːtər/	
century	/ˈsentʃəri/	
ceramic	/səˈ ræmɪk/	
cereal	/ˈsɪriəl/	
ceremony	/ˈserəmoʊni/	
ceremonial	/ ˌserɪˈmoʊniəl/	
certain	/ˈsɜːrtən/	
certainly	/ˈsɜːrtənli/	
certainty	/ˈsɜːrtənti/	
certificate	/sərˈtɪfɪkət/	
certify	/ˈsɜːrtɪfaɪ/	
certification	/ˌsɜːrtɪfɪ ˈkeɪʃən/	
chain	/tʃeɪn/	
chair	/tʃer/	
chairman	/ˈtʃermən/	
chairperson	/ˈtʃerpɜːrsən/	
chalk	/tʃɔːk/	
challenge	/ˈtʃælɪndʒ/	
challenging	/ˈtʃælɪndʒɪŋ/	
chamber	/ˈtʃeɪmbər/	
champagne	/ʃæmˈpeɪn/	
champion	/ˈtʃæmpiən/	
championship	/ˈtʃæmpiənʃɪp/	
chance	/tʃæns/	
chancellor	/ˈtʃænsələr/	
change	/tʃeɪndʒ/	
channel	/ˈtʃænəl/	
chant	/tʃænt/	
chaos	/ˈkeɪɑːs/	
chaotic	/keɪ ˈɑːtɪk/	
chapel	/ˈtʃæpəl/	
chapter	/ˈtʃæptər/	
character	/ˈkærɪktər/	
characteristic	/ ˌ kærəktəˈ rɪstɪk/	
characterize	/ˈkærəktəraɪz/	
charge	/tʃɑːrdʒ/	
charity	/ˈtʃærɪti/	
charitable	/ˈtʃærɪtəbəl/	
charm	/tʃɑːrm/	
charming	/ˈtʃɑːrmɪŋ/	
chart	/tʃɑːrt/	
charter	/ˈtʃɑːrtər/	
chase	/tʃeɪs/	
chat	/tʃæt/	
cheap	/tʃiːp/	
cheat	/tʃiːt/	
check	/tʃek/	
cheque	/tʃek/	
cheek	/tʃiːk/	
cheer	/tʃɪr/	
cheerful	/ˈtʃɪrfəl/	
cheese	/tʃiːz/	
chef	/ʃef/	
chemical	/ˈkemɪkəl/	
chemist	/ˈkemɪst/	
chemistry	/ˈkemɪstri/	
cherish	/ˈtʃerɪʃ/	
childish	/ˈtʃaɪldɪʃ/	
chess	/tʃes/	
chest	/tʃest/	
chew	/tʃuː/	
chicken	/ˈtʃɪkɪn/	
chief	/tʃiːf/	
child	/tʃaɪld/	
chill	/tʃɪl/	
chilly	/ˈtʃɪli/	
chimney	/ˈtʃɪmni/	
chin	/tʃɪn/	
china	/ˈtʃaɪnə/	
chip	/tʃɪp/	
chocolate	/ˈtʃɑːklət/	
choice	/tʃɔɪs/	
choir	/ˈkwaɪər/	
choke	/tʃoʊk/	
cholesterol	/kə ˈ lestərɔːl/	
choose	/tʃuːz/	
chop	/tʃɑːp/	
chopstick	/ˈtʃɑːpstɪk/	
chord	/kɔːrd/	
chore	/tʃɔːr/	
chorus	/ˈkɔːrəs/	
christ	/kraɪst/	
christmas	/ˈkrɪsməs/	
christian	/ˈkrɪstʃən/	
christianity	/ ˌ krɪsti ˈænɪti/	
chronic	/ˈkrɑːnɪk/	
chronically	/ˈkrɑːnɪkli/	
chronicle	/ˈkrɑːnɪkəl/	
chunk	/tʃʌŋk/	
church	/tʃɜːrtʃ/	
cigar	/sɪ ˈɡɑːr/	
cigarette	/ˌsɪɡə ˈ ret/	
cinema	/ˈsɪnɪmə/	
circle	/ˈsɜːrkəl/	
circuit	/ˈsɜːrkɪt/	
circulate	/ˈsɜːrkjəleɪt/	
circulation	/ˌsɜːrkjə ˈleɪʃən/	
circumstance	/ˈsɜːrkəmstæns/	
circus	/ˈsɜːrkəs/	
cite	/saɪt/	
citation	/saɪˈteɪʃən/	
citizen	/ˈsɪtɪzən/	
citizenship	/ˈsɪtɪzənʃɪp/	
city	/ˈsɪti/	
civic	/ˈsɪvɪk/	
civil	/ˈsɪvəl/	
civilize	/ˈsɪvɪlaɪz/	
civilization	/ˌsɪvɪlɪ ˈzeɪʃən/	
civilian	/sɪ ˈvɪljən/	
claim	/kleɪm/	
clamp	/klæmp/	
clan	/klæn/	
clap	/klæp/	
clarity	/ˈklærɪti/	
clarify	/ˈklærɪfaɪ/	
clarification	/ˌklærɪfɪˈ keɪʃən/	
clash	/klæʃ/	
clasp	/klæsp/	
class	/klæs/	
classic	/ˈklæsɪk/	
classical	/ˈklæsɪkəl/	
classify	/ˈklæsɪfaɪ/	
classification	/ˌklæsɪfɪˈ keɪʃən/	
classified	/ˈklæsɪfaɪd/	
classmate	/ˈklæsmeɪt/	
classroom	/ˈklæsruːm/	
clause	/klɔːz/	
claw	/klɔː/	
clay	/kleɪ/	
clean	/kliːn/	
cleanse	/klenz/	
clear	/klɪr/	
clearly	/ˈklɪrli/	
clearance	/ˈklɪrəns/	
clear-cut	/ ˌ klɪr ˈ kʌt/	
clearing	/ˈklɪrɪŋ/	
clerical	/ˈklerɪkəl/	
clench	/klentʃ/	
clergy	/ˈklɜːrdʒi/	
clerk	/klɜːrk/	
clever	/ˈklevər/	
cliché	/kliː ˈʃeɪ/	
click	/klɪk/	
client	/ˈklaɪənt/	
cliff	/klɪf/	
climate	/ˈklaɪmɪt/	
climatic	/klaɪˈ mætɪk/	
climax	/ˈklaɪmæks/	
climb	/klaɪm/	
cling	/klɪŋ/	
clinic	/ˈklɪnɪk/	
clinical	/ˈklɪnɪkəl/	
clip	/klɪp/	
cloak	/kloʊk/	
clock	/klɑːk/	
clockwise	/ˈklɑːkwaɪz/	
clog	/klɑːɡ/	
clone	/kloʊn/	
close	/kloʊz/ (v.) /kloʊs/	
closet	/(ˈkdlː)zɪt/	
cloth	/klɔːə/	
clothe	/kloʊð/	
clothes	/kloʊðz/	
clothing	/ˈkloʊðɪŋ/	
cloud	/klaʊd/	
cloudy	/ˈklaʊdi/	
clown	/klaʊn/	
club	/klʌb/	
clue	/kluː/	
clumsy	/ˈklʌmzi/	
cluster	/ˈklʌstər/	
clutch	/klʌtʃ/	
coach	/koʊtʃ/	
coal	/koʊl/	
coalition	/ˌkoʊəˈlɪʃən/	
coarse	/kɔːrs/	
coast	/koʊst/	
coastal	/ˈkoʊstəl/	
coat	/koʊt/	
cocaine	/kouˈ keɪn/	
cock	/kɑːk/	
cockpit	/ˈkɑːkpɪt/	
cocktail	/ˈkɑːkteɪl/	
coconut	/ˈkoukənΛt/	
code	/koud/	
coexist	/ˌkouɪɡ ˈzɪst/	
coexistence	/ˌkouɪɡˈzɪstəns/	
coffee	/ˈk0ːfi/	
cognitive	/ˈkɑːɡnɪtɪv/	
cognition	/kɑːɡ ˈ nɪʃən/	
coherent	/kouˈ hɪrənt/	
coherence	/kouˈ hɪrəns/	
cohesion	/kouˈ hiː3ən/	
coil	/k0ɪl/	
cohesive	/kouˈ hiːsɪv/	
coin	/k0ɪn/	
coinage	/ˈk0ɪnɪd3/	
coincide	/ ˌ kouɪnˈsaɪd/	
coincidence	/kouˈɪnsɪdəns/	
cold	/kould/	
collaborate	/kəˈ læbəreɪt/	
collaboration	/kəˌ læbə ˈ reɪʃən/	
collaborative	/kəˈ læbərətɪv/	
collapse	/kəˈ læps/	
collar	/ˈkɑːlər/	
colleague	/ˈkɑːliːɡ/	
collect	/kə ˈ lekt/	
collection	/kəˈ lekʃən/	
collective	/kəˈ lektɪv/	
college	/ˈkɑːlɪd3/	
collide	/kəˈ laɪd/	
collision	/kəˈ lɪ3ən/	
colon	/ˈkoulən/	
semicolon	/ˈsemikoulən/	
colonel	/ˈk3ːrnəl/	
colonial	/kəˈ louniəl/	
colonialism	/kəˈ louniəlɪzəm/	
colonize	/ˈkɑːlənaɪz/	
colony	/ˈkɑːləni/	
color	/ˈkΛlər/	
colour	/ˈkΛlər/	
colorful	/ˈkʌlərfəl/	
colourful	/ˈkʌlərfəl/	
column	/ˈkɑːləm/	
columnist	/ˈkɑːləmnɪst/	
comb	/koʊm/	
combat	/ˈkɑːmbæt/	
combative	/kəmˈbætɪv/	
combination	/ˌkɑːmbɪ ˈ neɪʃən/	
combine	/kəmˈbaɪn/	
come	/kʌm/	
comedy	/ˈkɑːmədi/	
comet	/ˈkɑːmɪt/	
comfort	/ˈkʌmfərt/	
comfortable	/ˈkʌmfərtəbəl/	
comic	/ˈkɑːmɪk/	
comma	/ˈkɑːmə/	
command	/kəˈ mænd/	
commander	/kəˈ mændər/	
commemorate	/kəˈ meməreɪt/	
commemoration	/kəˌ meməˈ reɪʃən/	
commence	/kəˈ mens/	
commencement	/kəˈ mensmənt/	
commend	/kəˈ mend/	
commendation	/ˌkɑːmenˈdeɪʃən/	
comment	/ˈkɑːment/	
commentary	/ˈkɑːmənteri/	
commentator	/ˈkɑːmənteɪtər/	
commerce	/ˈkɑːmɜːrs/	
commercial	/kəˈ mɜːrʃəl/	
commercialize	/kəˈ mɜːrʃəlaɪz/	
commission	/kəˈ mɪʃən/	
commit	/kəˈ mɪt/	
commitment	/kəˈ mɪtmənt/	
committee	/kəˈ mɪti/	
commodity	/kəˈ mɑːdəti/	
common	/ˈkɑːmən/	
commonplace	/ˈkɑːmənpleɪs/	
commonwealth	/ˈkɑːmənwelə/	
communicate	/kəˈ mjuːnɪkeɪt/	
communication	/kəˌ mjuːnɪˈ keɪʃən/	
communicative	/kəˈ mjuːnɪkətɪv/	
commune	/ˈkɑːmjuːn/	
communist	/ˈkɑːmjənɪst/	
communism	/ˈkɑːmjənɪzəm/	
community	/kəˈ mjuːnəti/	
commute	/kəˈ mjuːt/	
commuter	/kəˈ mjuːtər/	
compact	/kəmˈ pækt/ (adj./v.) /ˈkɑːmpækt/ (n.)	
companion	/kəmˈ pænjən/	
companionship	/kəmˈ pænjənʃɪp/	
company	/ˈkʌmpəni/	
compare	/kəmˈ per/	
comparison	/kəmˈ pærɪsən/	
comparative	/kəmˈ pærətɪv/	
comparable	/ˈkɑːmpərəbəl/	
compartment	/kəmˈ pɑːrtmənt/	
compass	/ˈkʌmpəs/	
compassion	/kəmˈ pæʃən/	
compassionate	/kəmˈ pæʃənət/	
compatibility	/kəm ˌ pætɪˈbɪlɪti/	
compatible	/kəmˈ pætəbəl/	
compel	/kəmˈ pel/	
compelling	/kəmˈ pelɪŋ/	
compensate	/ˈkɑːmpenseɪt/	
compensation	/ˌkɑːmpenˈseɪʃən/	
compensatory	/kəmˈ pensətɔːri/	
compete	/kəm ˈ piːt/	
competition	/ˌkɑːmpəˈtɪʃən/	
competitive	/kəmˈ petətɪv/	
competitor	/kəmˈ petɪtər/	
competent	/ˈkɑːmpɪtənt/	
competence	/ˈkɑːmpɪtəns/	
compile	/kəmˈ paɪl/	
compilation	/ˌkɑːmpɪˈleɪʃən/	
complacent	/kəmˈ pleɪsənt/	
complacency	/kəmˈ pleɪsənsi/	
complain	/kəmˈ pleɪn/	
complaint	/kəmˈ pleɪnt/	
complement	/ˈkɑːmplɪmənt/	
complementary	/ˌkɑːmplɪˈ mentəri/	
complete	/kəm ˈ pliːt/	
completion	/kəm ˈ pliːʃən/	
complex	/kəmˈ pleks/ (adj.) /ˈk ɑːmpleks/ (n.)	
complexity	/kəmˈ pleksəti/	
complexion	/kəmˈ plekʃən/	
complicate	/ˈkɑːmplɪkeɪt/	
complicated	/ˈkɑːmplɪkeɪtɪd/	
complication	/ˌkɑːmplɪˈ keɪʃən/	
compliment	/ˈkɑːmplɪmənt/	
complimentary	/ˌkɑːmplɪˈ mentəri/	
comply	/kəmˈ plaɪ/	
compliance	/kəmˈ plaɪəns/	
component	/kəmˈ poʊnənt/	
compose	/kəmˈ poʊz/	
composition	/ˌkɑːmpəˈzɪʃən/	
composer	/kəmˈ poʊzər/	
composite	/kəmˈ pɑːzɪt/	
compound	/ˈkɑːmpaʊnd/	
comprehend	/ˌkɑːmprɪˈhend/	
comprehension	/ˌkɑːmprɪˈhenʃən/	
comprehensive	/ˌkɑːmprɪˈhensɪv/	
compress	/kəmˈ pres/	
compression	/kəmˈ preʃən/	
comprise	/kəmˈ praɪz/	
compromise	/ˈkɑːmprəmaɪz/	
compulsory	/kəmˈ pʌlsəri/	
compute	/kəmˈ pjuːt/	
computer	/kəmˈ pjuːtər/	
computerize	/kəmˈ pjuːtəraɪz/	
computation	/ˌkɑːmpju ˈteɪʃən/	
comrade	/ˈkɑːmræd/	
conceal	/kən ˈsiːl/	
concealment	/kənˈsiːlmənt/	
concede	/kən ˈsiːd/	
concession	/kənˈseʃən/	
conceit	/kən ˈsiːt/	
conceited	/kən ˈsiːtɪd/	
conceive	/kən ˈsiːv/	
conception	/kənˈsepʃən/	
concentrate	/ˈkɑːnsəntreɪt/	
concentration	/ˌkɑːnsənˈtreɪʃən/	
concept	/ˈkɑːnsept/	
conceptual	/kənˈseptʃuəl/	
concern	/kənˈs3ːrn/	
concerned	/kənˈs3ːrnd/	
concerning	/kənˈs3ːrnɪŋ/	
concert	/ˈkɑːnsərt/	
concerted	/kən ˈs3ːrtɪd/	
concise	/kənˈsaɪs/	
conclude	/kənˈ kluːd/	
conclusion	/kənˈ kluː3ən/	
conclusive	/kənˈ kluːsɪv/	
concrete	/kən ˈ kriːt/ (adj.) /ˈkɑ ːnkriːt/ (n.)	
concurrent	/kənˈ k3ːrənt/	
condemn	/kənˈdem/	
condemnation	/ˌkɑːndemˈneɪʃən/	
condense	/kənˈdens/	
condensation	/ˌkɑːndenˈseɪʃən/	
condition	/kənˈdɪʃən/	
conditional	/kənˈdɪʃənəl/	
conditioner	/kənˈdɪʃənər/	
condolence	/kənˈdouləns/	
conducive	/kənˈduːsɪv/	
conduct	/kənˈdΛkt/ (v.) /ˈkɑːnd Λkt/ (n.)	
conductor	/kənˈdΛktər/	
confederation	/kənˌfedə ˈreɪʃən/	
confederate	/kənˈfedərət/	
confer	/kən ˈf3ːr/	
conference	/ˈkɑːnfərəns/	
confess	/kənˈfes/	
confession	/kənˈfeʃən/	
confide	/kənˈfaɪd/	
confidence	/ˈkɑːnfɪdəns/	
confident	/ˈkɑːnfɪdənt/	
confidential	/ˌkɑːnfɪ ˈdenʃəl/	
configuration	/kənˌfɪɡjə ˈ reɪʃən/	
confine	/kənˈfaɪn/	
confinement	/kənˈfaɪnmənt/	
confirm	/kənˈf3ːrm/	
confirmation	/ˌkɑːnfərˈmeɪʃən/	
conflict	/ˈkɑːnflɪkt/ (n.) /kən ˈfl ɪkt/ (v.)	
conform	/kənˈf0ːrm/	
conformity	/kənˈf0ːrməti/	
confront	/kənˈfrΛnt/	
confrontation	/ˌkɑːnfrənˈteɪʃən/	
confucian	/kənˈfjuːʃən/	
confucianism	/kənˈfjuːʃənɪzəm/	
confuse	/kən ˈfjuːz/	
confusion	/kənˈfjuː3ən/	
congratulate	/kənˈɡrætʃuleɪt/	
congratulation	/kənˌɡrætʃu ˈleɪʃən/	
congratulatory	/kənˈɡrætʃələt0ːri/	
congregate	/ˈkɑːŋɡrɪɡeɪt/	
congregation	/ˌkɑːŋɡrɪˈɡeɪʃən/	
congress	/ˈkɑːŋɡrɪs/	
congressional	/kənˈɡreʃənəl/	
conjunction	/kənˈd3Λŋkʃən/	
connect	/kəˈ nekt/	
connotation	/ˌkɑːnəˈteɪʃən/	
conquer	/ˈkɑːŋkər/	
conqueror	/ˈkɑːŋkərər/	
conquest	/ˈkɑːŋkwest/	
conscience	/ˈkɑːnʃəns/	
conscientious	/ˌkɑːnʃi ˈenʃəs/	
conscious	/ˈkɑːnʃəs/	
consciousness	/ˈkɑːnʃəsnəs/	
consecutive	/kənˈsekjətɪv/	
consensus	/kənˈsensəs/	
consent	/kənˈsent/	
consequence	/ˈkɑːnsɪkwens/	
consequent	/ˈkɑːnsɪkwent/	
consequently	/ˈkɑːnsɪkwentli/	
conservative	/kənˈs3ːrvətɪv/	
conserve	/kənˈs3ːrv/	
conservation	/ˌkɑːnsərˈveɪʃən/	
consider	/kənˈsɪdər/	
consideration	/kənˌsɪdə ˈ reɪʃən/	
considering	/kənˈsɪdərɪŋ/	
considerable	/kənˈsɪdərəbəl/	
considerate	/kənˈsɪdərət/	
consist	/kənˈsɪst/	
consistent	/kənˈsɪstənt/	
consistency	/kənˈsɪstənsi/	
console	/kənˈsoul/	
consolation	/ˌkɑːnsəˈleɪʃən/	
consolidate	/kənˈsɑːlɪdeɪt/	
consolidation	/kənˌsɑːlɪˈdeɪʃən/	
conspicuous	/kənˈspɪkjuəs/	
conspire	/kənˈspaɪər/	
conspiracy	/kənˈspɪrəsi/	
constant	/ˈkɑːnstənt/	
constituent	/kənˈstɪtʃuənt/	
constituency	/kənˈstɪtʃuənsi/	
constitute	/ˈkɑːnstɪtuːt/	
constitution	/ˌkɑːnstɪ ˈtuːʃən/	
constitutional	/ˌkɑːnstɪ ˈtuːʃənəl/	
constrain	/kənˈstreɪn/	
constraint	/kənˈstreɪnt/	
construct	/kənˈstrΛkt/	
construction	/kənˈstrΛkʃən/	
consulate	/ˈkɑːnsələt/	
consul	/ˈkɑːnsəl/	
consult	/kən ˈsΛlt/	
consultation	/ˌkɑːnsəlˈteɪʃən/	
consultative	/kənˈsΛltətɪv/	
consultant	/kənˈsΛltənt/	
consume	/kənˈsuːm/	
consumer	/kənˈsuːmər/	
consumption	/kənˈsΛmpʃən/	
contact	/ˈkɑːntækt/	
contagious	/kənˈteɪd3əs/	
contain	/kənˈteɪn/	
container	/kənˈteɪnər/	
containment	/kənˈteɪnmənt/	
contaminate	/kənˈtæmɪneɪt/	
contamination	/kənˌtæmɪˈ neɪʃən/	
contemplate	/ˈkɑːntəmpleɪt/	
contemplation	/ˌkɑːntəm ˈpleɪʃən/	
contemplative	/kənˈtemplətɪv/	
contemporary	/kənˈtempəreri/	
contempt	/kənˈtempt/	
contemptible	/kənˈtemptəbəl/	
contend	/kənˈtend/	
contention	/kənˈtenʃən/	
contentious	/kənˈtenʃəs/	
content	/ˈkɑːntent/	
contented	/kənˈtentɪd/	
contest	/ˈkɑːntest/ (n.) /kə n ˈtest/ (v.)	
contestant	/kənˈtestənt/	
context	/ˈkɑːntekst/	
contextual	/kənˈtekstʃuəl/	
continent	/ˈkɑːntɪnənt/	
continental	/ ˌ kɑːntɪ ˈnentəl/	
contingent	/kənˈtɪndʒənt/	
continue	/kən ˈtɪnjuː/	
continuation	/kənˌtɪnju ˈeɪʃən/	
continual	/kənˈtɪnjuəl/	
continuous	/kənˈtɪnjuəs/	
continuity	/ ˌ kɑːntɪ ˈnuːəti/	
contract	/ˈkɑːntrækt/	
contractor	/kənˈtræktər/	
contraction	/kənˈtrækʃən/	
contradict	/ ˌ kɑːntrə ˈdɪkt/	
contradiction	/ˌkɑːntrəˈdɪkʃən/	
contradictory	/ ˌ kɑːntrə ˈdɪktəri/	
contrary	/ˈkɑːntreri/	
contrast	/ˈkɑːntræst/ (n.) /kə n ˈtræst/ (v.)	
contribute	/kən ˈtrɪbjuːt/	
contribution	/ˌkɑːntrɪ ˈbjuːʃən/	
contributor	/kən ˈtrɪbjətər/	
contrive	/kənˈtraɪv/	
control	/kən ˈtroʊl/	
controversy	/ˈkɑːntrəvɜːrsi/	
controversial	/ˌkɑːntrə ˈvɜːrʃəl/	
convene	/kən ˈviːn/	
convenient	/kən ˈviːniənt/	
convenience	/kənˈviːniəns/	
convention	/kənˈvenʃən/	
conventional	/kənˈvenʃənəl/	
converge	/kənˈvɜːrdʒ/	
convergence	/kənˈvɜːrdʒəns/	
converse	/kənˈvɜːrs/	
conversation	/ˌkɑːnvərˈseɪʃən/	
convert	/kən ˈvɜːrt/	
conversion	/kənˈvɜːrʒən/	
convertible	/kənˈvɜːrtəbəl/	
convey	/kənˈveɪ/	
conveyance	/kənˈveɪəns/	
convict	/kən ˈvɪkt/ (v.) /ˈkɑːnvɪ kt/ (n.)	
conviction	/kənˈvɪkʃən/	
convince	/kənˈvɪns/	
convincing	/kənˈvɪnsɪŋ/	
convoy	/ˈkɑːnvɔɪ/	
cook	/kʊk/	
cooker	/ˈkʊkər/	
cookie	/ˈkʊki/	
cool	/kuːl/	
cooperate	/koʊˈɑːpəreɪt/	
cooperation	/koʊˌɑːpəˈreɪʃən/	
cooperative	/koʊˈɑːpərətɪv/	
coordinate	/koʊˈɔːrdɪneɪt/	
coordination	/koʊˌɔːrdɪ ˈ neɪʃən/	
coordinator	/koʊˈɔːrdɪneɪtər/	
cop	/kɑːp/	
cope	/koʊp/	
copper	/ˈkɑːpər/	
copy	/ˈkɑːpi/	
copyright	/ˈkɑːpiraɪt/	
coral	/ˈkɔːrəl/	
cord	/kɔːrd/	
cordial	/ˈkɔːrdʒəl/	
cordiality	/ˌkɔːrdʒi ˈæləti/	
core	/kɔːr/	
cork	/kɔːrk/	
corn	/kɔːrn/	
corner	/ˈkɔːrnər/	
cornerstone	/ˈkɔːrnərstoʊn/	
corporal	/ˈkɔːrpərəl/	
corporation	/ˌkɔːrpəˈ reɪʃən/	
corporate	/ˈkɔːrpərət/	
corps	/kɔːr/	
corpse	/kɔːrps/	
correct	/kəˈ rekt/	
correction	/kəˈ rekʃən/	
corrective	/kəˈ rektɪv/	
correlate	/ˈkɔːrəleɪt/	
correlation	/ˌkɔːrə ˈleɪʃən/	
correlative	/kəˈ relətɪv/	
correspond	/ˌkɔːrəˈspɑːnd/	
correspondence	/ˌkɔːrəˈspɑːndəns/	
correspondent	/ˌkɔːrəˈspɑːndənt/	
corresponding	/ˌkɔːrəˈspɑːndɪŋ/	
corridor	/ˈkɔːrɪdɔːr/	
corrode	/kəˈ roʊd/	
corrosion	/kəˈ roʊʒən/	
corrupt	/kəˈ rʌpt/	
corruption	/kəˈ rʌpʃən/	
cosmetic	/kɑːzˈ metɪk/	
cosmopolitan	/ˌkɑːzməˈ pɑːlɪtən/	
cosmos	/ˈkɑːzmoʊs/	
cosmic	/ˈkɑːzmɪk/	
cost	/kɔːst/	
costly	/ˈkɔːstli/	
costume	/ˈkɑːstuːm/	
cottage	/ˈkɑːtɪdʒ/	
cotton	/ˈkɑːtən/	
couch	/kaʊtʃ/	
cough	/kɔːf/	
could	/kʊd/	
council	/ˈkaʊnsəl/	
councillor	/ˈkaʊnsələr/	
councilor	/ˈkaʊnsələr/	
counsel	/ˈkaʊnsəl/	
counsellor	/ˈkaʊnsələr/	
counselor	/ˈkaʊnsələr/	
count	/kaʊnt/	
countdown	/ˈkaʊntdaʊn/	
counter	/ˈkaʊntər/	
counteract	/ ˌ kaʊntərˈækt/	
counteraction	/ˌkaʊntərˈækʃən/	
counterfeit	/ˈkaʊntərfɪt/	
counterpart	/ˈkaʊntərpɑːrt/	
country	/ˈkʌntri/	
countryside	/ˈkʌntrisaɪd/	
county	/ˈkaunti/	
couple	/ˈkΛpəl/	
coupon	/ˈkuːpɑːn/	
courage	/ˈk3ːrɪd3/	
courageous	/kəˈ reɪd3əs/	
course	/k0ːrs/	
court	/k0ːrt/	
courtesy	/ˈk3ːrtəsi/	
courtyard	/ˈk0ːrtjɑːrd/	
cousin	/ˈkΛzən/	
cover	/ˈkΛvər/	
coverage	/ˈkΛvərɪd3/	
cow	/kau/	
coward	/ˈkauərd/	
cowardly	/ˈkauərdli/	
cowardice	/ˈkauərdɪs/	
cowboy	/ˈkaub0ɪ/	
cozy	/ˈkouzi/	
cosy	/ˈkouzi/	
crab	/kræb/	
crack	/kræk/	
crackdown	/ˈkrækdaun/	
cracker	/ˈkrækər/	
cradle	/ˈkreɪdəl/	
craft	/kræft/	
cram	/kræm/	
crane	/kreɪn/	
crash	/kræʃ/	
crate	/kreɪt/	
crave	/kreɪv/	
crawl	/kr0ːl/	
crazy	/ˈkreɪzi/	
craze	/kreɪz/	
cream	/kriːm/	
creamy	/ˈkriːmi/	
create	/kri ˈeɪt/	
creation	/kriˈeɪʃən/	
creative	/kriˈeɪtɪv/	
creator	/kri ˈeɪtər/	
creature	/ˈkriːtʃər/	
credential	/krɪ ˈdenʃəl/	
credible	/ˈkredəbəl/	
credibility	/ ˌ kredɪ ˈbɪlɪti/	
credit	/ˈkredɪt/	
creditable	/ˈkredɪtəbəl/	
creep	/kriːp/	
crew	/kruː/	
cricket	/ˈkrɪkɪt/	
crime	/kraɪm/	
criminal	/ˈkrɪmɪnəl/	
cripple	/ˈkrɪpəl/	
crisis	/ˈkraɪsɪs/	
crisp	/krɪsp/	
criterion	/kraɪ ˈtɪriən/	
criticize	/ˈkrɪtɪsaɪz/	
criticise	/ˈkrɪtɪsaɪz/	
criticism	/ˈkrɪtɪsɪzəm/	
critic	/ˈkrɪtɪk/	
critical	/ˈkrɪtɪkəl/	
crocodile	/ˈkrɑːkədaɪl/	
crop	/krɑːp/	
cross	/krɔːs/	
crossing	/ˈkrɔːsɪŋ/	
crouch	/kraʊtʃ/	
crow	/kroʊ/	
crowd	/kraʊd/	
crowded	/ˈkraʊdɪd/	
crown	/kraʊn/	
crucial	/ˈkruːʃəl/	
crude	/kruːd/	
cruel	/ˈkruːəl/	
cruelty	/ˈkruːəlti/	
cruise	/kruːz/	
cruiser	/ˈkruːzər/	
crumble	/ˈkrʌmbəl/	
crunch	/krʌntʃ/	
crush	/krʌʃ/	
crust	/krʌst/	
cry	/kraɪ/	
crystal	/ˈkrɪstəl/	
cub	/kʌb/	
cube	/kjuːb/	
cubic	/ˈkjuːbɪk/	
cucumber	/ˈkjuːkΛmbər/	
cue	/kjuː/	
cuisine	/kwɪ ˈziːn/	
culminate	/ˈkΛlmɪneɪt/	
culmination	/ˌkΛlmɪˈ neɪʃən/	
cult	/kΛlt/	
cultivate	/ˈkΛltɪveɪt/	
cultivation	/ˌkΛltɪ ˈveɪʃən/	
culture	/ˈkΛltʃər/	
cultural	/ˈkΛltʃərəl/	
cumulative	/ˈkjuːmjəleɪtɪv/	
cunning	/ˈkΛnɪŋ/	
cup	/kΛp/	
cupboard	/ˈkΛbərd/	
curb	/k3ːrb/	
cure	/kjur/	
curable	/ˈkjurəbəl/	
curfew	/ˈk3ːrfjuː/	
curious	/ˈkjuriəs/	
curl	/k3ːrl/	
curiosity	/ˌkjuri ˈɑːsəti/	
currency	/ˈk3ːrənsi/	
current	/ˈk3ːrənt/	
currently	/ˈk3ːrəntli/	
curriculum	/kəˈ rɪkjələm/	
curse	/k3ːrs/	
curtail	/k3ːr ˈteɪl/	
curtain	/ˈk3ːrtən/	
curve	/k3ːrv/	
cushion	/ˈkuʃən/	
custody	/ˈkΛstədi/	
custom	/ˈkΛstəm/	
customary	/ˈkΛstəmeri/	
customer	/ˈkΛstəmər/	
customs	/ˈkΛstəmz/	
cut	/kΛt/	
cute	/kjuːt/	
cyberspace	/ˈsaɪbərspeɪs/	
cycle	/ˈsaɪkəl/	
cycling	/ˈsaɪklɪŋ/	
cyclist	/ˈsaɪklɪst/	
cylinder	/ˈsɪlɪndər/	
cynical	/ˈsɪnɪkəl/	
dad	/dæd/	
daddy	/ˈdædi/	
cynicism	/ˈsɪnɪsɪzəm/	
daily	/ˈdeɪli/	
dairy	/ˈderi/	
dam	/dæm/	
damage	/ˈdæmɪdʒ/	
damn	/dæm/	
damp	/dæmp/	
dampen	/ˈdæmpən/	
dance	/dæns/	
danger	/ˈdeɪndʒər/	
dangerous	/ˈdeɪndʒərəs/	
dare	/der/	
daring	/ˈderɪŋ/	
dark	/dɑːrk/	
darkness	/ˈdɑːrknəs/	
darken	/ˈdɑːrkən/	
darling	/ˈdɑːrlɪŋ/	
dart	/dɑːrt/	
dash	/dæʃ/	
data	/ˈdeɪtə/	
datum	/ˈdeɪtəm/	
database	/ˈdeɪtəbeɪs/	
date	/deɪt/	
dating	/ˈdeɪtɪŋ/	
daughter	/ˈdɔːtər/	
dawn	/dɔːn/	
day	/deɪ/	
daylight	/ˈdeɪlaɪt/	
dazzle	/ˈdæzəl/	
dead	/ded/	
deadline	/ˈdedlaɪn/	
deadlock	/ˈdedlɑːk/	
deadly	/ˈdedli/	
deaf	/def/	
deal	/diːl/	
dean	/diːn/	
dear	/dɪr/	
death	/deə/	
debate	/dɪ ˈbeɪt/	
debris	/də ˈbriː/	
debt	/det/	
debut	/deɪ ˈbjuː/	
debtor	/ˈdetər/	
decade	/ˈdekeɪd/	
decay	/dɪ ˈ keɪ/	
deceive	/dɪ ˈsiːv/	
deceit	/dɪ ˈsiːt/	
deception	/dɪ ˈsepʃən/	
deceptive	/dɪ ˈseptɪv/	
december	/dɪ ˈsembər/	
decent	/ˈdiːsənt/	
decide	/dɪ ˈsaɪd/	
decision	/dɪ ˈsɪʒən/	
decisive	/dɪ ˈsaɪsɪv/	
decimal	/ˈdesɪməl/	
deck	/dek/	
declare	/dɪ ˈ kler/	
declaration	/ˌdekləˈ reɪʃən/	
declarative	/dɪ ˈ klærətɪv/	
decline	/dɪ ˈ klaɪn/	
decorate	/ˈdekəreɪt/	
decoration	/ˌdekəˈ reɪʃən/	
decorative	/ˈdekəreɪtɪv/	
decrease	/dɪ ˈ kriːs/ (v.) /ˈdiːkriːs/ (n.)	
decree	/dɪ ˈ kriː/	
dedication	/ˌdedɪ ˈkeɪʃən/	
deductive	/dɪ ˈdʌktɪv/	
deductible	/dɪ ˈdʌktəbəl/	
dedicate	/ˈdedɪkeɪt/	
deducible	/dɪ ˈdjuːsəbəl/	
depth	/depə/	
deduce	/dɪ ˈdjuːs/	
deduction	/dɪ ˈdʌkʃən/	
deduct	/dɪ ˈdʌkt/	
deeply	/ˈdiːpli/	
deed	/diːd/	
deem	/diːm/	
deep	/diːp/	
deer	/dɪr/	
default	/dɪ ˈfɔːlt/	
defective	/dɪ ˈfektɪv/	
defensive	/dɪ ˈfensɪv/	
defendant	/dɪ ˈfendənt/	
defeat	/dɪ ˈfiːt/	
defection	/dɪ ˈfekʃən/	
defect	/ˈdiːfekt/	
defense	/dɪ ˈfens/	
defence	/dɪ ˈfens/	
defend	/dɪ ˈfend/	
defer	/dɪ ˈfɜːr/	
deficient	/dɪ ˈfɪʃənt/	
deficiency	/dɪ ˈfɪʃənsi/	
deficit	/ˈdefɪsɪt/	
define	/dɪ ˈfaɪn/	
definition	/ˌdefɪˈ nɪʃən/	
definite	/ˈdefɪnɪt/	
definitely	/ˈdefɪnɪtli/	
defy	/dɪ ˈfaɪ/	
defiance	/dɪ ˈfaɪəns/	
defiant	/dɪ ˈfaɪənt/	
degenerate	/dɪ ˈdʒenəreɪt/ (v.) /dɪ ˈdʒenərət/ (adj./n.)	
degeneration	/dɪ ˌdʒenəˈ reɪʃən/	
degrade	/dɪ ˈɡreɪd/	
degradation	/ˌdeɡrəˈdeɪʃən/	
degree	/dɪ ˈɡriː/	
delay	/dɪ ˈleɪ/	
delegate	/ˈdelɪɡət/ (n.) /ˈdelɪɡe ɪt/ (v.)	
delegation	/ˌdelɪ ˈɡeɪʃən/	
delete	/dɪ ˈliːt/	
deletion	/dɪ ˈliːʃən/	
deliberate	/dɪ ˈlɪbərət/ (adj.) /dɪ ˈlɪ bəreɪt/ (v.)	
deliberation	/dɪ ˌlɪbə ˈreɪʃən/	
delicacy	/ˈdelɪkəsi/	
delicate	/ˈdelɪkət/	
delicious	/dɪ ˈlɪʃəs/	
delight	/dɪ ˈlaɪt/	
delightful	/dɪ ˈlaɪtfəl/	
deliver	/dɪ ˈlɪvər/	
delivery	/dɪ ˈlɪvəri/	
delude	/dɪ ˈluːd/	
delusion	/dɪ ˈluːʒən/	
demand	/dɪ ˈ mænd/	
demanding	/dɪ ˈ mændɪŋ/	
democracy	/dɪ ˈ mɑːkrəsi/	
democratic	/ ˌdeməˈ krætɪk/	
democrat	/ˈdeməkræt/	
demographic	/ˌdeməˈɡræfɪk/	
demonstrate	/ˈdemənstreɪt/	
demonstration	/ˌdemənˈstreɪʃən/	
demo	/ˈdemoʊ/	
demonstrative	/dɪ ˈ mɑːnstrətɪv/	
denote	/dɪ ˈ noʊt/	
denotation	/ˌdiːnoʊˈteɪʃən/	
denounce	/dɪ ˈ naʊns/	
denunciation	/dɪ ˌ nʌnsiˈeɪʃən/	
dense	/dens/	
dent	/dent/	
density	/ˈdensəti/	
dental	/ˈdentəl/	
dentist	/ˈdentɪst/	
deny	/dɪ ˈ naɪ/	
denial	/dɪ ˈ naɪəl/	
depart	/dɪ ˈ pɑːrt/	
departure	/dɪ ˈ pɑːrtʃər/	
department	/dɪ ˈ pɑːrtmənt/	
depend	/dɪ ˈ pend/	
dependent	/dɪ ˈ pendənt/	
dependence	/dɪ ˈ pendəns/	
dependable	/dɪ ˈ pendəbəl/	
depict	/dɪ ˈ pɪkt/	
depiction	/dɪ ˈ pɪkʃən/	
deplete	/dɪ ˈ pliːt/	
depletion	/dɪ ˈ pliːʃən/	
deplore	/dɪ ˈ plɔːr/	
deploy	/dɪ ˈ plɔɪ/	
deployment	/dɪ ˈ plɔɪmənt/	
deport	/dɪ ˈ pɔːrt/	
deportation	/ˌdiːpɔːr ˈteɪʃən/	
deposit	/dɪ ˈ pɑːzɪt/	
depot	/ˈdiːpoʊ/	
depreciate	/dɪ ˈ priːʃieɪt/	
depreciation	/dɪ ˌ priːʃi ˈeɪʃən/	
depress	/dɪ ˈ pres/	
depression	/dɪ ˈ preʃən/	
deprive	/dɪ ˈ praɪv/	
deprivation	/ˌdeprɪˈveɪʃən/	
deputy	/ˈdepjuti/	
derail	/dɪ ˈ reɪl/	
derailment	/dɪ ˈ reɪlmənt/	
deregulate	/diː ˈ reɡjuleɪt/	
deregulation	/diː ˌ reɡju ˈ leɪʃən/	
derive	/dɪ ˈ raɪv/	
derivative	/dɪ ˈ rɪvətɪv/	
derivation	/ˌderɪˈveɪʃən/	
descend	/dɪ ˈsend/	
descent	/dɪ ˈsent/	
descendant	/dɪ ˈsendənt/	
describe	/dɪ ˈskraɪb/	
description	/dɪ ˈskrɪpʃən/	
descriptive	/dɪ ˈskrɪptɪv/	
desert	/ˈdezərt/	
desertion	/dɪ ˈzɜːrʃən/	
deserve	/dɪ ˈzɜːrv/	
design	/dɪ ˈzaɪn/	
designer	/dɪ ˈzaɪnər/	
designate	/ˈdezɪɡneɪt/	
designation	/ˌdezɪɡˈ neɪʃən/	
desire	/dɪ ˈzaɪər/	
desk	/desk/	
desirable	/dɪ ˈzaɪərəbəl/	
desirability	/dɪ ˌzaɪərə ˈbɪlɪti/	
desirous	/dɪ ˈzaɪərəs/	
desktop	/ˈdesktɑːp/	
desolate	/ˈdesələt/ (adj.) /ˈdes əleɪt/ (v.)	
despair	/dɪ ˈsper/	
desperate	/ˈdespərət/	
despatch	/dɪ ˈspætʃ/	
despise	/dɪ ˈspaɪz/	
despite	/dɪ ˈspaɪt/	
dessert	/dɪ ˈzɜːrt/	
destination	/ˌdestɪˈ neɪʃən/	
destiny	/ˈdestɪni/	
destined	/ˈdestɪnd/	
destroy	/dɪ ˈstrɔɪ/	
destruction	/dɪ ˈstrʌkʃən/	
destructive	/dɪ ˈstrʌktɪv/	
detach	/dɪ ˈtætʃ/	
detached	/dɪ ˈtætʃt/	
detachment	/dɪ ˈtætʃmənt/	
detail	/dɪ ˈteɪl/ (n.) /dɪ ˈteɪl/ or /ˈdiːteɪl/ (v.)	
detailed	/dɪ ˈteɪld/	
detain	/dɪ ˈteɪn/	
detention	/dɪ ˈtenʃən/	
detect	/dɪ ˈtekt/	
detection	/dɪ ˈtekʃən/	
detective	/dɪ ˈtektɪv/	
deter	/dɪ ˈtɜːr/	
deterrent	/dɪ ˈtɜːrənt/	
detergent	/dɪ ˈtɜːrdʒənt/	
deteriorate	/dɪ ˈtɪriəreɪt/	
deterioration	/dɪ ˌtɪriəˈ reɪʃən/	
determine	/dɪ ˈtɜːrmɪn/	
determination	/dɪ ˌtɜːrmɪˈneɪʃən/	
determined	/dɪ ˈtɜːrmɪnd/	
detriment	/ˈdetrɪmənt/	
detrimental	/ ˌdetrɪˈ mentəl/	
devastate	/ˈdevəsteɪt/	
devastating	/ˈdevəsteɪtɪŋ/	
devastation	/ˌdevəˈsteɪʃən/	
develop	/dɪ ˈveləp/	
development	/dɪ ˈveləpmənt/	
developmental	/dɪ ˌveləpˈ mentəl/	
developer	/dɪ ˈveləpər/	
deviate	/ˈdiːvieɪt/	
deviation	/ˌdiːvi ˈeɪʃən/	
device	/dɪ ˈvaɪs/	
devil	/ˈdevəl/	
devise	/dɪ ˈvaɪz/	
devote	/dɪ ˈvoʊt/	
devotion	/dɪ ˈvoʊʃən/	
devour	/dɪ ˈvaʊər/	
dew	/duː/	
diabetes	/ ˌdaɪə ˈbiːtiːz/	
diagnose	/ˌdaɪəɡˈ noʊz/	
diagnosis	/ˌdaɪəɡˈ noʊsɪs/	
diagram	/ˈdaɪəɡræm/	
dial	/ˈdaɪəl/	
dialect	/ˈdaɪəlekt/	
dialog	/ˈdaɪəlɔːɡ/	
dialogue	/ˈdaɪəlɔːɡ/	
diameter	/daɪˈæmɪtər/	
diamond	/ˈdaɪəmənd/	
diary	/ˈdaɪəri/	
dictate	/ˈdɪkteɪt/ (v.) /ˈdɪkteɪt/ (n.)	
dictation	/dɪk ˈteɪʃən/	
dictator	/ˈdɪkteɪtər/	
dictionary	/ˈdɪkʃəneri/	
die	/daɪ/	
dying	/ˈdaɪɪŋ/	
diesel	/ˈdiːzəl/	
diet	/ˈdaɪət/	
dietary	/ˈdaɪəteri/	
differ	/ˈdɪfər/	
difference	/ˈdɪfərəns/	
different	/ˈdɪfərənt/	
differentiate	/ˌdɪfə ˈ renʃieɪt/	
differentiation	/ˌdɪfərenʃi ˈeɪʃən/	
difficult	/ˈdɪfɪkəlt/	
difficulty	/ˈdɪfɪkəlti/	
diffuse	/dɪ ˈfjuːz/ (v.) /dɪ ˈfjuːs/ (adj.)	
diffusion	/dɪ ˈfjuːʒən/	
dig	/dɪɡ/	
digest	/daɪˈdʒest/ (v.) /ˈdaɪd ʒest/ (n.)	
digestion	/daɪˈdʒestʃən/	
digestive	/daɪˈdʒestɪv/	
digit	/ˈdɪdʒɪt/	
digital	/ˈdɪdʒɪtəl/	
dignity	/ˈdɪɡnɪti/	
dignify	/ˈdɪɡnɪfaɪ/	
dilemma	/dɪ ˈlemə/	
diligent	/ˈdɪlɪdʒənt/	
diligence	/ˈdɪlɪdʒəns/	
dilute	/daɪ ˈ luːt/	
dilution	/daɪ ˈ luːʃən/	
dim	/dɪm/	
dime	/daɪm/	
dimension	/daɪˈ menʃən/	
dimensional	/daɪˈ menʃənəl/	
diminish	/dɪ ˈ mɪnɪʃ/	
dine	/daɪn/	
diner	/ˈdaɪnər/	
dinner	/ˈdɪnər/	
dinosaur	/ˈdaɪnəsɔːr/	
dioxide	/daɪˈɑːksaɪd/	
dip	/dɪp/	
diploma	/dɪ ˈ ploʊmə/	
diplomat	/ˈdɪpləmæt/	
diplomatic	/ˌdɪpləˈmætɪk/	
diplomacy	/dɪ ˈ ploʊməsi/	
direct	/dɪ ˈ rekt/	
direction	/dɪ ˈ rekʃən/	
director	/dɪ ˈ rektər/	
directory	/dɪ ˈ rektəri/	
dirt	/dɜːrt/	
dirty	/ˈdɜːrti/	
disable	/dɪsˈeɪbəl/	
disabled	/dɪsˈeɪbəld/	
disability	/ ˌdɪsə ˈbɪlɪti/	
disagree	/ˌdɪsə ˈɡriː/	
disagreement	/ˌdɪsəˈɡriːmənt/	
disappear	/ˌdɪsəˈpɪr/	
disappearance	/ˌdɪsəˈpɪrəns/	
disappoint	/ˌdɪsəˈpɔɪnt/	
disappointment	/ˌdɪsəˈpɔɪntmənt/	
disappointing	/ˌdɪsəˈpɔɪntɪŋ/	
disapprove	/ˌdɪsəˈpruːv/	
disapproval	/ˌdɪsəˈpruːvəl/	
disarm	/dɪsˈɑːrm/	
disarmament	/dɪsˈɑːrməmənt/	
disaster	/dɪ ˈzæstər/	
disastrous	/dɪ ˈzæstrəs/	
discard	/dɪsˈ kɑːrd/	
discern	/dɪ ˈsɜːrn/	
discharge	/dɪsˈtʃɑːrdʒ/	
discipline	/ˈdɪsɪplɪn/	
disciplined	/ˈdɪsɪplɪnd/	
disciplinary	/ˈdɪsɪplɪneri/	
disclose	/dɪsˈ kloʊz/	
disclosure	/dɪsˈ kloʊʒər/	
disco	/ˈdɪskoʊ/	
discord	/ˈdɪskɔːrd/	
discount	/ˈdɪskaʊnt/ (n.) /dɪ s ˈ kaʊnt/ (v.)	
discourage	/dɪsˈ kɜːrɪdʒ/	
discourse	/ˈdɪskɔːrs/	
discover	/dɪ ˈskʌvər/	
discovery	/dɪ ˈskʌvəri/	
discreet	/dɪ ˈskriːt/	
discrepancy	/dɪ ˈskrepənsi/	
discriminate	/dɪ ˈskrɪmɪneɪt/	
discrimination	/dɪ ˌskrɪmɪˈneɪʃən/	
discriminatory	/dɪ ˈskrɪmɪnətɔːri/	
discuss	/dɪ ˈskʌs/	
discussion	/dɪ ˈskʌʃən/	
disease	/dɪ ˈziːz/	
disguise	/dɪsˈɡaɪz/	
disgust	/dɪsˈɡʌst/	
dish	/dɪʃ/	
disgusting	/dɪsˈɡʌstɪŋ/	
disintegrate	/dɪsˈɪntɪɡreɪt/	
disintegration	/dɪsˌɪntɪˈɡreɪʃən/	
disk	/dɪsk/	
disc	/dɪsk/	
dislike	/dɪs ˈ laɪk/	
dismantle	/dɪsˈ mæntəl/	
dismay	/dɪsˈ meɪ/	
dismiss	/dɪsˈ mɪs/	
dismissal	/dɪsˈ mɪsəl/	
disorder	/dɪsˈɔːrdər/	
dispatch	/dɪ ˈspætʃ/	
dispense	/dɪ ˈspens/	
disperse	/dɪ ˈspɜːrs/	
displace	/dɪsˈ pleɪs/	
display	/dɪ ˈspleɪ/	
displacement	/dɪsˈ pleɪsmənt/	
dispose	/dɪ ˈspoʊz/	
disposal	/dɪ ˈspoʊzəl/	
disposition	/ˌdɪspəˈzɪʃən/	
dispute	/dɪ ˈspjuːt/	
disputable	/dɪ ˈspjuːtəbəl/	
disregard	/ˌdɪsrɪ ˈɡɑːrd/	
disrupt	/dɪsˈ rʌpt/	
disruptive	/dɪsˈ rʌptɪv/	
disruption	/dɪsˈ rʌpʃən/	
dissent	/dɪ ˈsent/	
dissertation	/ˌdɪsərˈteɪʃən/	
dissident	/ˈdɪsɪdənt/	
dissolve	/dɪ ˈzɑːlv/	
distant	/ˈdɪstənt/	
distinctive	/dɪ ˈstɪŋktɪv/	
distance	/ˈdɪstəns/	
distinction	/dɪ ˈstɪŋkʃən/	
distil	/dɪ ˈstɪl/	
distill	/dɪ ˈstɪl/	
distinct	/dɪ ˈstɪŋkt/	
distinguish	/dɪ ˈstɪŋɡwɪʃ/	
distinguishable	/dɪ ˈstɪŋɡwɪʃəbəl/	
distort	/dɪ ˈstɔːrt/	
distortion	/dɪ ˈstɔːrʃən/	
distract	/dɪ ˈstrækt/	
distraction	/dɪ ˈstrækʃən/	
distress	/dɪ ˈstres/	
distressful	/dɪ ˈstresfəl/	
distribute	/dɪ ˈstrɪbjuːt/	
distribution	/ˌdɪstrɪ ˈbjuːʃən/	
district	/ˈdɪstrɪkt/	
disturb	/dɪ ˈstɜːrb/	
disturbance	/dɪ ˈstɜːrbəns/	
ditch	/dɪtʃ/	
dive	/daɪv/	
diverse	/daɪ ˈvɜːrs/	
diversify	/daɪ ˈvɜːrsɪfaɪ/	
diversity	/daɪ ˈvɜːrsɪti/	
divert	/daɪ ˈvɜːrt/	
diversion	/daɪˈvɜːrʒən/	
divide	/dɪ ˈvaɪd/	
division	/dɪ ˈvɪʒən/	
divisive	/dɪ ˈvaɪsɪv/	
dividend	/ˈdɪvɪdend/	
divine	/dɪ ˈvaɪn/	
divorce	/dɪ ˈvɔːrs/	
dizzy	/ˈdɪzi/	
do	/duː/	
dock	/dɑːk/	
doctor	/ˈdɑːktər/	
doctorate	/ˈdɑːktərət/	
doctoral	/ˈdɑːktərəl/	
doctrine	/ˈdɑːktrɪn/	
document	/ˈdɑːkjəmənt/	
documentary	/ˌdɑːkju ˈ mentəri/	
dodge	/dɑːdʒ/	
dog	/dɔːɡ/	
dogma	/ˈdɔːɡmə/	
dole	/doʊl/	
doll	/dɑːl/	
dollar	/ˈdɑːlər/	
dolphin	/ˈdɑːlfɪn/	
domain	/doʊˈ meɪn/	
dome	/doʊm/	
domestic	/də ˈ mestɪk/	
dominate	/ˈdɑːmɪneɪt/	
domination	/ˌdɑːmɪˈ neɪʃən/	
dominance	/ˈdɑːmɪnəns/	
dominant	/ˈdɑːmɪnənt/	
donate	/ˈdoʊneɪt/	
donation	/doʊˈ neɪʃən/	
donor	/ˈdoʊnər/	
donkey	/ˈdɑːŋki/	
doom	/duːm/	
door	/dɔːr/	
dormitory	/ˈdɔːrmɪtɔːri/	
dorm	/dɔːrm/	
dose	/doʊs/	
dosage	/ˈdoʊsɪdʒ/	
dot	/dɑːt/	
double	/ˈdΛbəl/	
doubt	/daut/	
dough	/dou/	
doubtful	/ˈdautfəl/	
doubtless	/ˈdautləs/	
dove	/dΛv/ (n.) /douv/ (v. dive )	
down	/daun/	
downgrade	/ˈdaunɡreɪd/	
download	/ˈdaunloud/	
downstairs	/ ˌdaunˈsterz/	
downtown	/ ˌdaunˈtaun/	
downward	/ˈdaunwərd/	
downwards	/ˈdaunwərdz/	
doze	/douz/	
dozen	/ˈdΛzən/	
draft	/dræft/	
drag	/dræɡ/	
dragon	/ˈdræɡən/	
drain	/dreɪn/	
drainage	/ˈdreɪnɪd3/	
drama	/ˈdrɑːmə/	
dramatic	/drəˈ mætɪk/	
dramatically	/drəˈ mætɪkli/	
drastic	/ˈdræstɪk/	
drastically	/ˈdræstɪkli/	
draw	/dr0ː/	
drawing	/ˈdr0ːɪŋ/	
drawback	/ˈdr0ːbæk/	
drawer	/dr0ːr/	
dread	/dred/	
dreadful	/ˈdredfəl/	
dream	/driːm/	
dreamy	/ˈdriːmi/	
dress	/dres/	
dressing	/ˈdresɪŋ/	
drift	/drɪft/	
drill	/drɪl/	
drink	/drɪŋk/	
drip	/drɪp/	
drive	/draɪv/	
driver	/ˈdraɪvər/	
drop	/drɑːp/	
dropout	/ˈdrɑːpaʊt/	
drought	/draʊt/	
drown	/draʊn/	
drug	/drʌɡ/	
drum	/drʌm/	
drunk	/drʌŋk/	
drunken	/ˈdrʌŋkən/	
drunkard	/ˈdrʌŋkərd/	
dry	/draɪ/	
dual	/ˈduːəl/	
dryer	/ˈdraɪər/	
dub	/dʌb/	
dubious	/ˈduːbiəs/	
duck	/dʌk/	
due	/duː/	
duly	/ˈduːli/	
dull	/dʌl/	
dumb	/dʌm/	
dump	/dʌmp/	
duplicate	/ˈduːplɪkət/ (adj./n.) /ˈduːplɪkeɪt/ (v.)	
duplication	/ˌduːplɪˈ keɪʃən/	
durable	/ˈdʊrəbəl/	
durability	/ ˌdʊrə ˈbɪlɪti/	
duration	/du ˈ reɪʃən/	
during	/ˈdʊrɪŋ/	
dusk	/dʌsk/	
dust	/dʌst/	
dusty	/ˈdʌsti/	
duty	/ˈduːti/	
dwarf	/dwɔːrf/	
dwell	/dwel/	
dwelling	/ˈdwelɪŋ/	
dweller	/ˈdwelər/	
dye	/daɪ/	
dynamic	/daɪˈ næmɪk/	
dynamics	/daɪˈ næmɪks/	
dynasty	/ˈdaɪnəsti/	
each	/iːtʃ/	
eager	/ˈiːɡər/	
eagle	/ˈiːɡəl/	
ear	/ɪr/	
early	/ˈ3ːrli/	
earn	/3ːrn/	
earnings	/ˈ3ːrnɪŋz/	
earnest	/ˈ3ːrnɪst/	
earth	/3ːrə/	
earthquake	/ˈ3ːrə kweɪk/	
ease	/iːz/	
east	/iːst/	
eastern	/ˈiːstərn/	
easter	/ˈiːstər/	
easily	/ˈiːzɪli/	
easy	/ˈiːzi/	
easy-going	/ˌiːzi ˈɡouɪŋ/	
eat	/iːt/	
eccentric	/ɪk ˈsentrɪk/	
echo	/ˈekou/	
eclipse	/ɪ ˈ klɪps/	
ecology	/i ˈ kɑːləd3i/	
ecological	/ˌiːkə ˈ lɑːd3ɪkəl/	
economics	/ ˌ iːkəˈ nɑːmɪks/	
economic	/ ˌ iːkəˈ nɑːmɪk/	
economy	/ɪ ˈ kɑːnəmi/	
economical	/ ˌ iːkəˈ nɑːmɪkəl/	
economist	/ɪ ˈ kɑːnəmɪst/	
ecosystem	/ˈiːkousɪstəm/	
edge	/ed3/	
edible	/ˈedəbəl/	
edit	/ˈedɪt/	
editor	/ˈedɪtər/	
edition	/ɪ ˈdɪʃən/	
educator	/ˈed3ukeɪtər/	
editorial	/ ˌedɪ ˈt0ːriəl/	
education	/ˌed3uˈ keɪʃən/	
educational	/ˌed3uˈ keɪʃənəl/	
educate	/ˈed3ukeɪt/	
effective	/ɪ ˈfektɪv/	
effect	/ɪ ˈfekt/	
efficiency	/ɪ ˈfɪʃənsi/	
efficient	/ɪ ˈfɪʃənt/	
effort	/ˈefərt/	
egg	/eɡ/	
eggplant	/ˈeɡplænt/	
ego	/ˈiːɡoʊ/	
eight	/eɪt/	
eighteen	/ ˌeɪ ˈtiːn/	
eighth	/eɪtə/	
eighty	/ˈeɪti/	
either	/ˈaɪðər/ or /ˈiːðər/	
eject	/ɪ ˈdʒekt/	
ejection	/ɪ ˈdʒekʃən/	
elaborate	/ɪ ˈ læbərət/ (adj.) /ɪ ˈlæbəreɪt/ (v.)	
elaboration	/ɪ ˌ læbə ˈ reɪʃən/	
elapse	/ɪ ˈ læps/	
elastic	/ɪ ˈ læstɪk/	
elasticity	/ ˌ iːlæ ˈstɪsəti/	
elbow	/ˈelboʊ/	
elder	/ˈeldər/	
elderly	/ˈeldərli/	
elect	/ɪ ˈ lekt/	
election	/ɪ ˈ lekʃən/	
electoral	/ɪ ˈ lektərəl/	
electorate	/ɪ ˈ lektərət/	
electricity	/ɪ ˌ lek ˈtrɪsəti/	
electric	/ɪ ˈ lektrɪk/	
electrical	/ɪ ˈ lektrɪkəl/	
electron	/ɪ ˈ lektrɑːn/	
electronic	/ɪ ˌ lek ˈtrɑːnɪk/	
elegant	/ˈelɪɡənt/	
elegance	/ˈelɪɡəns/	
element	/ˈelɪmənt/	
elementary	/ ˌelɪ ˈ mentəri/	
elephant	/ˈelɪfənt/	
elevate	/ˈelɪveɪt/	
elevation	/ˌelɪ ˈveɪʃən/	
elevator	/ˈelɪveɪtər/	
eleven	/ɪ ˈ levən/	
eligibility	/ˌelɪdʒə ˈbɪlɪti/	
elicit	/ɪ ˈ lɪsɪt/	
eligible	/ˈelɪdʒəbəl/	
eliminate	/ɪ ˈ lɪmɪneɪt/	
elite	/ɪ ˈ liːt/ or eɪ ˈliːt/	
eloquent	/ˈeləkwənt/	
eloquence	/ˈeləkwəns/	
else	/els/	
elsewhere	/ ˌelsˈwer/	
email	/ˈiːmeɪl/	
emancipate	/ɪ ˈ mænsɪpeɪt/	
emancipation	/ɪ ˌ mænsɪˈ peɪʃən/	
embargo	/ɪmˈbɑːrɡoʊ/	
embark	/ɪmˈbɑːrk/	
embarrass	/ɪmˈbærəs/	
embarrassment	/ɪmˈbærəsmənt/	
embassy	/ˈembəsi/	
embed	/ɪmˈbed/	
embody	/ɪm ˈbɑːdi/	
embrace	/ɪmˈbreɪs/	
embodiment	/ɪmˈbɑːdɪmənt/	
embroidery	/ɪmˈbrɔɪdəri/	
emerge	/ɪ ˈ mɜːrdʒ/	
emergence	/ɪ ˈ mɜːrdʒəns/	
emergency	/ɪ ˈ mɜːrdʒənsi/	
emigrate	/ˈemɪɡreɪt/	
emigration	/ˌemɪˈɡreɪʃən/	
emigrant	/ˈemɪɡrənt/	
eminent	/ˈemɪnənt/	
eminence	/ˈemɪnəns/	
emit	/i ˈ mɪt/	
emission	/i ˈ mɪʃən/	
emotion	/ɪ ˈ moʊʃən/	
emotional	/ɪ ˈ moʊʃənəl/	
emperor	/ˈempərər/	
empress	/ˈemprəs/	
emphasis	/ˈemfəsɪs/	
emphasize	/ˈemfəsaɪz/	
emphasise	/ˈemfəsaɪz/	
emphatic	/ɪmˈfætɪk/	
empire	/ˈempaɪər/	
empirical	/ɪm ˈ pɪrɪkəl/	
employ	/ɪm ˈ plɔɪ/	
employment	/ɪmˈ plɔɪmənt/	
employer	/ɪm ˈ plɔɪər/	
employee	/ɪm ˈ plɔɪiː/	
empty	/ˈempti/	
emptiness	/ˈemptinəs/	
emulate	/ˈemjuleɪt/	
enable	/ɪ ˈ neɪbəl/	
emulation	/ˌemju ˈleɪʃən/	
enact	/ɪ ˈ nækt/	
enactment	/ɪ ˈ næktmənt/	
enclose	/ɪnˈ kloʊz/	
enclosure	/ɪnˈ kloʊʒər/	
encounter	/ɪnˈ kaʊntər/	
encourage	/ɪn ˈ kɜːrɪdʒ/	
encouragement	/ɪnˈ kɜːrɪdʒmənt/	
encouraging	/ɪnˈ kɜːrɪdʒɪŋ/	
encyclopedia	/ɪn ˌsaɪkləˈ piːdiə/	
encyclopaedia	/ɪn ˌsaɪkləˈ piːdiə/	
end	/end/	
ending	/ˈendɪŋ/	
endless	/ˈendləs/	
endanger	/ɪnˈdeɪndʒər/	
endeavor	/ɪnˈdevər/	
endeavour	/ɪnˈdevər/	
endorse	/ɪn ˈdɔːrs/	
endorsement	/ɪnˈdɔːrsmənt/	
endow	/ɪnˈdaʊ/	
endowment	/ɪnˈdaʊmənt/	
endure	/ɪnˈdʊr/	
endurance	/ɪnˈdʊrəns/	
enemy	/ˈenəmi/	
energy	/ˈenərdʒi/	
energetic	/ˌenərˈdʒetɪk/	
energetically	/ˌenərˈdʒetɪkli/	
enforce	/ɪn ˈfɔːrs/	
enforcement	/ɪnˈfɔːrsmənt/	
engage	/ɪnˈɡeɪdʒ/	
engagement	/ɪnˈɡeɪdʒmənt/	
engine	/ˈendʒɪn/	
engineer	/ˌendʒɪˈnɪr/	
engineering	/ˌendʒɪˈnɪrɪŋ/	
enhance	/ɪnˈ hæns/	
enhancement	/ɪnˈ hænsmənt/	
enjoy	/ɪnˈdʒɔɪ/	
enjoyable	/ɪnˈdʒɔɪəbəl/	
enjoyment	/ɪnˈdʒɔɪmənt/	
enlarge	/ɪn ˈlɑːrdʒ/	
enlighten	/ɪn ˈlaɪtən/	
enlightenment	/ɪnˈlaɪtənmənt/	
enlightening	/ɪn ˈlaɪtənɪŋ/	
enlist	/ɪn ˈlɪst/	
enormous	/ɪ ˈ nɔːrməs/	
enough	/ɪ ˈ nʌf/	
enquire	/ɪnˈ kwaɪər/	
enquiry	/ɪnˈ kwaɪəri/	
enrich	/ɪn ˈ rɪtʃ/	
enrol	/ɪn ˈ roʊl/	
enroll	/ɪn ˈ roʊl/	
enrolment	/ɪnˈ roʊlmənt/	
enrollment	/ɪnˈ roʊlmənt/	
ensue	/ɪn ˈsuː/	
ensure	/ɪn ˈʃʊr/	
entail	/ɪn ˈteɪl/	
enter	/ˈentər/	
entrance	/ˈentrəns/	
entry	/ˈentri/	
enterprise	/ˈentərpraɪz/	
enterprising	/ˈentərpraɪzɪŋ/	
entertain	/ ˌentərˈteɪn/	
entertainment	/ ˌentərˈteɪnmənt/	
entertaining	/ˌentərˈteɪnɪŋ/	
enthusiasm	/ɪnˈəuːziæzəm/	
enthusiastic	/ɪnˌəuːziˈæstɪk/	
enthusiastically	/ɪn ˌəuːziˈæstɪkli/	
enthusiast	/ɪnˈəuːziæst/	
entire	/ɪn ˈtaɪər/	
entirety	/ɪn ˈtaɪərəti/	
entitle	/ɪn ˈtaɪtəl/	
entity	/ˈentəti/	
entrepreneur	/ˌɑːntrəprə ˈ nɜːr/	
entrepreneurial	/ˌɑːntrəprə ˈ nɜːriəl/	
entrust	/ɪn ˈtrʌst/	
envelop	/ɪnˈveləp/	
envelope	/ˈenvəloʊp/	
environment	/ɪnˈvaɪrənmənt/	
environmental	/ɪnˌvaɪrənˈ mentəl/	
environmentalist	/ɪnˌvaɪrənˈ mentəlɪst/	
envisage	/ɪnˈvɪzɪdʒ/	
envoy	/ˈenvɔɪ/	
envy	/ˈenvi/	
envious	/ˈenviəs/	
epic	/ˈepɪk/	
epidemic	/ˌepɪˈdemɪk/	
episode	/ˈepɪsoʊd/	
epoch	/ˈepək/ or /ˈiːpɑːk/	
equal	/ˈiːkwəl/	
equally	/ˈiːkwəli/	
equality	/i ˈ kwɑːləti/	
equate	/ɪ ˈ kweɪt/	
equation	/ɪ ˈ kweɪʒən/	
equator	/ɪ ˈ kweɪtər/	
equip	/ɪ ˈ kwɪp/	
equipment	/ɪ ˈ kwɪpmənt/	
equity	/ˈekwɪti/	
equitable	/ˈekwɪtəbəl/	
equivalent	/ɪ ˈ kwɪvələnt/	
equivalence	/ɪ ˈ kwɪvələns/	
era	/ˈɪrə/ or /ˈerə/	
eradicate	/ɪ ˈ rædɪkeɪt/	
eradication	/ɪ ˌ rædɪ ˈ keɪʃən/	
erase	/ɪ ˈ reɪs/	
eraser	/ɪ ˈ reɪsər/	
erect	/ɪ ˈ rekt/	
erection	/ɪ ˈ rekʃən/	
erode	/ɪ ˈ roʊd/	
erosion	/ɪ ˈ roʊʒən/	
erosive	/ɪ ˈ roʊsɪv/	
err	/ɜːr/ or er/	
error	/ˈerər/	
erroneous	/ɪ ˈ roʊniəs/	
errand	/ˈerənd/	
erupt	/ɪ ˈ rʌpt/	
eruption	/ɪ ˈ rʌpʃən/	
escalate	/ˈeskəleɪt/	
escalation	/ˌeskəˈleɪʃən/	
escalator	/ˈeskəleɪtər/	
escape	/ɪ ˈskeɪp/	
escort	/ˈeskɔːrt/ (n.) /ɪ ˈskɔːrt/ (v.)	
especially	/ɪ ˈspeʃəli/	
essay	/ˈeseɪ/	
essayist	/ˈeseɪɪst/	
essence	/ˈesəns/	
essential	/ɪ ˈsenʃəl/	
establish	/ɪ ˈstæblɪʃ/	
establishment	/ɪ ˈstæblɪʃmənt/	
estate	/ɪ ˈsteɪt/	
esteem	/ɪ ˈstiːm/	
esthetic	/esˈəetɪk/	
esthetics	/esˈəetɪks/	
estimate	/ˈestɪmeɪt/ (v.) /ˈestɪ mət/ (n.)	
estimation	/ˌestɪˈmeɪʃən/	
eternal	/ɪ ˈt3ːrnəl/	
eternity	/ɪ ˈt3ːrnəti/	
ethic	/ˈeəɪk/	
ethics	/ˈeəɪks/	
ethnic	/ˈeənɪk/	
etiquette	/ˈetɪket/ or /ˈetɪkət/	
euro	/ˈjurou/	
evacuate	/ɪ ˈvækjueɪt/	
evacuation	/ɪ ˌvækju ˈeɪʃən/	
evade	/ɪ ˈveɪd/	
evasive	/ɪ ˈveɪsɪv/	
evasion	/ɪ ˈveɪ3ən/	
evaluate	/ɪ ˈvæljueɪt/	
evaluation	/ɪ ˌvælju ˈeɪʃən/	
evaporate	/ɪ ˈvæpəreɪt/	
evaporation	/ɪ ˌvæpəˈ reɪʃən/	
eve	/iːv/	
even	/ˈiːvən/	
evenly	/ˈiːvənli/	
evening	/ˈiːvnɪŋ/	
event	/ɪ ˈvent/	
eventful	/ɪ ˈventfəl/	
eventually	/ɪ ˈventʃuəli/	
eventual	/ɪ ˈventʃuəl/	
eventuality	/ɪ ˌventʃu ˈæləti/	
ever	/ˈevər/	
evidence	/ˈevɪdəns/	
every	/ˈevri/	
everybody	/ˈevribɑːdi/	
everyday	/ˈevrideɪ/	
everyone	/ˈevriwʌn/	
everything	/ˈevriəɪŋ/	
everywhere	/ˈevriwer/	
evident	/ˈevɪdənt/	
evil	/ˈiːvəl/	
evolution	/ˌevəˈ luːʃən/	
evolutionary	/ˌevəˈ luːʃəneri/	
evoke	/ɪ ˈvoʊk/	
evolve	/ɪ ˈvɑːlv/	
exact	/ɪɡˈzækt/	
exaggerate	/ɪɡˈzædʒəreɪt/	
exaggeration	/ɪɡˌzædʒəˈ reɪʃən/	
examine	/ɪɡˈzæmɪn/	
exam	/ɪɡˈzæm/	
examination	/ɪɡˌzæmɪˈ neɪʃən/	
examiner	/ɪɡˈzæmɪnər/	
examinee	/ɪɡˌzæmɪˈ niː/	
example	/ɪɡˈzæmpəl/	
exemplary	/ɪɡ ˈzempləri/	
exemplify	/ɪɡˈzemplɪfaɪ/	
exceed	/ɪk ˈsiːd/	
exceedingly	/ɪk ˈsiːdɪŋli/	
excel	/ɪk ˈsel/	
excellence	/ˈeksələns/	
excellent	/ˈeksələnt/	
except	/ɪk ˈsept/	
exception	/ɪkˈsepʃən/	
exceptional	/ɪk ˈsepʃənəl/	
excerpt	/ˈeksɜːrpt/ (n.) /ɪk ˈsɜ ːrpt/ (v.)	
excess	/ɪk ˈses/ (n.) /ˈekses/ (adj.)	
excessive	/ɪk ˈsesɪv/	
exchange	/ɪksˈtʃeɪndʒ/	
excite	/ɪk ˈsaɪt/	
exciting	/ɪk ˈsaɪtɪŋ/	
excitement	/ɪkˈsaɪtmənt/	
exclaim	/ɪk ˈskleɪm/	
exclamation	/ˌekskləˈ meɪʃən/	
exclamatory	/ɪk ˈsklæmətɔːri/	
exclude	/ɪk ˈskluːd/	
exclusion	/ɪk ˈskluːʒən/	
exclusive	/ɪk ˈskluːsɪv/	
excursion	/ɪk ˈskɜːrʒən/	
excuse	/ɪk ˈskjuːz/ (v.) /ɪ k ˈskjuːs/ (n.)	
execute	/ˈeksɪkjuːt/	
execution	/ˌeksɪ ˈ kjuːʃən/	
executive	/ɪɡ ˈzekjətɪv/	
exempt	/ɪɡˈzempt/	
exercise	/ˈeksərsaɪz/	
exemption	/ɪɡˈzempʃən/	
exert	/ɪɡ ˈzɜːrt/	
exertion	/ɪɡ ˈzɜːrʃən/	
exhaust	/ɪɡ ˈzɔːst/	
exhaustion	/ɪɡ ˈzɔːstʃən/	
exhaustive	/ɪɡ ˈzɔːstɪv/	
exhibit	/ɪɡ ˈzɪbɪt/	
exhibition	/ˌeksɪˈbɪʃən/	
exile	/ˈeksaɪl/ or /ˈeɡzaɪl/	
exist	/ɪɡ ˈzɪst/	
exit	/ˈeksɪt/ or /ˈeɡzɪt/	
existence	/ɪɡˈzɪstəns/	
existent	/ɪɡ ˈzɪstənt/	
existing	/ɪɡ ˈzɪstɪŋ/	
exotic	/ɪɡ ˈzɑːtɪk/	
expand	/ɪkˈspænd/	
expansion	/ɪkˈspænʃən/	
expansive	/ɪkˈspænsɪv/	
expect	/ɪk ˈspekt/	
expectation	/ˌekspek ˈteɪʃən/	
expectancy	/ɪk ˈspektənsi/	
expedition	/ˌekspəˈdɪʃən/	
expel	/ɪk ˈspel/	
expend	/ɪkˈspend/	
expenditure	/ɪk ˈspendɪtʃər/	
expense	/ɪkˈspens/	
expensive	/ɪkˈspensɪv/	
experience	/ɪk ˈspɪriəns/	
experienced	/ɪk ˈspɪriənst/	
experiment	/ɪkˈsperɪmənt/	
experimental	/ɪk ˌsperɪˈ mentəl/	
expert	/ˈekspɜːrt/	
expertise	/ˌekspɜːr ˈtiːz/	
expire	/ɪk ˈspaɪər/	
expiration	/ˌekspɪˈ reɪʃən/	
explain	/ɪk ˈspleɪn/	
explanation	/ˌekspləˈneɪʃən/	
explanatory	/ɪk ˈsplænətɔːri/	
explicit	/ɪk ˈsplɪsɪt/	
explode	/ɪk ˈsploʊd/	
explosion	/ɪkˈsploʊʒən/	
explosive	/ɪk ˈsploʊsɪv/	
exploit	/ɪk ˈsplɔɪt/ (v.) /ˈekspl ɔɪt/ (n.)	
exploitation	/ˌeksplɔɪˈteɪʃən/	
explore	/ɪk ˈsplɔːr/	
exploration	/ˌekspləˈreɪʃən/	
exponent	/ɪkˈspoʊnənt/ or/ˈekspoʊnənt/	
export	/ɪk ˈspɔːrt/ (v.) /ˈekspɔ ːrt/ (n.)	
exportation	/ˌekspɔːrˈteɪʃən/	
expose	/ɪkˈspoʊz/	
exposure	/ɪkˈspoʊʒər/	
exposition	/ˌekspəˈzɪʃən/	
express	/ɪk ˈspres/	
expression	/ɪk ˈspreʃən/	
expressive	/ɪk ˈspresɪv/	
expressway	/ɪkˈspresweɪ/	
exquisite	/ɪk ˈskwɪzɪt/ or/ˈekskwɪzɪt/	
extend	/ɪk ˈstend/	
extension	/ɪk ˈstenʃən/	
extensive	/ɪk ˈstensɪv/	
extended	/ɪk ˈstendɪd/	
extent	/ɪk ˈstent/	
extinction	/ɪk ˈstɪŋkʃən/	
exterior	/ɪk ˈstɪriər/	
external	/ɪk ˈstɜːrnəl/	
extinct	/ɪk ˈstɪŋkt/	
extinguish	/ɪk ˈstɪŋɡwɪʃ/	
extra	/ˈekstrə/	
extract	/ɪk ˈstrækt/ (v.)/ˈekstrækt/ (n.)	
extraction	/ɪkˈstrækʃən/	
extraordinary	/ɪk ˈstrɔːrdəneri/	
extravagant	/ɪkˈstrævəɡənt/	
extravagance	/ɪkˈstrævəɡəns/	
extreme	/ɪk ˈstriːm/	
extremity	/ɪk ˈstreməti/	
eye	/aɪ/	
eyebrow	/ˈaɪbraʊ/	
eyesight	/ˈaɪsaɪt/	
fable	/ˈfeɪbəl/	
fabric	/ˈfæbrɪk/	
fabricate	/ˈfæbrɪkeɪt/	
fabrication	/ˌfæbrɪˈ keɪʃən/	
fabulous	/ˈfæbjələs/	
face	/feɪs/	
facial	/ˈfeɪʃəl/	
facet	/ˈfæsɪt/	
facility	/fə ˈsɪləti/	
facilitate	/fə ˈsɪlɪteɪt/	
facilitation	/fə ˌsɪlɪ ˈteɪʃən/	
fact	/fækt/	
factual	/ˈfæktʃuəl/	
faction	/ˈfækʃən/	
failure	/ˈfeɪljər/	
factor	/ˈfæktər/	
factory	/ˈfæktəri/	
faculty	/ˈfækəlti/	
fade	/feɪd/	
fail	/feɪl/	
faint	/feɪnt/	
fair	/fer/	
fairy	/ˈferi/	
faith	/feɪə/	
fake	/feɪk/	
fall	/fɔːl/	
false	/fɔːls/	
fame	/feɪm/	
familiar	/fə ˈ mɪliər/	
family	/ˈfæməli/	
famine	/ˈfæmɪn/	
fan	/fæn/	
fancy	/ˈfænsi/	
fantasy	/ˈfæntəsi/	
far	/fɑːr/	
fantastic	/fænˈtæstɪk/	
fare	/fer/	
farewell	/ ˌferˈwel/	
farm	/fɑːrm/	
farmer	/ˈfɑːrmər/	
farming	/ˈfɑːrmɪŋ/	
farther	/ˈfɑːrðər/	
fascinate	/ˈfæsɪneɪt/	
fascinating	/ˈfæsɪneɪtɪŋ/	
fascination	/ˌfæsɪˈ neɪʃən/	
fascist	/ˈfæʃɪst/	
fascism	/ˈfæʃɪzəm/	
fashion	/ˈfæʃən/	
fast	/fæst/	
fashionable	/ˈfæʃənəbəl/	
fasten	/ˈfæsən/	
fat	/fæt/	
fatal	/ˈfeɪtəl/	
fatality	/fə ˈtæləti/	
fate	/feɪt/	
father	/ˈfɑːðər/	
fatherly	/ˈfɑːðərli/	
fatigue	/fə ˈtiːɡ/	
fault	/fɔːlt/	
faulty	/ˈfɔːlti/	
favor	/ˈfeɪvər/	
favour	/ˈfeɪvər/	
fax	/fæks/	
favorable	/ˈfeɪvərəbəl/	
favourable	/ˈfeɪvərəbəl/	
favorite	/ˈfeɪvərɪt/	
favourite	/ˈfeɪvərɪt/	
fear	/fɪr/	
fearful	/ˈfɪrfəl/	
feasible	/ˈfiːzəbəl/	
feasibility	/ ˌfiːzə ˈbɪlɪti/	
feast	/fiːst/	
feat	/fiːt/	
feather	/ˈfeðər/	
feature	/ˈfiːtʃər/	
february	/ˈfebrueri/	
federal	/ˈfedərəl/	
federation	/ˌfedə ˈ reɪʃən/	
fee	/fiː/	
feeble	/ˈfiːbəl/	
feed	/fiːd/	
feedback	/ˈfiːdbæk/	
feel	/fiːl/	
feeling	/ˈfiːlɪŋ/	
fellow	/ˈfeloʊ/	
fellowship	/ˈfeloʊʃɪp/	
female	/ˈfiːmeɪl/	
feminine	/ˈfemənɪn/	
feminism	/ˈfemənɪzəm/	
feminist	/ˈfemənɪst/	
fence	/fens/	
ferry	/ˈferi/	
fertile	/ˈfɜːrtəl/	
fertility	/fər ˈtɪləti/	
fertilizer	/ˈfɜːrtəlaɪzər/	
fertiliser	/ˈfɜːrtəlaɪzər/	
festival	/ˈfestɪvəl/	
fetch	/fetʃ/	
fever	/ˈfiːvər/	
feverish	/ˈfiːvərɪʃ/	
few	/fjuː/	
fiber	/ˈfaɪbər/	
fibre	/ˈfaɪbər/	
fiction	/ˈfɪkʃən/	
fictional	/ˈfɪkʃənəl/	
field	/fiːld/	
fierce	/fɪrs/	
fifteen	/ ˌfɪf ˈtiːn/	
fifth	/fɪfə/	
fifty	/ˈfɪfti/	
fight	/faɪt/	
figure	/ˈfɪɡjər/	
file	/faɪl/	
figurative	/ˈfɪɡjərətɪv/	
fill	/fɪl/	
filling	/ˈfɪlɪŋ/	
film	/fɪlm/	
filter	/ˈfɪltər/	
final	/ˈfaɪnəl/	
finally	/ˈfaɪnəli/	
finalize	/ˈfaɪnəlaɪz/	
finalise	/ˈfaɪnəlaɪz/	
finance	/ˈfaɪnæns/ or /fɪ	
financial	/ˈfaɪ ˈ næ/nʃəl/ or /fɪ ˈnænʃəl/	
find	/faɪnd/	
finding	/ˈfaɪndɪŋ/	
fine	/faɪn/	
finger	/ˈfɪŋɡər/	
fingerprint	/ˈfɪŋɡərprɪnt/	
finish	/ˈfɪnɪʃ/	
finite	/ˈfaɪnaɪt/	
fire	/ˈfaɪər/	
fireman	/ˈfaɪərmən/	
fireplace	/ˈfaɪərpleɪs/	
fireworks	/ˈfaɪərwɜːrks/	
firm	/fɜːrm/	
first	/fɜːrst/	
fiscal	/ˈfɪskəl/	
fish	/fɪʃ/	
fishing	/ˈfɪʃɪŋ/	
fisherman	/ˈfɪʃərmən/	
fist	/fɪst/	
fit	/fɪt/	
five	/faɪv/	
fix	/fɪks/	
fixed	/fɪkst/	
fixture	/ˈfɪkstʃər/	
fixation	/fɪk ˈseɪʃən/	
flag	/flæɡ/	
flame	/fleɪm/	
flank	/flæŋk/	
flap	/flæp/	
flare	/fler/	
flash	/flæʃ/	
flat	/flæt/	
flatter	/ˈflætər/	
flattery	/ˈflætəri/	
flavor	/ˈfleɪvər/	
flavour	/ˈfleɪvər/	
flaw	/flɔː/	
flawless	/ˈflɔːləs/	
flee	/fliː/	
fleet	/fliːt/	
flesh	/fleʃ/	
flexible	/ˈfleksəbəl/	
flexibility	/ ˌfleksə ˈbɪlɪti/	
fling	/flɪŋ/	
flip	/flɪp/	
flirt	/flɜːrt/	
flirtation	/flɜːr ˈteɪʃən/	
float	/floʊt/	
flock	/flɑːk/	
flood	/flʌd/	
floor	/flɔːr/	
flour	/flaʊər/	
flourish	/ˈflɜːrɪʃ/	
flow	/floʊ/	
flower	/ˈflaʊər/	
fluctuate	/ˈflʌktʃueɪt/	
fluctuation	/ˌflʌktʃu ˈeɪʃən/	
fluent	/ˈfluːənt/	
fluency	/ˈfluːənsi/	
fluid	/ˈfluːɪd/	
flush	/flʌʃ/	
flutter	/ˈflʌtər/	
fly	/flaɪ/	
foam	/foʊm/	
flight	/flaɪt/	
focus	/ˈfoʊkəs/	
foe	/foʊ/	
fog	/fɑːɡ/	
foggy	/ˈfɑːɡi/	
foil	/fɔɪl/	
fold	/foʊld/	
folk	/foʊk/	
folklore	/ˈfoʊklɔːr/	
follow	/ˈfɑːloʊ/	
following	/ˈfɑːloʊɪŋ/	
fond	/fɑːnd/	
food	/fuːd/	
fool	/fuːl/	
foot	/fʊt/	
football	/ˈfʊtbɔːl/	
footprint	/ˈfʊtprɪnt/	
for	/fɔːr/	
forbid	/fərˈbɪd/	
force	/fɔːrs/	
forceful	/ˈfɔːrsfəl/	
forecast	/ˈfɔːrkæst/	
forehead	/ˈfɔːrhed/ or /ˈfɔːrɪd/	
foreign	/ˈfɔːrən/	
foreigner	/ˈfɔːrənər/	
foremost	/ˈfɔːrmoʊst/	
foresee	/fɔːr ˈsiː/	
foreseeable	/fɔːr ˈsiːəbəl/	
foresight	/ˈfɔːrsaɪt/	
forest	/ˈfɔːrɪst/	
forestry	/ˈfɔːrɪstri/	
foretell	/fɔːr ˈtel/	
forever	/fɔːrˈevər/	
forfeit	/ˈfɔːrfɪt/	
forge	/fɔːrdʒ/	
forgery	/ˈfɔːrdʒəri/	
forget	/fərˈɡet/	
forgetful	/fərˈɡetfəl/	
forgettable	/fərˈɡetəbəl/	
forgive	/fərˈɡɪv/	
forgiving	/fərˈɡɪvɪŋ/	
fork	/fɔːrk/	
form	/fɔːrm/	
formation	/fɔːrˈ meɪʃən/	
formal	/ˈfɔːrməl/	
formality	/fɔːrˈ mæləti/	
format	/ˈfɔːrmæt/	
former	/ˈfɔːrmər/	
formidable	/ˈfɔːrmɪdəbəl/ or /fə r ˈ mɪdəbəl/	
formula	/ˈfɔːrmjələ/	
formulate	/ˈfɔːrmjuleɪt/	
formulation	/ˌfɔːrmju ˈleɪʃən/	
fort	/fɔːrt/	
forth	/fɔːrə/	
forthcoming	/ˌfɔːrəˈkʌmɪŋ/	
fortify	/ˈfɔːrtɪfaɪ/	
fortification	/ˌfɔːrtɪfɪ ˈkeɪʃən/	
fortnight	/ˈfɔːrtnaɪt/	
fortune	/ˈfɔːrtʃən/	
fortunate	/ˈfɔːrtʃənət/	
forty	/ˈfɔːrti/	
forum	/ˈfɔːrəm/	
forward	/ˈfɔːrwərd/	
fossil	/ˈfɑːsəl/	
foster	/ˈfɔːstər/	
foul	/faʊl/	
found	/faʊnd/	
founding	/ˈfaʊndɪŋ/	
founder	/ˈfaʊndər/	
foundation	/faʊnˈdeɪʃən/	
fountain	/ˈfaʊntən/	
four	/fɔːr/	
fourteen	/ ˌfɔːr ˈtiːn/	
fox	/fɑːks/	
fragility	/frə ˈdʒɪləti/	
fragmentary	/ˈfræɡmənteri/	
fraction	/ˈfrækʃən/	
fragmentation	/ˌfræɡmenˈteɪʃən/	
fracture	/ˈfræktʃər/	
fragile	/ˈfrædʒəl/ or /ˈfrædʒa	
fragment	/ˈfræɡmənt/	
fragrant	/ˈfreɪɡrənt/	
fragrance	/ˈfreɪɡrəns/	
frame	/freɪm/	
framework	/ˈfreɪmwɜːrk/	
franchise	/ˈfræntʃaɪz/	
frank	/fræŋk/	
frantically	/ˈfræntɪkli/	
fraud	/frɔːd/	
fraudulent	/ˈfrɔːdʒələnt/	
free	/friː/	
freedom	/ˈfriːdəm/	
freeway	/ˈfriːweɪ/	
freeze	/friːz/	
freight	/freɪt/	
frequent	/ˈfriːkwənt/ (adj.) /frɪ ˈkwent/ (v.)	
frequency	/ˈfriːkwənsi/	
fresh	/freʃ/	
freshman	/ˈfreʃmən/	
friction	/ˈfrɪkʃən/	
friday	/ˈfraɪdeɪ/	
friend	/frend/	
friendly	/ˈfrendli/	
friendship	/ˈfrendʃɪp/	
fright	/fraɪt/	
frighten	/ˈfraɪtən/	
fringe	/frɪndʒ/	
frog	/frɑːɡ/	
from	/frʌm/	
front	/frʌnt/	
frontier	/frʌn ˈtɪr/	
frost	/frɔːst/	
frosty	/ˈfrɔːsti/	
frown	/fraʊn/	
fruit	/fruːt/	
fruitful	/ˈfruːtfəl/	
frustrate	/ˈfrʌstreɪt/	
fry	/fraɪ/	
frustration	/frʌ ˈstreɪʃən/	
frustrating	/ˈfrʌstreɪtɪŋ/	
fuck	/fʌk/	
fuel	/ˈfjuːəl/	
fulfil	/fʊl ˈfɪl/	
fulfill	/fʊl ˈfɪl/	
full	/fʊl/	
fulfilment	/fʊlˈfɪlmənt/	
fulfillment	/fʊlˈfɪlmənt/	
fun	/fʌn/	
funny	/ˈfʌni/	
function	/ˈfΛŋkʃən/	
functional	/ˈfΛŋkʃənəl/	
fund	/fΛnd/	
funding	/ˈfΛndɪŋ/	
fundamental	/ ˌfΛndə ˈmentəl/	
funeral	/ˈfjuːnərəl/	
fur	/f3ːr/	
furnace	/ˈf3ːrnɪs/	
furnish	/ˈf3ːrnɪʃ/	
furniture	/ˈf3ːrnɪtʃər/	
further	/ˈf3ːrŎər/	
furthermore	/ ˌf3ːrŎərˈm0ːr/	
fury	/ˈfjuri/	
furious	/ˈfjuriəs/	
fuse	/fjuːz/	
fusion	/ˈfjuː3ən/	
fuss	/fΛs/	
futile	/ˈfjuːtəl/	
futility	/fjuː ˈtɪləti/	
future	/ˈfjuːtʃər/	
gadget	/ˈɡæd3ɪt/	
gadgetry	/ˈɡæd3ɪtri/	
gain	/ɡeɪn/	
galaxy	/ˈɡæləksi/	
gallery	/ˈɡæləri/	
gallon	/ˈɡælən/	
gamble	/ˈɡæmbəl/	
game	/ɡeɪm/	
gang	/ɡæŋ/	
gaol	/d3eɪl/	
gap	/ɡæp/	
garage	/ɡəˈ rɑː3/ or /ˈɡærɑːd3	
garbage	/ˈɡɑːrbɪd3/	
garden	/ˈɡɑːrdən/	
gangster	/ˈɡæŋstər/	
gardener	/ˈɡɑːrdənər/	
gardening	/ˈɡɑːrdənɪŋ/	
garlic	/ˈɡɑːrlɪk/	
garment	/ˈɡɑːrmənt/	
gas	/ɡæs/	
gasoline	/ˌɡæsəˈliːn/	
petrol	/ˈpetrəl/	
gasp	/ɡæsp/	
gate	/ɡeɪt/	
gather	/ˈɡæŎər/	
gathering	/ˈɡæŎərɪŋ/	
gauge	/ɡeɪd3/	
gay	/ɡeɪ/	
gaze	/ɡeɪz/	
gear	/ɡɪr/	
gender	/ˈd3endər/	
gene	/d3iːn/	
general	/ˈd3enərəl/	
generate	/ˈd3enəreɪt/	
generation	/ˌd3enəˈreɪʃən/	
generous	/ˈd3enərəs/	
genetic	/d3əˈ netɪk/	
genetically	/d3əˈ netɪkli/	
generally	/ˈd3enərəli/	
generalize	/ˈd3enərəlaɪz/	
generalise	/ˈd3enərəlaɪz/	
generator	/ˈd3enəreɪtər/	
generosity	/ˌd3enəˈrɑːsəti/	
genius	/ˈd3iːniəs/	
genre	/ˈ3ɑːnrə/ or /ˈd3ɑːnrə/	
gentle	/ˈd3entəl/	
gentleman	/ˈd3entəlmən/	
genuine	/ˈd3enjuɪn/	
geography	/d3i ˈɑːɡrəfi/	
geographic	/ˌd3iːəˈɡræfɪk/	
geographically	/ˌd3iːə ˈɡræfɪkli/	
geology	/d3iˈɑːləd3i/	
geological	/ˌd3iːə ˈlɑːd3ɪkəl/	
geologically	/ˌd3iːə ˈlɑːd3ɪkli/	
geometry	/d3iˈɑːmətri/	
geometric	/ˌd3iːəˈ metrɪk/	
geometrically	/ˌd3iːə ˈ metrɪkli/	
germ	/d33ːrm/	
gesture	/ˈd3estʃər/	
get	/ɡet/	
ghost	/ɡoust/	
giant	/ˈd3aɪənt/	
gigantic	/d3aɪˈɡæntɪk/	
gift	/ɡɪft/	
gifted	/ˈɡɪftɪd/	
giggle	/ˈɡɪɡəl/	
girl	/ɡɜːrl/	
give	/ɡɪv/	
given	/ˈɡɪvən/	
glacier	/ˈɡleɪʃər/	
glad	/ɡlæd/	
glamor	/ˈɡlæmər/	
glamour	/ˈɡlæmər/	
glamorous	/ˈɡlæmərəs/	
glance	/ɡlæns/	
gland	/ɡlænd/	
glare	/ɡler/	
glass	/ɡlæs/	
gleam	/ɡliːm/	
glide	/ɡlaɪd/	
glider	/ˈɡlaɪdər/	
glimpse	/ɡlɪmps/	
glitter	/ˈɡlɪtər/	
globe	/ɡloʊb/	
global	/ˈɡloʊbəl/	
globalize	/ˈɡloʊbəlaɪz/	
globalise	/ˈɡloʊbəlaɪz/	
gloom	/ɡluːm/	
gloomy	/ˈɡluːmi/	
glory	/ˈɡlɔːri/	
glorious	/ˈɡlɔːriəs/	
glossary	/ˈɡlɑːsəri/	
glove	/ɡlʌv/	
glow	/ɡloʊ/	
glue	/ɡluː/	
go	/ɡoʊ/	
goal	/ɡoʊl/	
goat	/ɡoʊt/	
god	/ɡɑːd/	
gold	/ɡoʊld/	
golden	/ˈɡoʊldən/	
golf	/ɡɑːlf/	
good	/ɡʊd/	
goodbye	/ˌɡʊdˈbaɪ/	
goodness	/ˈɡʊdnəs/	
goods	/ɡʊdz/	
goose	/ɡuːs/	
gorge	/ɡɔːrdʒ/	
gorgeous	/ˈɡɔːrdʒəs/	
gospel	/ˈɡɑːspəl/	
gossip	/ˈɡɑːsɪp/	
govern	/ˈɡʌvərn/	
government	/ˈɡʌvərnmənt/	
governor	/ˈɡʌvərnər/	
gown	/ɡaʊn/	
grab	/ɡræb/	
grace	/ɡreɪs/	
graceful	/ˈɡreɪsfəl/	
gracious	/ˈɡreɪʃəs/	
grade	/ɡreɪd/	
gradual	/ˈɡrædʒuəl/	
gradually	/ˈɡrædʒuəli/	
graduate	/ˈɡrædʒueɪt/ (v.) / ˈɡ rædʒuət/ (n.)	
graduation	/ˌɡrædʒuˈeɪʃən/	
grain	/ɡreɪn/	
gram	/ɡræm/	
gramme	/ɡræm/	
grammar	/ˈɡræmər/	
grammatical	/ɡrəˈ mætɪkəl/	
grand	/ɡrænd/	
grandchild	/ˈɡræntʃaɪld/	
grandchildren	/ˈɡræntʃɪldrən/	
grandson	/ˈɡrænsʌn/	
granddaughter	/ˈɡrændɔːtər/	
grandparent	/ˈɡrændperənt/	
grandfather	/ˈɡrænfɑːðər/	
grandmother	/ˈɡrænmʌðər/	
grant	/ɡrænt/	
granted	/ˈɡræntɪd/	
grape	/ɡreɪp/	
graph	/ɡræf/	
graphic	/ˈɡræfɪk/	
graphically	/ˈɡræfɪkli/	
grasp	/ɡræsp/	
grass	/ɡræs/	
grassy	/ˈɡræsi/	
grateful	/ˈɡreɪtfəl/	
gratitude	/ˈɡrætɪtuːd/	
grave	/ɡreɪv/	
gravitation	/ˌɡrævɪˈteɪʃən/	
gravity	/ˈɡrævəti/	
gray	/ɡreɪ/	
grey	/ɡreɪ/	
graze	/ɡreɪz/	
grease	/ɡriːs/	
great	/ɡreɪt/	
greasy	/ˈɡriːsi/	
greed	/ɡriːd/	
green	/ɡriːn/	
greedy	/ˈɡriːdi/	
greenhouse	/ˈɡriːnhaʊs/	
greet	/ɡriːt/	
greeting	/ˈɡriːtɪŋ/	
grid	/ɡrɪd/	
grief	/ɡriːf/	
grieve	/ɡriːv/	
grievous	/ˈɡriːvəs/	
grill	/ɡrɪl/	
grim	/ɡrɪm/	
grin	/ɡrɪn/	
grind	/ɡraɪnd/	
grip	/ɡrɪp/	
groan	/ɡroʊn/	
grocer	/ˈɡroʊsər/	
grocery	/ˈɡroʊsəri/	
groove	/ɡruːv/	
grope	/ɡroʊp/	
gross	/ɡroʊs/	
ground	/ɡraʊnd/	
group	/ɡruːp/	
grow	/ɡroʊ/	
growth	/ɡroʊə/	
guarantee	/ˌɡærənˈtiː/	
guard	/ɡɑːrd/	
guardian	/ˈɡɑːrdiən/	
guess	/ɡes/	
guest	/ɡest/	
guide	/ɡaɪd/	
guidance	/ˈɡaɪdəns/	
guideline	/ˈɡaɪdlaɪn/	
guilt	/ɡɪlt/	
guilty	/ˈɡɪlti/	
guitar	/ɡɪ ˈtɑːr/	
gulf	/ɡΛlf/	
guitarist	/ɡɪ ˈtɑːrɪst/	
gum	/ɡΛm/	
gun	/ɡΛn/	
gut	/ɡΛt/	
guy	/ɡaɪ/	
gym	/d3ɪm/	
gymnasium	/d3ɪmˈ neɪziəm/	
habit	/ˈhæbɪt/	
habitual	/həˈbɪtʃuəl/	
habitat	/ˈhæbɪtæt/	
hack	/hæk/	
hacker	/ˈhækər/	
hail	/heɪl/	
hair	/her/	
hairy	/ˈheri/	
half	/hæf/	
halfway	/ ˌ hæfˈweɪ/	
hall	/h0ːl/	
halt	/h0ːlt/	
ham	/hæm/	
hamburger	/ˈhæmb3ːrɡər/	
burger	/ˈb3ːrɡər/	
hammer	/ˈhæmər/	
hamper	/ˈhæmpər/	
hand	/hænd/	
handful	/ˈhændful/	
handbook	/ˈhændbuk/	
handicap	/ˈhændikæp/	
handicapped	/ˈhændikæpt/	
handicraft	/ˈhændikræft/	
handle	/ˈhændəl/	
handsome	/ˈhænsəm/	
handwriting	/ˈhændraɪtɪŋ/	
handy	/ˈhændi/	
hang	/hæŋ/	
happen	/ˈhæpən/	
happy	/ˈhæpi/	
happiness	/ˈhæpinəs/	
happily	/ˈhæpɪli/	
harass	/həˈ ræs/ or /ˈhærəs/	
harassment	/həˈ ræsmənt/ or /ˈhærəsmənt/	
harbor	/ˈhɑːrbər/	
harbour	/ˈhɑːrbər/	
hard	/hɑːrd/	
harden	/ˈhɑːrdən/	
hardly	/ˈhɑːrdli/	
hardship	/ˈhɑːrdʃɪp/	
hardware	/ˈhɑːrdwer/	
hardy	/ˈhɑːrdi/	
harm	/hɑːrm/	
harmful	/ˈhɑːrmfəl/	
harmless	/ˈhɑːrmləs/	
harmony	/ˈhɑːrməni/	
harmonious	/hɑːrˈ moʊniəs/	
harness	/ˈhɑːrnɪs/	
harsh	/hɑːrʃ/	
harvest	/ˈhɑːrvɪst/	
haste	/heɪst/	
hat	/hæt/	
hasty	/ˈheɪsti/	
hasten	/ˈheɪsən/	
hatch	/hætʃ/	
hate	/heɪt/	
hatred	/ˈheɪtrɪd/	
hateful	/ˈheɪtfəl/	
haul	/hɔːl/	
haunt	/hɔːnt/	
have	/hæv/	
haven	/ˈheɪvən/	
havoc	/ˈhævək/	
hawk	/hɔːk/	
hay	/heɪ/	
hazard	/ˈhæzərd/	
hazardous	/ˈhæzərdəs/	
haze	/heɪz/	
he	/hiː/	
hazy	/ˈheɪzi/	
head	/hed/	
headache	/ˈhedeɪk/	
heading	/ˈhedɪŋ/	
headline	/ˈhedlaɪn/	
headmaster	/ ˌ hedˈmæstər/	
headmistress	/ ˌ hedˈmɪstrəs/	
headquarters	/ˈhedkwɔːrtərz/	
heal	/hiːl/	
health	/helə/	
heap	/hiːp/	
healthy	/ˈhelə i/	
healthful	/ˈheləfəl/	
hear	/hɪr/	
hearing	/ˈhɪrɪŋ/	
heart	/hɑːrt/	
hearty	/ˈhɑːrti/	
heartfelt	/ˈhɑːrtfelt/	
heat	/hiːt/	
heated	/ˈhiːtɪd/	
heating	/ˈhiːtɪŋ/	
heave	/hiːv/	
heaven	/ˈhevən/	
heavy	/ˈhevi/	
hectare	/ˈhekter/	
hectic	/ˈhektɪk/	
hedge	/hedʒ/	
heel	/hiːl/	
height	/haɪt/	
heighten	/ˈhaɪtən/	
heir	/er/	
heiress	/ˈerəs/	
helicopter	/ˈhelɪkɑːptər/	
hell	/hel/	
hello	/həˈloʊ/	
helmet	/ˈhelmɪt/	
help	/help/	
helpful	/ˈhelpfəl/	
helplessly	/ˈhelpləsli/	
hemisphere	/ˈhemɪsfɪr/	
hen	/hen/	
hence	/hens/	
henceforth	/ ˌ hens ˈfɔːrə/	
her	/hɜːr/	
herald	/ˈherəld/	
herb	/ɜːrb/ or /hɜːrb/	
herd	/hɜːrd/	
here	/hɪr/	
herbal	/ˈhɜːrbəl/	
hereby	/ ˌ hɪr ˈbaɪ/	
heritage	/ˈherɪtɪdʒ/	
hero	/ˈhɪroʊ/	
heroine	/ˈheroʊɪn/	
heroic	/hɪˈ roʊɪk/	
heroism	/ˈheroʊɪzəm/	
heroin	/ˈheroʊɪn/	
hers	/hɜːrz/	
herself	/hɜːrˈself/	
hesitate	/ˈhezɪteɪt/	
hi	/haɪ/	
hesitation	/ˌhezɪ ˈteɪʃən/	
hesitant	/ˈhezɪtənt/	
hibernate	/ˈhaɪbərneɪt/	
hibernation	/ˌhaɪbərˈ neɪʃən/	
hide	/haɪd/	
hiding	/ˈhaɪdɪŋ/	
hierarchy	/ˈhaɪərɑːrki/	
hierarchical	/ ˌ haɪə ˈrɑːrkɪkəl/	
high	/haɪ/	
highly	/ˈhaɪli/	
highlight	/ˈhaɪlaɪt/	
high-tech	/ ˌ haɪ ˈtek/	
highway	/ˈhaɪweɪ/	
hijack	/ˈhaɪdʒæk/	
hike	/haɪk/	
hill	/hɪl/	
hilly	/ˈhɪli/	
him	/hɪm/	
himself	/hɪmˈself/	
hinder	/ˈhɪndər/	
hindrance	/ˈhɪndrəns/	
hinge	/hɪndʒ/	
hint	/hɪnt/	
hip	/hɪp/	
hire	/ˈhaɪər/	
his	/hɪz/	
history	/ˈhɪstəri/	
hit	/hɪt/	
historic	/hɪ ˈst0ːrɪk/	
historical	/hɪ ˈst0ːrɪkəl/	
historian	/hɪ ˈst0ːriən/	
hitherto	/ ˌ hɪŎərˈtuː/	
hive	/haɪv/	
hobby	/ˈhɑːbi/	
hockey	/ˈhɑːki/	
hoist	/h0ɪst/	
hold	/hould/	
hole	/houl/	
holiday	/ˈhɑːlədeɪ/	
hollow	/ˈhɑːlou/	
holy	/ˈhouli/	
holiness	/ˈhoulinəs/	
home	/houm/	
homeless	/ˈhoumləs/	
homely	/ˈhoumli/	
homeland	/ˈhoumlænd/	
homework	/ˈhoumw3ːrk/	
homogeneous	/ˌhouməˈd3iːniəs/	
homosexual	/ˌhouməˈsekʃuəl/	
homo	/ˈhoumou/	
honest	/ˈɑːnɪst/	
honesty	/ˈɑːnəsti/	
honey	/ˈhΛni/	
honeymoon	/ˈhΛnimuːn/	
honor	/ˈɑːnər/	
honour	/ˈɑːnər/	
hook	/huk/	
honorable	/ˈɑːnərəbəl/	
honourable	/ˈɑːnərəbəl/	
honorary	/ˈɑːnəreri/	
hop	/hɑːp/	
hope	/houp/	
hopeful	/ˈhoupfəl/	
hopeless	/ˈhoupləs/	
horizon	/həˈ raɪzən/	
horn	/h0ːrn/	
horizontal	/ ˌ hɔːrɪ ˈzɑːntəl/	
horror	/ˈhɔːrər/	
horrible	/ˈhɔːrəbəl/	
horrify	/ˈhɔːrɪfaɪ/	
horse	/hɔːrs/	
horsepower	/ˈhɔːrspaʊər/	
hose	/hoʊz/	
hospital	/ˈhɑːspɪtəl/	
hospitalize	/ˈhɑːspɪtəlaɪz/	
hospitable	/hɑːˈspɪtəbəl/ or /ˈhɑ ːspɪtəbəl/	
hospitality	/ˌhɑːspɪ ˈtæləti/	
host	/hoʊst/	
hostess	/ˈhoʊstəs/	
hostage	/ˈhɑːstɪdʒ/	
hostile	/ˈhɑːstəl/ or /ˈhɑːstaɪl/	
hostility	/hɑː ˈstɪləti/	
hot	/hɑːt/	
hotdog	/ˈhɑːtdɔːɡ/	
hotel	/hoʊˈtel/	
hound	/haʊnd/	
hour	/aʊər/	
hourly	/ˈaʊərli/	
house	/haʊs/	
housing	/ˈhaʊzɪŋ/	
household	/ˈhaʊshoʊld/	
housewife	/ˈhaʊswaɪf/	
housework	/ˈhaʊswɜːrk/	
hover	/ˈhʌvər/ or /ˈhoʊvər/	
how	/haʊ/	
however	/haʊˈevər/	
howl	/haʊl/	
huddle	/ˈhʌdəl/	
hug	/hʌɡ/	
huge	/hjuːdʒ/	
hum	/hʌm/	
human	/ˈhjuːmən/	
humanity	/hjuːˈ mænəti/	
humane	/hjuːˈ meɪn/	
humanism	/ˈhjuːmənɪzəm/	
humanist	/ˈhjuːmənɪst/	
humanitarian	/hjuːˌ mænɪˈteriən/	
humble	/ˈhΛmbəl/	
humbly	/ˈhΛmbli/	
humid	/ˈhjuːmɪd/	
humidity	/hjuː ˈ mɪdəti/	
humiliate	/hjuː ˈ mɪlieɪt/	
humiliation	/hjuː ˌ mɪliˈeɪʃən/	
humor	/ˈhjuːmər/	
humour	/ˈhjuːmər/	
humorous	/ˈhjuːmərəs/	
humourous	/ˈhjuːmərəs/	
hundred	/ˈhΛndrəd/	
hunger	/ˈhΛŋɡər/	
hungry	/ˈhΛŋɡri/	
hunt	/hΛnt/	
hunting	/ˈhΛntɪŋ/	
hunter	/ˈhΛntər/	
hurdle	/ˈh3ːrdəl/	
hurl	/h3ːrl/	
hurricane	/ˈh3ːrɪkeɪn/	
hurry	/ˈh3ːri/	
hurriedly	/ˈh3ːrɪdli/	
hurt	/h3ːrt/	
hurtful	/ˈh3ːrtfəl/	
husband	/ˈhΛzbənd/	
hut	/hΛt/	
hybrid	/ˈhaɪbrɪd/	
hydrogen	/ˈhaɪdrəd3ən/	
hygiene	/ˈhaɪd3iːn/	
hygienic	/haɪˈd3iːnɪk/ or /haɪˈd 3enɪk/	
hyphen	/ˈhaɪfən/	
hypocrisy	/hɪ ˈ pɑːkrəsi/	
hypocritical	/ˌhɪpə ˈkrɪtɪkəl/	
hypocrite	/ˈhɪpəkrɪt/	
hypothesis	/haɪˈ pɑːəəsɪs/	
hypothetical	/ˌhaɪpəˈəetɪkəl/	
hysterical	/hɪ ˈsterɪkəl/	
hysteria	/hɪ ˈstɪriə/	
i	/aɪ/	
ice	/aɪs/	
icy	/ˈaɪsi/	
iceberg	/ˈaɪsbɜːrɡ/	
icon	/ˈaɪkɑːn/	
idea	/aɪ ˈdiːə/	
ideal	/aɪ ˈdiːəl/	
idealistic	/aɪ ˌdiːə ˈlɪstɪk/	
idealism	/aɪˈdiːəlɪzəm/	
identify	/aɪˈdentɪfaɪ/	
identification	/aɪˌdentɪfɪˈ keɪʃən/	
identical	/aɪˈdentɪkəl/	
identity	/aɪ ˈdentəti/	
ideology	/ˌaɪdi ˈɑːlədʒi/	
ideological	/ˌaɪdiəˈlɑːdʒɪkəl/	
idiom	/ˈɪdiəm/	
idiomatic	/ ˌɪdiəˈ mætɪk/	
idiot	/ˈɪdiət/	
idiotic	/ ˌɪdi ˈɑːtɪk/	
idly	/ˈaɪdli/	
idle	/ˈaɪdəl/	
idol	/ˈaɪdəl/	
if	/ɪf/	
ignite	/ɪɡ ˈ naɪt/	
ignition	/ɪɡ ˈ nɪʃən/	
ignorant	/ˈɪɡnərənt/	
ignorance	/ˈɪɡnərəns/	
ignore	/ɪɡ ˈ nɔːr/	
ill	/ɪl/	
illness	/ˈɪlnəs/	
illegal	/ɪ ˈ liːɡəl/	
illicit	/ɪ ˈ lɪsɪt/	
illiterate	/ɪ ˈ lɪtərət/	
illiteracy	/ɪ ˈ lɪtərəsi/	
illuminate	/ɪ ˈ luːmɪneɪt/	
illumination	/ɪ ˌ luːmɪ ˈ neɪʃən/	
illusion	/ɪ ˈ luːʒən/	
illusory	/ɪ ˈ luːsəri/	
illustrate	/ˈɪləstreɪt/	
illustration	/ˌɪlə ˈstreɪʃən/	
illustrative	/ɪ ˈ lʌstrətɪv/	
image	/ˈɪmɪdʒ/	
imaging	/ˈɪmɪdʒɪŋ/	
imagine	/ɪ ˈ mædʒɪn/	
imagination	/ɪ ˌ mædʒɪˈ neɪʃən/	
imaginative	/ɪ ˈ mædʒɪnətɪv/	
imaginary	/ɪ ˈ mædʒɪneri/	
imitate	/ˈɪmɪteɪt/	
imitation	/ˌɪmɪˈteɪʃən/	
imitative	/ˈɪmɪteɪtɪv/	
immediate	/ɪ ˈ miːdiət/	
immediately	/ɪ ˈ miːdiətli/	
immense	/ɪ ˈ mens/	
immensely	/ɪ ˈ mensli/	
immensity	/ɪ ˈ mensəti/	
immerse	/ɪ ˈ mɜːrs/	
immersion	/ɪ ˈ mɜːrʒən/	
immigrate	/ˈɪmɪɡreɪt/	
immigration	/ˌɪmɪˈɡreɪʃən/	
immigrant	/ˈɪmɪɡrənt/	
imminent	/ˈɪmɪnənt/	
immunity	/ɪ ˈ mjuːnəti/	
immunize	/ˈɪmj unaɪz/	
immunise	/ˈɪmj unaɪz/	
immune	/ɪ ˈ mjuːn/	
impact	/ˈɪmpækt/ (n.) /ɪ m ˈpækt/ (v.)	
impair	/ɪmˈ per/	
impatience	/ɪmˈ peɪʃəns/	
impart	/ɪm ˈ pɑːrt/	
impatient	/ɪmˈ peɪʃənt/	
imperative	/ɪmˈ perətɪv/	
imperialism	/ɪmˈ pɪriəlɪzəm/	
imperialist	/ɪm ˈ pɪriəlɪst/	
imperial	/ɪm ˈ pɪriəl/	
impetus	/ˈɪmpɪtəs/	
implementation	/ˌɪmplɪmenˈteɪʃən/	
implement	/ˈɪmplɪmənt/	
implication	/ˌɪmplɪˈ keɪʃən/	
implicit	/ɪm ˈ plɪsɪt/	
imply	/ɪm ˈ plaɪ/	
import	/ɪm ˈ pɔːrt/ (v.) / ˈɪmpɔ ːrt/ (n.)	
importation	/ˌɪmpɔːrˈteɪʃən/	
important	/ɪm ˈ pɔːrtənt/	
importance	/ɪmˈ pɔːrtəns/	
impose	/ɪmˈ poʊz/	
imposition	/ˌɪmpəˈzɪʃən/	
imposing	/ɪmˈ poʊzɪŋ/	
impossible	/ɪmˈ pɑːsəbəl/	
impossibility	/ɪm ˌ pɑːsəˈbɪlɪti/	
impress	/ɪmˈ pres/	
impression	/ɪmˈ preʃən/	
impressive	/ɪmˈ presɪv/	
imprison	/ɪmˈ prɪzən/	
imprisonment	/ɪmˈ prɪzənmənt/	
impromptu	/ɪmˈ prɑːmptuː/	
improvement	/ɪmˈ pruːvmənt/	
improve	/ɪmˈ pruːv/	
impulse	/ˈɪmpʌls/	
impulsive	/ɪmˈ pʌlsɪv/	
in	/ɪn/	
inauguration	/ɪ ˌ nɔːɡjə ˈ reɪʃən/	
inaugurate	/ɪ ˈ nɔːɡjəreɪt/	
inborn	/ ˌɪn ˈbɔːrn/	
incidental	/ ˌɪnsɪ ˈdentəl/	
incidentally	/ ˌɪnsɪ ˈdentəli/	
incentive	/ɪnˈsentɪv/	
inch	/ɪntʃ/	
incidence	/ˈɪnsɪdəns/	
incident	/ˈɪnsɪdənt/	
incline	/ɪn ˈ klaɪn/ (v.) /ˈɪnklaɪ n/ (n.)	
inclined	/ɪnˈ klaɪnd/	
inclination	/ˌɪnklɪ ˈ neɪʃən/	
include	/ɪn ˈ kluːd/	
inclusion	/ɪnˈ kluːʒən/	
inclusive	/ɪn ˈ kluːsɪv/	
including	/ɪn ˈ kluːdɪŋ/	
income	/ˈɪnkʌm/	
incorporation	/ɪnˌ kɔːrpəˈ reɪʃən/	
incorporate	/ɪn ˈ kɔːrpəreɪt/	
increase	/ɪn ˈ kriːs/ (v.) /ˈɪŋkriːs/ (n.)	
increasingly	/ɪn ˈ kriːsɪŋli/	
incredible	/ɪnˈ kredəbəl/	
incredibly	/ɪn ˈ kredəbli/	
incumbent	/ɪnˈ kʌmbənt/	
incur	/ɪn ˈ kɜːr/	
indebted	/ɪnˈdetɪd/	
indeed	/ɪn ˈdiːd/	
indefinite	/ɪnˈdefɪnət/	
independent	/ˌɪndɪ ˈ pendənt/	
independence	/ˌɪndɪ ˈ pendəns/	
index	/ˈɪndeks/	
indicate	/ˈɪndɪkeɪt/	
indication	/ˌɪndɪ ˈ keɪʃən/	
indicative	/ɪnˈdɪkətɪv/	
indicator	/ˈɪndɪkeɪtər/	
indict	/ɪn ˈdaɪt/	
indictment	/ɪnˈdaɪtmənt/	
indifferent	/ɪnˈdɪfərənt/	
indifference	/ɪnˈdɪfərəns/	
indigenous	/ɪnˈdɪdʒənəs/	
indignant	/ɪnˈdɪɡnənt/	
indignation	/ˌɪndɪɡˈ neɪʃən/	
indispensable	/ˌɪndɪ ˈspensəbəl/	
individual	/ˌɪndɪ ˈvɪdʒuəl/	
individualism	/ˌɪndɪ ˈvɪdʒuəlɪzəm/	
indoor	/ˈɪndɔːr/	
indoors	/ ˌɪn ˈdɔːrz/	
induce	/ɪn ˈduːs/	
inducement	/ɪnˈduːsmənt/	
indulge	/ɪnˈdʌldʒ/	
indulgence	/ɪnˈdʌldʒəns/	
indulgent	/ɪnˈdʌldʒənt/	
industry	/ˈɪndəstri/	
industrial	/ɪn ˈdʌstriəl/	
industrialize	/ɪn ˈdʌstriəlaɪz/	
industrialise	/ɪn ˈdʌstriəlaɪz/	
inertia	/ɪ ˈ nɜːrʃə/	
inevitable	/ɪnˈevɪtəbəl/	
infant	/ˈɪnfənt/	
infect	/ɪn ˈfekt/	
infection	/ɪnˈfekʃən/	
infectious	/ɪnˈfekʃəs/	
infer	/ɪn ˈfɜːr/	
inference	/ˈɪnfərəns/	
inferior	/ɪn ˈfɪriər/	
inferiority	/ɪn ˌfɪri ˈɔːrəti/	
infinite	/ˈɪnfɪnət/	
infinity	/ɪn ˈfɪnəti/	
infinitive	/ɪn ˈfɪnɪtɪv/	
inflate	/ɪn ˈfleɪt/	
inflation	/ɪn ˈfleɪʃən/	
inflict	/ɪn ˈflɪkt/	
infliction	/ɪn ˈflɪkʃən/	
influence	/ˈɪnfluəns/	
influential	/ˌɪnflu ˈenʃəl/	
influenza	/ ˌɪnfluˈenzə/	
flu	/fluː/	
inform	/ɪn ˈfɔːrm/	
information	/ˌɪnfərˈ meɪʃən/	
informative	/ɪnˈfɔːrmətɪv/	
infrastructure	/ˈɪnfrəstrʌktʃər/	
infringe	/ɪnˈfrɪndʒ/	
infringement	/ɪnˈfrɪndʒmənt/	
ingenious	/ɪn ˈdʒiːniəs/	
ingenuity	/ˌɪndʒəˈnuːəti/	
ingredient	/ɪn ˈɡriːdiənt/	
inhabit	/ɪnˈ hæbɪt/	
inhabitant	/ɪnˈ hæbɪtənt/	
inherent	/ɪnˈ herənt/ or /ɪnˈ hɪrə	
inherit	/ɪ ˈ herɪt/	
inheritance	/ɪnˈ herɪtəns/	
inhibit	/ɪn ˈ hɪbɪt/	
inhibition	/ˌɪnhɪˈbɪʃən/	
initial	/ɪ ˈ nɪʃəl/	
initially	/ɪ ˈ nɪʃəli/	
initiate	/ɪ ˈ nɪʃieɪt/	
initiation	/ɪ ˌ nɪʃi ˈeɪʃən/	
initiative	/ɪ ˈ nɪʃətɪv/	
inject	/ɪnˈdʒekt/	
injection	/ɪnˈdʒekʃən/	
injure	/ˈɪndʒər/	
ink	/ɪŋk/	
injury	/ˈɪndʒəri/	
injurious	/ɪnˈdʒʊriəs/	
inland	/ˈɪnlənd/ (adj.) / ˌɪ n ˈ lænd/ (adv.)	
inmate	/ˈɪnmeɪt/	
inn	/ɪn/	
inner	/ˈɪnər/	
innocent	/ˈɪnəsənt/	
innocence	/ˈɪnəsəns/	
innovate	/ˈɪnəveɪt/	
innovation	/ˌɪnəˈveɪʃən/	
innovative	/ˈɪnəveɪtɪv/ or / ˈɪnəvə tɪv/	
innumerable	/ɪ ˈ nuːmərəbəl/	
input	/ˈɪnpʊt/	
inquire	/ɪnˈ kwaɪər/	
inquiry	/ɪnˈ kwaɪəri/	
inquisitive	/ɪnˈ kwɪzətɪv/	
insane	/ɪnˈseɪn/	
insanity	/ɪnˈsænəti/	
insect	/ˈɪnsekt/	
insert	/ɪn ˈsɜːrt/ (v.) /ˈɪnsɜːrt/ (n.)	
insertion	/ɪn ˈsɜːrʃən/	
inside	/ ˌɪnˈsaɪd/	
insider	/ ˌɪnˈsaɪdər/	
insight	/ˈɪnsaɪt/	
insightful	/ˈɪnsaɪtfəl/	
insist	/ɪn ˈsɪst/	
insistent	/ɪnˈsɪstənt/	
insistence	/ɪnˈsɪstəns/	
inspect	/ɪnˈspekt/	
inspection	/ɪnˈspekʃən/	
install	/ɪn ˈstɔːl/	
instal	/ɪn ˈstɔːl/	
installation	/ˌɪnstəˈleɪʃən/	
instant	/ˈɪnstənt/	
instantaneous	/ ˌɪnstənˈteɪniəs/	
instinct	/ˈɪnstɪŋkt/	
instinctive	/ɪn ˈstɪŋktɪv/	
institute	/ˈɪnstɪtuːt/	
institution	/ˌɪnstɪ ˈtuːʃən/	
institutional	/ˌɪnstɪ ˈtuːʃənəl/	
instruct	/ɪn ˈstrʌkt/	
instruction	/ɪnˈstrʌkʃən/	
instrument	/ˈɪnstrəmənt/	
instrumental	/ ˌɪnstrəˈ mentəl/	
insulate	/ˈɪnsəleɪt/	
insulation	/ˌɪnsəˈleɪʃən/	
insulator	/ˈɪnsəleɪtər/	
insult	/ɪn ˈsʌlt/ (v.) /ˈɪnsʌlt/	
insure	/(ɪn)ˈʃʊr/	
intact	/ɪnˈtækt/	
intake	/ˈɪnteɪk/	
intangible	/ɪnˈtændʒəbəl/	
integral	/ˈɪntɪɡrəl/	
integration	/ˌɪntɪ ˈɡreɪʃən/	
integrate	/ˈɪntɪɡreɪt/	
integrity	/ɪn ˈteɡrəti/	
intellect	/ˈɪntəlekt/	
intellectual	/ˌɪntə ˈlektʃuəl/	
intelligence	/ɪnˈtelɪdʒəns/	
intelligent	/ɪnˈtelɪdʒənt/	
intelligible	/ɪnˈtelɪdʒəbəl/	
intend	/ɪnˈtend/	
intention	/ɪnˈtenʃən/	
intent	/ɪn ˈtent/	
intentional	/ɪnˈtenʃənəl/	
intense	/ɪnˈtens/	
intensity	/ɪn ˈtensəti/	
intensify	/ɪnˈtensɪfaɪ/	
intensive	/ɪnˈtensɪv/	
interact	/ ˌɪntərˈækt/	
interaction	/ˌɪntərˈækʃən/	
interactive	/ ˌɪntərˈæktɪv/	
intercourse	/ˈɪntərkɔːrs/	
interest	/ˈɪntrəst/	
interesting	/ˈɪntrəstɪŋ/	
interested	/ˈɪntrəstɪd/	
interfere	/ ˌɪntərˈfɪr/	
interference	/ ˌɪntərˈfɪrəns/	
interim	/ˈɪntərɪm/	
interior	/ɪn ˈtɪriər/	
intermediate	/ ˌɪntərˈ miːdiət/	
intermediary	/ ˌɪntərˈ miːdieri/	
intermittent	/ ˌɪntərˈ mɪtənt/	
internal	/ɪn ˈtɜːrnəl/	
interpret	/ɪn ˈtɜːrprɪt/	
interpretation	/ɪn ˌtɜːrprɪ ˈteɪʃən/	
interpreter	/ɪn ˈtɜːrprɪtər/	
international	/ˌɪntərˈ næʃənəl/	
internet	/ˈɪntərnet/	
interrogate	/ɪnˈterəɡeɪt/	
interrogation	/ɪnˌterəˈɡeɪʃən/	
interrupt	/ˌɪntə ˈrʌpt/	
interruption	/ˌɪntəˈrʌpʃən/	
interval	/ˈɪntərvəl/	
intervene	/ ˌɪntərˈviːn/	
intervention	/ˌɪntərˈvenʃən/	
interview	/ˈɪntərvjuː/	
interviewer	/ˈɪntərvjuːər/	
interviewee	/ˌɪntərvjuː ˈ iː/	
intimate	/ˈɪntɪmət/	
intimacy	/ˈɪntɪməsi/	
intimidate	/ɪnˈtɪmɪdeɪt/	
intimidation	/ɪnˌtɪmɪˈdeɪʃən/	
into	/ˈɪntə/ or /ˈɪntuː/	
intricacy	/ˈɪntrɪkəsi/	
intricate	/ˈɪntrɪkət/	
intrigue	/ɪn ˈtriːɡ/ (v.) /ˈɪntriːɡ/ (n.)	
intrinsically	/ɪn ˈtrɪnzɪkli/	
intrinsic	/ɪn ˈtrɪnzɪk/	
introduce	/ ˌɪntrəˈduːs/	
introduction	/ˌɪntrəˈdʌkʃən/	
introductory	/ ˌɪntrəˈdʌktəri/	
intrude	/ɪn ˈtruːd/	
intrusion	/ɪn ˈtruːʒən/	
intruder	/ɪn ˈtruːdər/	
intuition	/ˌɪntuː ˈɪʃən/	
intuitive	/ɪn ˈtuːɪtɪv/	
invade	/ɪnˈveɪd/	
invasion	/ɪnˈveɪʒən/	
invader	/ɪnˈveɪdər/	
invasive	/ɪnˈveɪsɪv/	
invalid	/ɪnˈvælɪd/	
invention	/ɪnˈvenʃən/	
inventor	/ɪnˈventər/	
invaluable	/ɪnˈvæljuəbəl/	
invariably	/ɪn ˈveriəbli/	
invent	/ɪnˈvent/	
inventory	/ˈɪnvəntɔːri/	
inversion	/ɪnˈvɜːrʒən/	
invert	/ɪn ˈvɜːrt/	
invest	/ɪnˈvest/	
investment	/ɪnˈvestmənt/	
investor	/ɪnˈvestər/	
investigate	/ɪnˈvestɪɡeɪt/	
investigation	/ɪnˌvestɪˈɡeɪʃən/	
investigator	/ɪnˈvestɪɡeɪtər/	
invisible	/ɪnˈvɪzəbəl/	
invitation	/ˌɪnvɪ ˈteɪʃən/	
invite	/ɪn ˈvaɪt/	
inviting	/ɪn ˈvaɪtɪŋ/	
involve	/ɪn ˈvɑːlv/	
involvement	/ɪnˈvɑːlvmənt/	
involved	/ɪn ˈvɑːlvd/	
inward	/ˈɪnwərd/	
iron	/ˈaɪərn/	
ironic	/aɪ ˈ rɑːnɪk/	
ironical	/aɪ ˈ rɑːnɪkəl/	
ironically	/aɪ ˈ rɑːnɪkli/	
irony	/ˈaɪrəni/	
irrational	/ɪ ˈ ræʃənəl/	
irrigation	/ˌɪrɪ ˈɡeɪʃən/	
irregular	/ɪ ˈ reɡjələr/	
irrespective	/ˌɪrɪ ˈspektɪv/	
irrigate	/ˈɪrɪɡeɪt/	
irritate	/ˈɪrɪteɪt/	
irritation	/ˌɪrɪ ˈteɪʃən/	
irritating	/ˈɪrɪteɪtɪŋ/	
irritable	/ˈɪrɪtəbəl/	
island	/ˈaɪlənd/	
isle	/aɪl/	
isolate	/ˈaɪsəleɪt/	
isolation	/ˌaɪsəˈleɪʃən/	
issue	/ˈɪʃuː/ or /ˈɪsjuː/	
it	/ɪt/	
item	/ˈaɪtəm/	
its	/ɪts/	
itself	/ɪt ˈself/	
ivory	/ˈaɪvəri/	
jack	/d3æk/	
jacket	/ˈd3ækɪt/	
jail	/d3eɪl/	
jam	/d3æm/	
january	/ˈd3ænjuəri/	
jar	/d3ɑːr/	
jargon	/ˈd3ɑːrɡən/	
jaw	/d30ː/	
jazz	/d3æz/	
jealous	/ˈd3eləs/	
jealousy	/ˈd3eləsi/	
jeans	/d3iːnz/	
jeep	/d3iːp/	
jelly	/ˈd3eli/	
jeopardy	/ˈd3epərdi/	
jeopardize	/ˈd3epərdaɪz/	
jeopardise	/ˈd3epərdaɪz/	
jerk	/d33ːrk/	
jet	/d3et/	
jetlag	/ˈd3etlæɡ/	
jewel	/ˈd3uːəl/	
jewelry	/ˈd3uːəlri/	
jewellery	/ˈd3uːəlri/	
job	/d3ɑːb/	
jockey	/ˈd3ɑːki/	
jog	/d3ɑːɡ/	
join	/d30ɪn/	
joint	/d30ɪnt/	
joke	/d3ouk/	
jolly	/ˈd3ɑːli/	
journal	/ˈd33ːrnəl/	
journalism	/ˈd33ːrnəlɪzəm/	
journalist	/ˈd33ːrnəlɪst/	
journey	/ˈd33ːrni/	
joy	/d30ɪ/	
joyous	/ˈd30ɪəs/	
joyful	/ˈd30ɪfəl/	
judge	/d3Λd3/	
judgment	/ˈd3Λd3mənt/	
judgement	/ˈd3Λd3mənt/	
judicial	/d3uː ˈdɪʃəl/	
judiciary	/d3uː ˈdɪʃieri/	
juice	/d3uːs/	
juicy	/ˈd3uːsi/	
july	/d3uˈlaɪ/	
jump	/d3Λmp/	
junction	/ˈd3Λŋkʃən/	
june	/d3uːn/	
jungle	/ˈd3Λŋɡəl/	
junior	/ˈd3uːniər/	
junk	/d3Λŋk/	
jurisdiction	/ˌd3urɪsˈdɪkʃən/	
jury	/ˈd3uri/	
juror	/ˈd3urər/	
just	/d3Λst/	
justice	/ˈd3Λstɪs/	
justify	/ˈd3Λstɪfaɪ/	
justification	/ˌd3Λstɪfɪˈ keɪʃən/	
juvenile	/ˈd3uːvənaɪl/	
keen	/kiːn/	
keep	/kiːp/	
kettle	/ˈketəl/	
key	/kiː/	
keyboard	/ˈkiːb0ːrd/	
kick	/kɪk/	
kid	/kɪd/	
kidnap	/ˈkɪdnæp/	
kidney	/ˈkɪdni/	
kill	/kɪl/	
kilogram	/ˈkɪləɡræm/	
kilogramme	/ˈkɪləɡræm/	
kilo	/ˈkiːlou/	
kilometer	/kɪ ˈ lɑːmɪtər/	
kilometre	/kɪ ˈ lɑːmɪtər/	
kin	/kɪn/	
kind	/kaɪnd/	
kindness	/ˈkaɪndnəs/	
kindergarten	/ˈkɪndərɡɑːrtən/	
king	/kɪŋ/	
kingdom	/ˈkɪŋdəm/	
kiss	/kɪs/	
kit	/kɪt/	
kitchen	/ˈkɪtʃɪn/	
kite	/kaɪt/	
knee	/niː/	
kneel	/niːl/	
knife	/naɪf/	
knight	/naɪt/	
knit	/nɪt/	
knob	/nɑːb/	
knock	/nɑːk/	
knot	/nɑːt/	
knotty	/ˈnɑːti/	
know	/noʊ/	
knowledge	/ˈnɑːlɪdʒ/	
knowledgeable	/ˈnɑːlɪdʒəbəl/	
knowhow	/ˈnoʊhaʊ/	
label	/ˈleɪbəl/	
labor	/ˈleɪbər/	
labour	/ˈleɪbər/	
laborious	/lə ˈbɔːriəs/	
laboratory	/ˈlæbrətɔːri/	
lad	/læd/	
lace	/leɪs/	
lack	/læk/	
ladder	/ˈlædər/	
lady	/ˈleɪdi/	
lag	/læɡ/	
lake	/leɪk/	
lamb	/læm/	
lame	/leɪm/	
lamp	/læmp/	
land	/lænd/	
landlord	/ˈlændlɔːrd/	
landlady	/ˈlændleɪdi/	
landmark	/ˈlændmɑːrk/	
landscape	/ˈlændskeɪp/	
lane	/leɪn/	
language	/ˈlæŋɡwɪd3/	
lap	/læp/	
laptop	/ˈlæptɑːp/	
large	/lɑːrd3/	
largely	/ˈlɑːrd3li/	
laser	/ˈleɪzər/	
lash	/læʃ/	
lass	/læs/	
last	/læst/	
late	/leɪt/	
lately	/ˈleɪtli/	
latitude	/ˈlætɪtuːd/	
latter	/ˈlætər/	
laugh	/læf/	
laughter	/ˈlæftər/	
launch	/l0ːntʃ/	
laundry	/ˈl0ːndri/	
lavatory	/ˈlævət0ːri/	
lavish	/ˈlævɪʃ/	
law	/l0ː/	
lawful	/ˈl0ːfəl/	
lawn	/l0ːn/	
lawsuit	/ˈl0ːsuːt/	
lawyer	/ˈl0ːjər/	
lay	/leɪ/	
layer	/ˈleɪər/	
layman	/ˈleɪmən/	
layoff	/ˈleɪ0ːf/	
layout	/ˈleɪaut/	
lazy	/ˈleɪzi/	
laziness	/ˈleɪzinəs/	
lead	/liːd/	
leader	/ˈliːdər/	
leadership	/ˈliːdərʃɪp/	
leading	/ˈliːdɪŋ/	
leaf	/liːf/	
leaflet	/ˈliːflət/	
league	/liːɡ/	
leak	/liːk/	
lean	/liːn/	
leap	/liːp/	
learn	/lɜːrn/	
lease	/liːs/	
least	/liːst/	
leather	/ˈleðər/	
leave	/liːv/	
lecture	/ˈlektʃər/	
left	/left/	
leftist	/ˈleftɪst/	
leg	/leɡ/	
legacy	/ˈleɡəsi/	
legal	/ˈliːɡəl/	
legalize	/ˈliːɡəlaɪz/	
legalise	/ˈliːɡəlaɪz/	
legend	/ˈledʒənd/	
legendary	/ˈledʒənderi/	
legislate	/ˈledʒɪsleɪt/	
legislation	/ˌledʒɪsˈleɪʃən/	
legislative	/ˈledʒɪsleɪtɪv/	
legislator	/ˈledʒɪsleɪtər/	
legitimate	/lɪ ˈdʒɪtɪmət/	
legitimacy	/lɪ ˈdʒɪtɪməsi/	
leisure	/ˈliːʒər/	
leisurely	/ˈliːʒərli/	
lemon	/ˈlemən/	
lemonade	/ ˌ leməˈ neɪd/	
lend	/lend/	
lenient	/ˈliːniənt/	
leniency	/ˈliːniənsi/	
lens	/lenz/	
lesbian	/ˈlezbiən/	
less	/les/	
lesson	/ˈlesən/	
lest	/lest/	
let	/let/	
letter	/ˈletər/	
level	/ˈlevəl/	
lever	/ˈlevər/	
leverage	/ˈlevərɪdʒ/	
levy	/ˈlevi/	
liable	/ˈlaɪəbəl/	
liability	/ ˌ laɪə ˈbɪlɪti/	
liberal	/ˈlɪbərəl/	
liberate	/ˈlɪbəreɪt/	
liberation	/ˌlɪbə ˈ reɪʃən/	
liberty	/ˈlɪbərti/	
librarian	/laɪ ˈbreriən/	
library	/ˈlaɪbreri/	
license	/ˈlaɪsəns/	
licence	/ˈlaɪsəns/	
lick	/lɪk/	
lid	/lɪd/	
lie	/laɪ/	
lieutenant	/luː ˈtenənt/ or /lefˈten ənt/	
life	/laɪf/	
lift	/lɪft/	
light	/laɪt/	
lightning	/ˈlaɪtnɪŋ/	
like	/laɪk/	
likewise	/ˈlaɪkwaɪz/	
lily	/ˈlɪli/	
limb	/lɪm/	
lime	/laɪm/	
limelight	/ˈlaɪmlaɪt/	
limit	/ˈlɪmɪt/	
limitation	/ˌlɪmɪ ˈteɪʃən/	
limited	/ˈlɪmɪtɪd/	
limp	/lɪmp/	
line	/laɪn/	
linear	/ˈlɪniər/	
linen	/ˈlɪnɪn/	
liner	/ˈlaɪnər/	
linger	/ˈlɪŋɡər/	
linguistic	/lɪŋˈɡwɪstɪk/	
linguistics	/lɪŋˈɡwɪstɪks/	
link	/lɪŋk/	
linkage	/ˈlɪŋkɪdʒ/	
lion	/ˈlaɪən/	
lioness	/ˈlaɪənes/	
lip	/lɪp/	
lipstick	/ˈlɪpstɪk/	
liquid	/ˈlɪkwɪd/	
liquor	/ˈlɪkər/	
list	/lɪst/	
listen	/ˈlɪsən/	
listener	/ˈlɪsənər/	
liter	/ˈliːtər/	
litre	/ˈliːtər/	
literal	/ˈlɪtərəl/	
literally	/ˈlɪtərəli/	
literary	/ˈlɪtəreri/	
literate	/ˈlɪtərət/	
literacy	/ˈlɪtərəsi/	
literature	/ˈlɪtərətʃər/	
litter	/ˈlɪtər/	
little	/ˈlɪtəl/	
live	/lɪv/	
livelihood	/ˈlaɪvlihʊd/	
lively	/ˈlaɪvli/	
liver	/ˈlɪvər/	
livestock	/ˈlaɪvstɑːk/	
living-room	/ˈlɪvɪŋ ruːm/	
load	/loʊd/	
loaf	/loʊf/	
loan	/loʊn/	
lobby	/ˈlɑːbi/	
lobbyist	/ˈlɑːbiɪst/	
local	/ˈloʊkəl/	
locate	/ˈloʊkeɪt/	
locality	/loʊˈ kæləti/	
location	/loʊˈ keɪʃən/	
lock	/lɑːk/	
locker	/ˈlɑːkər/	
locomotive	/ ˌ loʊkəˈ moʊtɪv/	
lodge	/lɑːdʒ/	
lodging	/ˈlɑːdʒɪŋ/	
lofty	/ˈlɔːfti/	
log	/lɔːɡ/	
logic	/ˈlɑːdʒɪk/	
logical	/ˈlɑːdʒɪkəl/	
logistics	/ləˈdʒɪstɪks/	
logo	/ˈloʊɡoʊ/	
logistic	/lə ˈdʒɪstɪk/	
logistical	/lə ˈdʒɪstɪkəl/	
lonely	/ˈloʊnli/	
loneliness	/ˈloʊnlinəs/	
length	/leŋkə/	
lengthy	/ˈleŋkə i/	
long	/lɔːŋ/	
longevity	/lɔːnˈdʒevəti/	
longitude	/ˈlɑːndʒɪtuːd/	
longitudinal	/ˌlɑːndʒɪˈtuːdɪnəl/	
look	/lʊk/	
loom	/luːm/	
loop	/luːp/	
loophole	/ˈluːphoʊl/	
loose	/luːs/	
loosen	/ˈluːsən/	
loot	/luːt/	
lord	/lɔːrd/	
lorry	/ˈlɔːri/	
lose	/luːz/	
loss	/lɔːs/	
lot	/lɑːt/	
lotion	/ˈloʊʃən/	
lottery	/ˈlɑːtəri/	
loud	/laʊd/	
loudly	/ˈlaʊdli/	
lounge	/laʊndʒ/	
love	/lʌv/	
lover	/ˈlʌvər/	
lovely	/ˈlʌvli/	
low	/loʊ/	
lower	/ˈloʊər/	
loyal	/ˈlɔɪəl/	
loyalty	/ˈlɔɪəlti/	
lubricate	/ˈluːbrɪkeɪt/	
lubrication	/ˌluːbrɪˈ keɪʃən/	
luck	/lʌk/	
lucky	/ˈlʌki/	
lucrative	/ˈluːkrətɪv/	
luggage	/ˈlʌɡɪdʒ/	
luminous	/ˈluːmɪnəs/	
lump	/lΛmp/	
luncheon	/ˈlΛntʃən/	
lunar	/ˈluːnər/	
lunch	/lΛntʃ/	
lung	/lΛŋ/	
lure	/lur/	
luxurious	/lΛɡ ˈ3uriəs/	
luxury	/ˈlΛkʃəri/	
lyric	/ˈlɪrɪk/	
lyrical	/ˈlɪrɪkəl/	
machine	/məˈʃiːn/	
machinery	/mə ˈʃiːnəri/	
mad	/mæd/	
madden	/ˈmædən/	
madam	/ˈmædəm/	
magazine	/ˌmæɡəˈziːn/	
magic	/ˈmæd3ɪk/	
magical	/ˈmæd3ɪkəl/	
magistrate	/ˈmæd3ɪstreɪt/	
magnet	/ˈmæɡnɪt/	
magnetic	/mæɡˈnetɪk/	
magnificent	/mæɡˈnɪfɪsənt/	
magnificence	/mæɡˈnɪfɪsəns/	
magnify	/ˈmæɡnɪfaɪ/	
maintenance	/ˈmeɪntənəns/	
magnitude	/ˈmæɡnɪtuːd/	
maid	/meɪd/	
maiden	/ˈmeɪdən/	
mail	/meɪl/	
main	/meɪn/	
mainland	/ˈmeɪnlænd/	
mainstream	/ˈmeɪnstriːm/	
maintain	/meɪnˈteɪn/	
majesty	/ˈmæd3əsti/	
majestic	/məˈd3estɪk/	
major	/ˈmeɪd3ər/	
majority	/məˈd30ːrəti/	
make	/meɪk/	
makeup	/ˈmeɪkΛp/	
male	/meɪl/	
malice	/ˈmælɪs/	
malicious	/məˈ lɪʃəs/	
malignant	/məˈ lɪɡnənt/	
mall	/mɔːl/	
man	/mæn/	
manly	/ˈmænli/	
manhood	/ˈmænhʊd/	
malpractice	/ˌmælˈ præktɪs/	
mammal	/ˈmæməl/	
manage	/ˈmænɪdʒ/	
management	/ˈmænɪdʒmənt/	
manager	/ˈmænɪdʒər/	
managerial	/ˌmænɪˈdʒɪriəl/	
mandate	/ˈmændeɪt/	
mandatory	/ˈmændətɔːri/	
maneuver	/məˈ nuːvər/	
manoeuvre	/məˈ nuːvər/	
manifest	/ˈmænɪfest/	
manifestation	/ˌmænɪfesˈteɪʃən/	
manipulate	/məˈ nɪpj uleɪt/	
manipulation	/məˌ nɪpju ˈ leɪʃən/	
manipulative	/məˈ nɪpjələtɪv/	
mankind	/mænˈ kaɪnd/	
manner	/ˈmænər/	
mansion	/ˈmænʃən/	
manual	/ˈmænjuəl/	
manufacture	/ˌmænju ˈfæktʃər/	
manufacturer	/ˌmænju ˈfæktʃərər/	
manuscript	/ˈmænj uskrɪpt/	
many	/ˈmeni/	
map	/mæp/	
mar	/mɑːr/	
marathon	/ˈmærəəɑːn/	
marble	/ˈmɑːrbəl/	
march	/mɑːrtʃ/	
margin	/ˈmɑːrdʒɪn/	
marginal	/ˈmɑːrdʒɪnəl/	
marine	/məˈ riːn/	
maritime	/ˈmærɪtaɪm/	
mark	/mɑːrk/	
market	/ˈmɑːrkɪt/	
marketing	/ˈmɑːrkɪtɪŋ/	
marry	/ˈmæri/	
marriage	/ˈmærɪd3/	
marital	/ˈmærɪtəl/	
marsh	/mɑːrʃ/	
marshal	/ˈmɑːrʃəl/	
martyr	/ˈmɑːrtər/	
martyrdom	/ˈmɑːrtərdəm/	
marvel	/ˈmɑːrvəl/	
marvelous	/ˈmɑːrvələs/	
marvellous	/ˈmɑːrvələs/	
marxism	/ˈmɑːrksɪzəm/	
marxist	/ˈmɑːrksɪst/	
masculine	/ˈmæskjəlɪn/	
masculinity	/ˌmæskju ˈ lɪnəti/	
mask	/mæsk/	
mass	/mæs/	
massive	/ˈmæsɪv/	
massacre	/ˈmæsəkər/	
massage	/məˈsɑː3/	
master	/ˈmæstər/	
mastery	/ˈmæstəri/	
masterpiece	/ˈmæstərpiːs/	
mat	/mæt/	
match	/mætʃ/	
mate	/meɪt/	
material	/mə ˈtɪriəl/	
materialism	/məˈtɪriəlɪzəm/	
materialist	/mə ˈtɪriəlɪst/	
materialize	/məˈtɪriəlaɪz/	
materialise	/məˈtɪriəlaɪz/	
maternal	/məˈt3ːrnəl/	
maternity	/məˈt3ːrnəti/	
math	/mæə/	
mathematics	/ ˌ mæəə ˈ mætɪks/	
maths	/mæəs/	
mathematical	/ ˌ mæəə ˈ mætɪkəl/	
matter	/ˈmætər/	
mature	/məˈtʃur/	
maturity	/məˈtʃurəti/	
maximum	/ˈmæksɪməm/	
maximize	/ˈmæksɪmaɪz/	
maximise	/ˈmæksɪmaɪz/	
maximal	/ˈmæksɪməl/	
may	/meɪ/	
maybe	/ˈmeɪbi/	
mayor	/ˈmeɪər/	
me	/miː/	
meadow	/ˈmedoʊ/	
meal	/miːl/	
mean	/miːn/	
meaning	/ˈmiːnɪŋ/	
meaningful	/ˈmiːnɪŋfəl/	
means	/miːnz/	
meantime	/ˈmiːntaɪm/	
meanwhile	/ˈmiːnwaɪl/	
measure	/ˈmeʒər/	
measurement	/ˈmeʒərmənt/	
measurable	/ˈmeʒərəbəl/	
meat	/miːt/	
meaty	/ˈmiːti/	
mechanic	/məˈ kænɪk/	
mechanical	/məˈ kænɪkəl/	
mechanics	/məˈ kænɪks/	
mechanism	/ˈmekənɪzəm/	
mechanize	/ˈmekənaɪz/	
mechanise	/ˈmekənaɪz/	
mechanization	/ˌmekənaɪˈzeɪʃən/	
mechanisation	/ˌmekənaɪˈzeɪʃən/	
medal	/ˈmedəl/	
mediate	/ˈmiːdieɪt/	
mediation	/ˌmiːdi ˈeɪʃən/	
mediator	/ˈmiːdieɪtər/	
medical	/ˈmedɪkəl/	
medicare	/ˈmedɪker/	
medication	/ˌmedɪ ˈ keɪʃən/	
medicine	/ˈmedɪsɪn/	
medicinal	/məˈdɪsɪnəl/	
medieval	/ ˌ medi ˈ iːvəl/	
medium	/ˈmiːdiəm/	
media	/ˈmiːdiə/	
meet	/miːt/	
meeting	/ˈmiːtɪŋ/	
melody	/ˈmelədi/	
melodious	/məˈ loudiəs/	
melon	/ˈmelən/	
melt	/melt/	
member	/ˈmembər/	
membership	/ˈmembərʃɪp/	
memorandum	/ ˌ meməˈ rændəm/	
memo	/ˈmemou/	
memorial	/məˈ m0ːriəl/	
memory	/ˈmeməri/	
memorize	/ˈmeməraɪz/	
memorise	/ˈmeməraɪz/	
menace	/ˈmenəs/	
mend	/mend/	
mental	/ˈmentəl/	
mentality	/menˈtæləti/	
mention	/ˈmenʃən/	
mentor	/ˈment0ːr/	
menu	/ˈmenjuː/	
merchandise	/ˈm3ːrtʃəndaɪs/	
merchant	/ˈm3ːrtʃənt/	
mercury	/ˈm3ːrkjəri/	
mercy	/ˈm3ːrsi/	
merciful	/ˈm3ːrsɪfəl/	
mere	/mɪr/	
merely	/ˈmɪrli/	
merge	/m3ːrd3/	
merger	/ˈm3ːrd3ər/	
merit	/ˈmerɪt/	
meritorious	/ ˌ merɪ ˈt0ːriəs/	
merry	/ˈmeri/	
merriment	/ˈmerimənt/	
mess	/mes/	
messy	/ˈmesi/	
message	/ˈmesɪd3/	
messenger	/ˈmesɪnd3ər/	
metabolism	/məˈtæbəlɪzəm/	
metabolic	/ ˌ metəˈbɑːlɪk/	
metal	/ˈmetəl/	
metallic	/məˈtælɪk/	
metaphor	/ˈmetəf0ːr/	
metaphorical	/ ˌ metə ˈf0ːrɪkəl/	
meter	/ˈmiːtər/	
metre	/ˈmiːtər/	
metric	/ˈmetrɪk/	
method	/ˈmeəəd/	
methodical	/məˈəɑːdɪkəl/	
methodology	/ˌmeəə ˈdɑːlədʒi/	
meticulous	/məˈtɪkjələs/	
metro	/ˈmetroʊ/	
metropolitan	/ˌmetrəˈpɑːlɪtən/	
microphone	/ˈmaɪkrəfoʊn/	
microscope	/ˈmaɪkrəskoʊp/	
microscopic	/ˌmaɪkrəˈskɑːpɪk/	
microwave	/ˈmaɪkrəweɪv/	
microwavable	/ˈmaɪkrəweɪvəbəl/	
midday	/ ˌ mɪdˈdeɪ/	
middle	/ˈmɪdəl/	
middle-class	/ ˌ mɪdəl ˈ klæs/	
midnight	/ˈmɪdnaɪt/	
midst	/mɪdst/	
midwife	/ˈmɪdwaɪf/	
might	/maɪt/	
mighty	/ˈmaɪti/	
migrate	/ˈmaɪɡreɪt/	
mild	/maɪld/	
migration	/maɪˈɡreɪʃən/	
migrant	/ˈmaɪɡrənt/	
mile	/maɪl/	
mileage	/ˈmaɪlɪdʒ/	
milestone	/ˈmaɪlstoʊn/	
militant	/ˈmɪlɪtənt/	
military	/ˈmɪlɪteri/	
militancy	/ˈmɪlɪtənsi/	
militia	/məˈ lɪʃə/	
milk	/mɪlk/	
milky	/ˈmɪlki/	
mill	/mɪl/	
millimeter	/ˈmɪlimiːtər/	
millimetre	/ˈmɪlimiːtər/	
million	/ˈmɪljən/	
mind	/maɪnd/	
millionaire	/ˌmɪljə ˈ ner/	
mindset	/ˈmaɪndset/	
mine	/maɪn/	
mineral	/ˈmɪnərəl/	
mining	/ˈmaɪnɪŋ/	
minimal	/ˈmɪnɪməl/	
minimize	/ˈmɪnɪmaɪz/	
minimise	/ˈmɪnɪmaɪz/	
mingle	/ˈmɪŋɡəl/	
miniature	/ˈmɪnɪətʃər/	
minimum	/ˈmɪnɪməm/	
minister	/ˈmɪnɪstər/	
ministry	/ˈmɪnɪstri/	
ministerial	/ ˌ mɪnɪ ˈstɪriəl/	
minor	/ˈmaɪnər/	
minority	/maɪ ˈ nɔːrəti/	
mint	/mɪnt/	
minus	/ˈmaɪnəs/	
minute	/ˈmɪnɪt/	
miracle	/ˈmɪrəkəl/	
miraculous	/mɪˈ rækjələs/	
mirror	/ˈmɪrər/	
misery	/ˈmɪzəri/	
miserable	/ˈmɪzərəbəl/	
misfortune	/mɪsˈfɔːrtʃən/	
mislead	/mɪs ˈliːd/	
misleading	/mɪs ˈliːdɪŋ/	
miss	/mɪs/	
missile	/ˈmɪsəl/	
missing	/ˈmɪsɪŋ/	
mission	/ˈmɪʃən/	
missionary	/ˈmɪʃəneri/	
mist	/mɪst/	
misty	/ˈmɪsti/	
mistake	/mɪˈsteɪk/	
mistaken	/mɪˈsteɪkən/	
mister	/ˈmɪstər/	
mistress	/ˈmɪstrəs/	
misunderstand	/ ˌ mɪsʌndərˈstænd/	
misunderstanding	/ˌmɪsʌndərˈstændɪŋ/	
mix	/mɪks/	
mixture	/ˈmɪkstʃər/	
mixer	/ˈmɪksər/	
moan	/moʊn/	
mobile	/ˈmoʊbəl/ or / ˈ moʊ	
mobilize	/bˈiml/oʊbɪlaɪz/	
mobilise	/ˈmoʊbɪlaɪz/	
mock	/mɑːk/	
mode	/moʊd/	
model	/ˈmɑːdəl/	
moderate	/ˈmɑːdərət/ (adj./n.) /ˈmɑːdəreɪt/ (v.)	
moderation	/ˌmɑːdə ˈreɪʃən/	
moderator	/ˈmɑːdəreɪtər/	
modern	/ˈmɑːdərn/	
modernize	/ˈmɑːdərnaɪz/	
modernise	/ˈmɑːdərnaɪz/	
modernization	/ˌmɑːdərnaɪˈzeɪʃən/	
modernisation	/ˌmɑːdərnaɪˈzeɪʃən/	
modest	/ˈmɑːdɪst/	
modesty	/ˈmɑːdɪsti/	
modify	/ˈmɑːdɪfaɪ/	
modification	/ˌmɑːdɪfɪˈ keɪʃən/	
modifier	/ˈmɑːdɪfaɪər/	
moist	/mɔɪst/	
moisture	/ˈmɔɪstʃər/	
mold	/moʊld/	
mould	/moʊld/	
moldy	/ˈmoʊldi/	
mouldy	/ˈmoʊldi/	
molecule	/ˈmɑːlɪkjuːl/	
molecular	/məˈ lekjələr/	
mom	/mɑːm/	
mommy	/ˈmɑːmi/	
moment	/ˈmoʊmənt/	
momentary	/ˈmoʊmənteri/	
momentarily	/ ˌ moʊmənˈterəli/	
momentum	/moʊˈ mentəm/	
momentous	/moʊˈ mentəs/	
monarchy	/ˈmɑːnərki/	
monarch	/ˈmɑːnərk/	
monday	/ˈmʌndeɪ/	
monetary	/ˈmɑːnɪteri/	
money	/ˈmʌni/	
monitor	/ˈmɑːnɪtər/	
monkey	/ˈmʌŋki/	
monopoly	/məˈ nɑːpəli/	
monopolize	/məˈ nɑːpəlaɪz/	
monopolise	/məˈ nɑːpəlaɪz/	
monotonous	/məˈ nɑːtənəs/	
monotony	/məˈ nɑːtəni/	
monster	/ˈmɑːnstər/	
monstrous	/ˈmɑːnstrəs/	
month	/mʌnə/	
monthly	/ˈmʌnəli/	
monument	/ˈmɑːnj umənt/	
monumental	/ˌmɑːnju ˈ mentəl/	
mood	/muːd/	
moody	/ˈmuːdi/	
moon	/muːn/	
mop	/mɑːp/	
moral	/ˈmɔːrəl/	
morale	/məˈ ræl/	
more	/mɔːr/	
moreover	/mɔːrˈoʊvər/	
morning	/ˈmɔːrnɪŋ/	
mortal	/ˈmɔːrtəl/	
mortality	/mɔːrˈtæləti/	
mortgage	/ˈmɔːrɡɪdʒ/	
mosquito	/məˈskiːtoʊ/	
most	/moʊst/	
mostly	/ˈmoʊstli/	
motel	/moʊˈtel/	
mother	/ˈmʌðər/	
motherly	/ˈmʌðərli/	
motion	/ˈmoʊʃən/	
motivate	/ˈmoʊtɪveɪt/	
motivation	/ˌmoʊtɪˈveɪʃən/	
motive	/ˈmoʊtɪv/	
motor	/ˈmoʊtər/	
motorway	/ˈmoʊtərweɪ/	
mount	/maʊnt/	
mountain	/ˈmaʊntən/	
mounting	/ˈmaʊntɪŋ/	
mountainous	/ˈmaʊntənəs/	
mourn	/mɔːrn/	
mourning	/ˈmɔːrnɪŋ/	
mouse	/maʊs/	
mouth	/maʊə/	
mouthful	/ˈmaʊəfʊl/	
move	/muːv/	
movie	/ˈmuːvi/	
movement	/ˈmuːvmənt/	
mow	/moʊ/	
much	/mʌtʃ/	
mud	/mʌd/	
mug	/mʌɡ/	
mule	/mjuːl/	
multilateral	/ ˌ mʌltiˈ lætərəl/	
multiple	/ˈmʌltɪpəl/	
multiply	/ˈmʌltɪplaɪ/	
multiplication	/ˌmʌltɪplɪ ˈkeɪʃən/	
multitude	/ˈmʌltɪtuːd/	
municipal	/mjuːˈ nɪsɪpəl/	
municipality	/mjuːˌ nɪsɪˈ pæləti/	
murder	/ˈmɜːrdər/	
murderous	/ˈmɜːrdərəs/	
murmur	/ˈmɜːrmər/	
muscle	/ˈmʌsəl/	
muscular	/ˈmʌskjələr/	
museum	/mjuːˈziːəm/	
mushroom	/ˈmʌʃrʊm/	
music	/ˈmjuːzɪk/	
musical	/ˈmjuːzɪkəl/	
musician	/mjuːˈzɪʃən/	
must	/mʌst/	
mute	/mjuːt/	
mutter	/ˈmʌtər/	
mutual	/ˈmjuːtʃuəl/	
my	/maɪ/	
myself	/maɪˈself/	
mystery	/ˈmɪstəri/	
mysterious	/mɪ ˈstɪriəs/	
myth	/mɪə/	
mythical	/ˈmɪəɪkəl/	
mythology	/mɪˈəɑːlədʒi/	
nail	/neɪl/	
naive	/naɪ ˈ iːv/	
naivety	/naɪ ˈ iːvəti/	
naked	/ˈneɪkɪd/	
name	/neɪm/	
namely	/ˈneɪmli/	
nap	/næp/	
napkin	/ˈnæpkɪn/	
narrate	/ˈnæreɪt/	
narration	/nəˈ reɪʃən/	
narrative	/ˈnærətɪv/	
narrator	/næˈ reɪtər/ or /ˈnærət ər/	
narrow	/ˈnæroʊ/	
narrowly	/ˈnæroʊli/	
nasty	/ˈnæsti/	
nation	/ˈneɪʃən/	
nationwide	/ˌneɪʃənˈwaɪd/	
native	/ˈneɪtɪv/	
nature	/ˈneɪtʃər/	
naughty	/ˈnɔːti/	
navigate	/ˈnævɪɡeɪt/	
navigation	/ˌnævɪˈɡeɪʃən/	
navy	/ˈneɪvi/	
naval	/ˈneɪvəl/	
near	/nɪr/	
nearby	/ ˌ nɪr ˈbaɪ/	
neat	/niːt/	
necessary	/ˈnesəseri/	
necessarily	/ ˌ nesəˈserəli/	
necessitate	/nɪ ˈsesɪteɪt/	
necessity	/nɪ ˈsesəti/	
neck	/nek/	
necklace	/ˈnekləs/	
need	/niːd/	
needy	/ˈniːdi/	
needle	/ˈniːdəl/	
negate	/nɪ ˈɡeɪt/	
negation	/nɪˈɡeɪʃən/	
negative	/ˈneɡətɪv/	
neglect	/nɪ ˈɡlekt/	
neglectful	/nɪ ˈɡlektfəl/	
negligent	/ˈneɡlɪd3ənt/	
negligence	/ˈneɡlɪd3əns/	
negligible	/ˈneɡlɪd3əbəl/	
negotiate	/nɪˈɡouʃieɪt/	
negotiation	/nɪˌɡouʃi ˈeɪʃən/	
negotiable	/nɪˈɡouʃiəbəl/	
neighbor	/ˈneɪbər/	
neighbour	/ˈneɪbər/	
neighborhood	/ˈneɪbərhud/	
neighbourhood	/ˈneɪbərhud/	
neither	/ˈnaɪŎər/ or /ˈniːŎər/	
nephew	/ˈnefjuː/	
nerve	/n3ːrv/	
nervous	/ˈn3ːrvəs/	
nest	/nest/	
net	/net/	
network	/ˈnetw3ːrk/	
networking	/ˈnetw3ːrkɪŋ/	
neutral	/ˈnuːtrəl/	
neutrality	/nuː ˈtræləti/	
neutralize	/ˈnuːtrəlaɪz/	
neutralise	/ˈnuːtrəlaɪz/	
never	/ˈnevər/	
nevertheless	/ ˌ nevərŎəˈles/	
new	/nuː/	
news	/nuːz/	
newspaper	/ˈnuːzpeɪpər/	
next	/nekst/	
nice	/naɪs/	
nicety	/ˈnaɪsəti/	
nickel	/ˈnɪkəl/	
nickname	/ˈnɪkneɪm/	
niece	/niːs/	
night	/naɪt/	
nightly	/ˈnaɪtli/	
nightmare	/ˈnaɪtmer/	
nil	/nɪl/	
nine	/naɪn/	
nineteen	/ ˌ naɪn ˈtiːn/	
ninety	/ˈnaɪnti/	
ninth	/naɪnə/	
nitrogen	/ˈnaɪtrəd3ən/	
no	/nou/	
noble	/ˈnoubəl/	
nobility	/nou ˈbɪləti/	
nobody	/ˈnoubɑːdi/	
nod	/nɑːd/	
noise	/n0ɪz/	
noisy	/ˈn0ɪzi/	
nominal	/ˈnɑːmɪnəl/	
nominate	/ˈnɑːmɪneɪt/	
nomination	/ˌnɑːmɪˈ neɪʃən/	
nominee	/ ˌ nɑːmɪ ˈ niː/	
none	/nΛn/	
nonetheless	/ ˌ nΛnŎəˈ les/	
nonsense	/ˈnɑːnsens/	
noodle	/ˈnuːdəl/	
noon	/nuːn/	
nor	/n0ːr/	
norm	/n0ːrm/	
normal	/ˈn0ːrməl/	
normally	/ˈn0ːrməli/	
normalize	/ˈn0ːrməlaɪz/	
normalise	/ˈn0ːrməlaɪz/	
normalization	/ˌn0ːrməlaɪˈzeɪʃən/	
normalisation	/ˌn0ːrməlaɪˈzeɪʃən/	
north	/n0ːrə/	
northeast	/ ˌ n0ːrəˈiːst/	
northwest	/ ˌ n0ːrəˈwest/	
northern	/ˈn0ːrŎərn/	
northeastern	/ ˌ n0ːrəˈiːstərn/	
northwestern	/ ˌ n0ːrəˈwestərn/	
nose	/nouz/	
nosy	/ˈnouzi/	
not	/nɑːt/	
note	/nout/	
notebook	/ˈnoutbuk/	
noteworthy	/ˈnoutw3ːrŎi/	
nothing	/ˈnΛəɪŋ/	
notice	/ˈnoutɪs/	
noticeable	/ˈnoutɪsəbəl/	
notify	/ˈnoutɪfaɪ/	
notification	/ˌnoutɪfɪˈ keɪʃən/	
notion	/ˈnoʊʃən/	
notional	/ˈnoʊʃənəl/	
notorious	/noʊˈtɔːriəs/	
notoriety	/ ˌ noʊtəˈraɪəti/	
notwithstanding	/ˌnɑːtwɪəˈstændɪŋ/	
noun	/naʊn/	
nourish	/ˈnɜːrɪʃ/	
nourishment	/ˈnɜːrɪʃmənt/	
novel	/ˈnɑːvəl/	
novelist	/ˈnɑːvəlɪst/	
novelty	/ˈnɑːvəlti/	
november	/noʊˈvembər/	
now	/naʊ/	
nowadays	/ˈnaʊədeɪz/	
nowhere	/ˈnoʊwer/	
nuclear	/ˈnuːkliər/	
nude	/nuːd/	
nudity	/ˈnuːdəti/	
nuisance	/ˈnuːsəns/	
numb	/nʌm/	
number	/ˈnʌmbər/	
numerical	/nuːˈ merɪkəl/	
numerous	/ˈnuːmərəs/	
nurse	/nɜːrs/	
nursery	/ˈnɜːrsəri/	
nurture	/ˈnɜːrtʃər/	
nut	/nʌt/	
nutrition	/nuː ˈtrɪʃən/	
nutrient	/ˈnuːtriənt/	
oak	/oʊk/	
oar	/ɔːr/	
oath	/oʊə/	
obese	/oʊˈbiːs/	
obesity	/oʊ ˈbiːsəti/	
obey	/ə ˈbeɪ/	
object	/ˈɑːbdʒɪkt/ (n.) /əbˈdʒ ekt/ (v.)	
obedient	/ə ˈbiːdiənt/	
obedience	/ə ˈbiːdiəns/	
objection	/əbˈdʒekʃən/	
objective	/əbˈd3ektɪv/	
oblige	/ə ˈblaɪd3/	
obligation	/ˌɑːblɪ ˈɡeɪʃən/	
obliged	/ə ˈblaɪd3d/	
obligatory	/ə ˈblɪɡət0ːri/	
obscene	/əbˈsiːn/	
obscenity	/əbˈsenəti/	
obscure	/əbˈskjur/	
obscurity	/əbˈskjurəti/	
observatory	/əbˈz3ːrvət0ːri/	
observation	/ˌɑːbzərˈveɪʃən/	
observer	/əbˈz3ːrvər/	
observant	/əbˈz3ːrvənt/	
observe	/əbˈz3ːrv/	
obsess	/əbˈses/	
obsession	/əbˈseʃən/	
obsessive	/əbˈsesɪv/	
obstacle	/ˈɑːbstəkəl/	
obstruct	/əbˈstrΛkt/	
obstruction	/əbˈstrΛkʃən/	
obtain	/əbˈteɪn/	
obtainment	/əbˈteɪnmənt/	
obvious	/ˈɑːbviəs/	
obviously	/ˈɑːbviəsli/	
occasion	/ə ˈ keɪ3ən/	
occasional	/ə ˈ keɪ3ənəl/	
occasionally	/ə ˈ keɪ3ənəli/	
occupation	/ˌɑːkju ˈpeɪʃən/	
occupational	/ˌɑːkju ˈpeɪʃənəl/	
occupancy	/ˈɑːkjəpənsi/	
occupy	/ˈɑːkj upaɪ/	
occur	/ə ˈ k3ːr/	
occurrence	/ə ˈ k3ːrəns/	
ocean	/ˈouʃən/	
oceanic	/ˌouʃi ˈænɪk/	
o'clock	/ə ˈ klɑːk/	
october	/ɑːk ˈtoubər/	
odd	/ɑːd/	
oddity	/ˈɑːdəti/	
odds	/ɑːdz/	
odor	/ˈoudər/	
odour	/ˈoudər/	
odorous	/ˈoudərəs/	
of	/Λv/ or /əv/	
off	/0ːf/	
offend	/ə ˈfend/	
offender	/ə ˈfendər/	
offer	/ˈ0ːfər/	
offering	/ˈ0ːfərɪŋ/	
office	/ˈ0ːfɪs/	
officer	/ˈ0ːfɪsər/	
official	/ə ˈfɪʃəl/	
offset	/ˈ0ːfset/	
offspring	/ˈ0ːfsprɪŋ/	
often	/ˈ0ːfən/ or /ˈ0ːftən/	
oftentimes	/ˈ0ːfəntaɪmz/	
oil	/0ɪl/	
oily	/ˈ0ɪli/	
okay	/ouˈ keɪ/	
old	/ould/	
old-fashioned	/ ˌould ˈfæʃənd/	
olive	/ˈɑːlɪv/	
olympic	/ə ˈlɪmpɪk/	
omit	/ə ˈ mɪt/	
olympics	/ə ˈlɪmpɪks/	
olympiad	/ə ˈlɪmpiæd/	
on	/ɑːn/	
omission	/ə ˈ mɪʃən/	
once	/wΛns/	
one	/wΛn/	
oneself	/wΛnˈself/	
ongoing	/ˈɑːnɡouɪŋ/	
onion	/ˈΛnjən/	
online	/ ˌɑːn ˈlaɪn/	
only	/ˈounli/	
onset	/ˈɑːnset/	
onto	/ˈɑːntə/ or /ˈ0ːntuː/	
onward	/ˈɑːnwərd/	
opaque	/ouˈ peɪk/	
open	/ˈoupən/	
opener	/ˈoupənər/	
opening	/ˈoupənɪŋ/	
openly	/ˈoupənli/	
opera	/ˈɑːprə/ or /ˈɑːpərə/	
operation	/ˌɑːpəˈreɪʃən/	
operational	/ˌɑːpəˈreɪʃənəl/	
operator	/ˈɑːpəreɪtər/	
operate	/ˈɑːpəreɪt/	
operative	/ˈɑːpərətɪv/ or / ˈɑːpə reɪtɪv/	
opinion	/ə ˈ pɪnjən/	
opportunity	/ˌɑːpərˈtuːnəti/	
oppose	/ə ˈ poʊz/	
opposition	/ˌɑːpəˈzɪʃən/	
opponent	/ə ˈ poʊnənt/	
opposite	/ˈɑːpəzɪt/	
oppress	/ə ˈ pres/	
oppression	/ə ˈ preʃən/	
oppressive	/ə ˈ presɪv/	
opt	/ɑːpt/	
option	/ˈɑːpʃən/	
optional	/ˈɑːpʃənəl/	
optic	/ˈɑːptɪk/	
optical	/ˈɑːptɪkəl/	
optimism	/ˈɑːptɪmɪzəm/	
optimistic	/ˌɑːptɪˈ mɪstɪk/	
optimist	/ˈɑːptɪmɪst/	
optimum	/ˈɑːptɪməm/	
optimal	/ˈɑːptɪməl/	
or	/ɔːr/	
orbital	/ˈɔːrbɪtəl/	
oral	/ˈɔːrəl/	
orange	/ˈɔːrɪndʒ/	
orbit	/ˈɔːrbɪt/	
orchestra	/ˈɔːrkɪstrə/	
ordeal	/ɔːr ˈdiːl/	
order	/ˈɔːrdər/	
orderly	/ˈɔːrdərli/	
organization	/ˌɔːrɡənaɪˈzeɪʃən/	
organisation	/ˌɔːrɡənaɪˈzeɪʃən/	
organizational	/ˌɔːrɡənaɪˈzeɪʃənəl/	
organisational	/ˌɔːrɡənaɪˈzeɪʃənəl/	
orientation	/ˌɔːriənˈteɪʃən/	
ordinary	/ˈɔːrdəneri/	
oriental	/ ˌɔːri ˈentəl/	
ore	/ɔːr/	
organ	/ˈ0ːrɡən/	
organic	/0ːrˈɡænɪk/	
organism	/ˈ0ːrɡənɪzəm/	
organize	/ˈ0ːrɡənaɪz/	
organise	/ˈ0ːrɡənaɪz/	
orient	/ˈ0ːrient/	
origin	/ˈ0ːrɪd3ɪn/	
original	/ə ˈ rɪd3ənəl/	
originality	/ə ˌ rɪd3ɪˈnæləti/	
originate	/ə ˈ rɪd3ɪneɪt/	
ornament	/ˈ0ːrnəmənt/	
ornamental	/ ˌ0ːrnəˈ mentəl/	
orphan	/ˈ0ːrfən/	
orphanage	/ˈ0ːrfənɪd3/	
orthodox	/ˈ0ːrəədɑːks/	
other	/ˈΛŎər/	
otherwise	/ˈΛŎərwaɪz/	
ounce	/auns/	
our	/aur/	
ours	/aurz/	
ourselves	/aurˈselvz/	
out	/aut/	
outbreak	/ˈautbreɪk/	
outcome	/ˈautkΛm/	
outdated	/ ˌaut ˈdeɪtɪd/	
outdoor	/ˈautd0ːr/	
outdoors	/ ˌaut ˈd0ːrz/	
outer	/ˈautər/	
outfit	/ˈautfɪt/	
outgoing	/ˈautɡouɪŋ/	
outing	/ˈautɪŋ/	
outlaw	/ˈautl0ː/	
outlet	/ˈautlet/	
outline	/ˈautlaɪn/	
outlook	/ˈautluk/	
output	/ˈautput/	
outrage	/ˈautreɪd3/	
outrageous	/autˈ reɪd3əs/	
outset	/ˈautset/	
outside	/ ˌautˈsaɪd/	
outsider	/ ˌaʊtˈsaɪdər/	
outskirts	/ˈaʊtskɜːrts/	
outstanding	/aʊtˈstændɪŋ/	
outward	/ˈaʊtwərd/	
outwards	/ˈaʊtwərdz/	
oval	/ˈoʊvəl/	
oven	/ˈʌvən/	
over	/ˈoʊvər/	
overall	/ ˌoʊvərˈɔːl/	
overcoat	/ˈoʊvərkoʊt/	
overcome	/ ˌoʊvərˈ kʌm/	
overdue	/ ˌoʊvərˈduː/	
overflow	/ˌoʊvərˈfloʊ/ (v.) / ˈoʊv ərfloʊ/ (n.)	
overhaul	/ˌoʊvərˈ hɔːl/ (v.) / ˈoʊv ərhɔːl/ (n.)	
overhead	/ ˌoʊvərˈ hed/(adv./adj.) / ˈoʊvə	
overhear	/ ˌoʊvərˈ hɪr/	
overlap	/ˌoʊvərˈlæp/ (v.) / ˈoʊ vərlæp/ (n.)	
overlook	/ ˌoʊvərˈlʊk/	
overnight	/ ˌoʊvərˈ naɪt/	
override	/ ˌoʊvərˈ raɪd/	
overseas	/ ˌoʊvərˈsiːz/	
oversee	/ ˌoʊvərˈsiː/	
oversight	/ˈoʊvərsaɪt/	
overstate	/ ˌoʊvərˈsteɪt/	
overt	/oʊˈvɜːrt/	
overtake	/ ˌoʊvərˈteɪk/	
overthrow	/ˌoʊvərˈəroʊ/ (v.) / ˈoʊ vərəroʊ/ (n.)	
overtime	/ˈoʊvərtaɪm/	
overturn	/ ˌoʊvərˈtɜːrn/	
overwhelm	/ ˌoʊvərˈwelm/	
overwhelming	/ˌoʊvərˈwelmɪŋ/	
overwhelmingly	/ˌoʊvərˈwelmɪŋli/	
owe	/oʊ/	
owl	/aʊl/	
own	/oʊn/	
owner	/ˈoʊnər/	
ownership	/ˈoʊnərʃɪp/	
ox	/ɑːks/	
oxide	/ˈɑːksaɪd/	
oxygen	/ˈɑːksɪd3ən/	
ozone	/ˈouzoun/	
pace	/peɪs/	
pack	/pæk/	
package	/ˈpækɪd3/	
packet	/ˈpækɪt/	
pact	/pækt/	
pad	/pæd/	
painful	/ˈpeɪnfəl/	
paddy	/ˈpædi/	
page	/peɪd3/	
pain	/peɪn/	
paint	/peɪnt/	
painting	/ˈpeɪntɪŋ/	
painter	/ˈpeɪntər/	
pair	/per/	
palace	/ˈpæləs/	
pale	/peɪl/	
palm	/pɑːm/	
pamphlet	/ˈpæmflət/	
pan	/pæn/	
panda	/ˈpændə/	
panel	/ˈpænəl/	
panic	/ˈpænɪk/	
panorama	/ˌpænəˈ ræmə/	
pant	/pænt/	
panoramic	/ˌpænəˈ ræmɪk/	
pants	/pænts/	
paper	/ˈpeɪpər/	
paperback	/ˈpeɪpərbæk/	
parachute	/ˈpærəʃuːt/	
parade	/pəˈ reɪd/	
paradigm	/ˈpærədaɪm/	
paradise	/ˈpærədaɪs/	
paradox	/ˈpærədɑːks/	
paragraph	/ˈpærəɡræf/	
parallel	/ˈpærəlel/	
paralyze	/ˈpærəlaɪz/	
paralyse	/ˈpærəlaɪz/	
parameter	/pəˈ ræmɪtər/	
parental	/pəˈ rentəl/	
parenting	/ˈperəntɪŋ/	
parasite	/ˈpærəsaɪt/	
parcel	/ˈpɑːrsəl/	
pardon	/ˈpɑːrdən/	
parent	/ˈperənt/	
parish	/ˈpærɪʃ/	
park	/pɑːrk/	
parking	/ˈpɑːrkɪŋ/	
parliament	/ˈpɑːrləmənt/	
parliamentary	/ˌpɑːrləˈ mentəri/	
parole	/pəˈ roʊl/	
partial	/ˈpɑːrʃəl/	
partially	/ˈpɑːrʃəli/	
parrot	/ˈpærət/	
part	/pɑːrt/	
participate	/pɑːrˈtɪsɪpeɪt/	
participation	/pɑːrˌtɪsɪ ˈ peɪʃən/	
participant	/pɑːrˈtɪsɪpənt/	
particle	/ˈpɑːrtɪkəl/	
particular	/pərˈtɪkjələr/	
particularly	/pər ˈtɪkjələrli/	
partisan	/ˈpɑːrtəzən/ or /ˌpɑːrtɪ ˈzæn/	
partnership	/ˈpɑːrtnərʃɪp/	
partition	/pɑːrˈtɪʃən/	
partly	/ˈpɑːrtli/	
partner	/ˈpɑːrtnər/	
party	/ˈpɑːrti/	
passionate	/ˈpæʃənət/	
pass	/pæs/	
passage	/ˈpæsɪdʒ/	
passenger	/ˈpæsɪndʒər/	
passerby	/ˌpæsərˈbaɪ/	
passion	/ˈpæʃən/	
passive	/ˈpæsɪv/	
passport	/ˈpæspɔːrt/	
password	/ˈpæswɜːrd/	
past	/pæst/	
pasta	/ˈpɑːstə/	
paste	/peɪst/	
pastime	/ˈpæstaɪm/	
pastry	/ˈpeɪstri/	
pasture	/ˈpæstʃər/	
pat	/pæt/	
patch	/pætʃ/	
patent	/ˈpætənt/	
path	/pæə/	
pathetic	/pəˈəetɪk/	
patient	/ˈpeɪʃənt/	
patience	/ˈpeɪʃəns/	
patriot	/ˈpeɪtriət/ or /ˈpætriət/	
patriotic	/ˌpeɪtri ˈɑːtɪk/	
patriotism	/ˈpeɪtriətɪzəm/ or/ˈpætriətɪzəm/	
patrol	/pəˈtroʊl/	
patron	/ˈpeɪtrən/	
pattern	/ˈpætərn/	
patronize	/ˈpeɪtrənaɪz/	
patronise	/ˈpeɪtrənaɪz/	
patronage	/ˈpætrənɪdʒ/	
pause	/pɔːz/	
pave	/peɪv/	
pavement	/ˈpeɪvmənt/	
paw	/pɔː/	
pay	/peɪ/	
payment	/ˈpeɪmənt/	
payroll	/ˈpeɪroʊl/	
pea	/piː/	
peace	/piːs/	
peaceful	/ˈpiːsfəl/	
peach	/piːtʃ/	
peak	/piːk/	
peanut	/ˈpiːnʌt/	
pear	/per/	
pearl	/pɜːrl/	
peasant	/ˈpezənt/	
peck	/pek/	
peculiar	/pɪ ˈ kjuːliər/	
peculiarity	/pɪ ˌ kjuːli ˈærəti/	
pedal	/ˈpedəl/	
peddle	/ˈpedəl/	
pedestrian	/pəˈdestriən/	
peel	/piːl/	
peep	/piːp/	
peer	/pɪr/	
peg	/peɡ/	
pen	/pen/	
penalty	/ˈpenəlti/	
penalize	/ˈpiːnəlaɪz/	
penalise	/ˈpiːnəlaɪz/	
pencil	/ˈpensəl/	
pending	/ˈpendɪŋ/	
pendulum	/ˈpendʒələm/	
penetrate	/ˈpenətreɪt/	
penetration	/ˌpenəˈtreɪʃən/	
penguin	/ˈpeŋɡwɪn/	
peninsula	/pəˈ nɪnsələ/	
penny	/ˈpeni/	
pension	/ˈpenʃən/	
pensioner	/ˈpenʃənər/	
people	/ˈpiːpəl/	
pepper	/ˈpepər/	
per	/pɜːr/	
perceive	/pərˈsiːv/	
perception	/pərˈsepʃən/	
perceptive	/pərˈseptɪv/	
percent	/pərˈsent/	
percentage	/pərˈsentɪdʒ/	
perch	/pɜːrtʃ/	
perfect	/ˈpɜːrfɪkt/	
perfection	/pərˈfekʃən/	
perform	/pərˈfɔːrm/	
performance	/pərˈfɔːrməns/	
performer	/pərˈfɔːrmər/	
perfume	/pərˈfjuːm/ (n.) /pə r ˈfjuːm/ (v.)	
perhaps	/pərˈ hæps/	
peril	/ˈperəl/	
perilous	/ˈperələs/	
period	/ˈpɪriəd/	
periodic	/ˌpɪri ˈɑːdɪk/	
periodical	/ˌpɪri ˈɑːdɪkəl/	
perish	/ˈperɪʃ/	
permanent	/ˈpɜːrmənənt/	
permanence	/ˈpɜːrmənəns/	
permeate	/ˈpɜːrmieɪt/	
permeation	/ˌpɜːrmiˈeɪʃən/	
permit	/pərˈ mɪt/ (v.) / ˈ pɜːrmɪ t/ (n.)	
permission	/pərˈ mɪʃən/	
permissible	/pərˈ mɪsəbəl/	
permissive	/pərˈ mɪsɪv/	
perpetual	/pərˈ petʃuəl/	
perpetuate	/pərˈ petʃueɪt/	
perplex	/pərˈ pleks/	
perplexity	/pərˈ pleksəti/	
persecute	/ˈpɜːrsɪkjuːt/	
persecution	/ˌpɜːrsɪ ˈkjuːʃən/	
persevere	/ˌpɜːrsɪ ˈvɪr/	
perseverance	/ˌpɜːrsɪ ˈvɪrəns/	
persist	/pərˈsɪst/	
persistent	/pərˈsɪstənt/	
persistence	/pərˈsɪstəns/	
person	/ˈpɜːrsən/	
personal	/ˈpɜːrsənəl/	
personally	/ˈpɜːrsənəli/	
personality	/ˌpɜːrsəˈ næləti/	
personnel	/ˌpɜːrsəˈ nel/	
perspective	/pərˈspektɪv/	
persuade	/pərˈsweɪd/	
persuasion	/pərˈsweɪʒən/	
persuasive	/pərˈsweɪsɪv/	
pessimism	/ˈpesɪmɪzəm/	
pessimistic	/ˌpesɪˈmɪstɪk/	
pessimist	/ˈpesɪmɪst/	
pest	/pest/	
pesticide	/ˈpestɪsaɪd/	
pet	/pet/	
petition	/pəˈtɪʃən/	
petitioner	/pəˈtɪʃənər/	
petrochemical	/ˌpetroʊˈ kemɪkəl/	
petroleum	/pəˈtroʊliəm/	
petty	/ˈpeti/	
pharmacy	/ˈfɑːrməsi/	
pharmaceutical	/ ˌfɑːrmə ˈsuːtɪkəl/	
phase	/feɪz/	
phenomenon	/fɪˈ nɑːmɪnən/	
philosophy	/fɪ ˈ lɑːsəfi/	
philosophical	/ ˌfɪlə ˈsɑːfɪkəl/	
philosopher	/fɪ ˈ lɑːsəfər/	
photo	/ˈfoʊtoʊ/	
photograph	/ˈfoʊtəɡræf/	
photographic	/ˌfoʊtəˈɡræfɪk/	
photographer	/fəˈtɑːɡrəfər/	
photography	/fə ˈtɑːɡrəfi/	
phrase	/freɪz/	
phrasal	/ˈfreɪzəl/	
physical	/ˈfɪzɪkəl/	
physicist	/ˈfɪzɪsɪst/	
physician	/fɪ ˈzɪʃən/	
physics	/ˈfɪzɪks/	
physiological	/ˌfɪziə ˈlɑːdʒɪkəl/	
pianist	/ˈpiːənɪst/	
piano	/piˈænoʊ/	
pick	/pɪk/	
picky	/ˈpɪki/	
picnic	/ˈpɪknɪk/	
picturesque	/ˌpɪktʃə ˈ resk/	
picture	/ˈpɪktʃər/	
pie	/paɪ/	
pilgrimage	/ˈpɪlɡrɪmɪdʒ/	
piece	/piːs/	
pierce	/pɪrs/	
pig	/pɪɡ/	
pigeon	/ˈpɪdʒɪn/	
pile	/paɪl/	
pilgrim	/ˈpɪlɡrɪm/	
pill	/pɪl/	
piracy	/ˈpaɪrəsi/	
pillar	/ˈpɪlər/	
pillow	/ˈpɪloʊ/	
pilot	/ˈpaɪlət/	
pin	/pɪn/	
pinch	/pɪntʃ/	
pine	/paɪn/	
pink	/pɪŋk/	
pint	/paɪnt/	
pioneer	/ˌpaɪəˈnɪr/	
pipe	/paɪp/	
pirate	/ˈpaɪrət/	
pistol	/ˈpɪstəl/	
pit	/pɪt/	
placement	/ˈpleɪsmənt/	
pitch	/pɪtʃ/	
pity	/ˈpɪti/	
pizza	/ˈpiːtsə/	
place	/pleɪs/	
plague	/pleɪɡ/	
planning	/ˈplænɪŋ/	
planner	/ˈplænər/	
plain	/pleɪn/	
plaintiff	/ˈpleɪntɪf/	
plan	/plæn/	
plane	/pleɪn/	
planetary	/ˈplænɪteri/	
planet	/ˈplænɪt/	
plant	/plænt/	
plantation	/plænˈteɪʃən/	
plastic	/ˈplæstɪk/	
plate	/pleɪt/	
plateau	/plæˈtoʊ/	
platform	/ˈplætfɔːrm/	
plausible	/ˈplɔːzəbəl/	
play	/pleɪ/	
player	/ˈpleɪər/	
playground	/ˈpleɪɡraʊnd/	
plaza	/ˈplɑːzə/	
plea	/pliː/	
plead	/pliːd/	
please	/pliːz/	
pleasure	/ˈpleʒər/	
pleasant	/ˈplezənt/	
pleasing	/ˈpliːzɪŋ/	
pledge	/pledʒ/	
plenty	/ˈplenti/	
plentiful	/ˈplentɪfəl/	
plight	/plaɪt/	
plot	/plɑːt/	
plough	/plaʊ/	
plow	/plaʊ/	
plug	/plʌɡ/	
plumber	/ˈplʌmər/	
plumbing	/ˈplʌmɪŋ/	
plunge	/plʌndʒ/	
plural	/ˈplʊrəl/	
plus	/plʌs/	
pocket	/ˈpɑːkɪt/	
podcast	/ˈpɑːdkæst/	
poem	/ˈpoʊəm/	
poetry	/ˈpoʊətri/	
poet	/ˈpoʊɪt/	
poetic	/poʊˈetɪk/	
point	/pɔɪnt/	
pointless	/ˈpɔɪntləs/	
poise	/pɔɪz/	
poised	/pɔɪzd/	
poison	/ˈpɔɪzən/	
poisonous	/ˈpɔɪzənəs/	
poke	/poʊk/	
pole	/poʊl/	
polar	/ˈpoʊlər/	
police	/pə ˈliːs/	
policeman	/pəˈliːsmən/	
policy	/ˈpɑːləsi/	
polish	/ˈpɑːlɪʃ/	
polite	/pə ˈlaɪt/	
politeness	/pəˈlaɪtnəs/	
politics	/ˈpɑːlətɪks/	
political	/pə ˈlɪtɪkəl/	
politician	/ˌpɑːlə ˈtɪʃən/	
poll	/poʊl/	
pollster	/ˈpoʊlstər/	
pollute	/pə ˈluːt/	
pollution	/pəˈluːʃən/	
pollutant	/pə ˈluːtənt/	
polytechnic	/ˌpɑːli ˈteknɪk/	
pond	/pɑːnd/	
ponder	/ˈpɑːndər/	
pool	/puːl/	
poor	/pʊr/	
poverty	/ˈpɑːvərti/	
pop	/pɑːp/	
popular	/ˈpɑːpjələr/	
popularity	/ˌpɑːpju ˈlærəti/	
population	/ˌpɑːpju ˈleɪʃən/	
populous	/ˈpɑːpjələs/	
populate	/ˈpɑːpj uleɪt/	
porcelain	/ˈpɔːrsəlɪn/	
porch	/pɔːrtʃ/	
pork	/pɔːrk/	
porridge	/ˈpɔːrɪdʒ/	
port	/pɔːrt/	
portable	/ˈpɔːrtəbəl/	
porter	/ˈpɔːrtər/	
portfolio	/pɔːrt ˈfoʊlioʊ/	
portion	/ˈpɔːrʃən/	
portray	/pɔːr ˈtreɪ/	
portrayal	/pɔːr ˈtreɪəl/	
portrait	/ˈpɔːrtrət/	
pose	/poʊz/	
posture	/ˈpɑːstʃər/	
position	/pəˈzɪʃən/	
positive	/ˈpɑːzətɪv/	
possess	/pəˈzes/	
possession	/pəˈzeʃən/	
possessive	/pəˈzesɪv/	
possible	/ˈpɑːsəbəl/	
possibility	/ˌpɑːsəˈbɪləti/	
possibly	/ˈpɑːsəbli/	
post	/poʊst/	
postage	/ˈpoʊstɪdʒ/	
postman	/ˈpoʊstmən/	
postcard	/ˈpoʊstkɑːrd/	
poster	/ˈpoʊstər/	
postpone	/poʊstˈ poʊn/	
postponement	/poʊstˈ poʊnmənt/	
pot	/pɑːt/	
potato	/pəˈteɪtoʊ/	
potent	/ˈpoʊtənt/	
potential	/pəˈtenʃəl/	
potentiality	/pəˌtenʃi ˈæləti/	
pottery	/ˈpɑːtəri/	
poultry	/ˈpoʊltri/	
pound	/paʊnd/	
pour	/pɔːr/	
powder	/ˈpaʊdər/	
power	/ˈpaʊər/	
powerful	/ˈpaʊərfəl/	
practise	/ˈpræktɪs/	
practice	/ˈpræktɪs/	
practicable	/ˈpræktɪkəbəl/	
practical	/ˈpræktɪkəl/	
practicality	/ˌpræktɪ ˈ kæləti/	
practitioner	/prækˈtɪʃənər/	
praise	/preɪz/	
pray	/preɪ/	
prayer	/preər/	
preach	/priːtʃ/	
preacher	/ˈpriːtʃər/	
precaution	/prɪ ˈ kɔːʃən/	
precautionary	/prɪ ˈ kɔːʃəneri/	
precede	/prɪ ˈsiːd/	
preceding	/prɪ ˈsiːdɪŋ/	
precedent	/ˈpresɪdənt/	
precious	/ˈpreʃəs/	
precise	/prɪ ˈsaɪs/	
precision	/prɪˈsɪʒən/	
precisely	/prɪ ˈsaɪsli/	
predator	/ˈpredətər/	
predatory	/ˈpredətɔːri/	
predecessor	/ˈpredəsesər/	
predict	/prɪ ˈdɪkt/	
prediction	/prɪˈdɪkʃən/	
predictable	/prɪ ˈdɪktəbəl/	
predominate	/prɪˈdɑːmɪneɪt/	
predominance	/prɪˈdɑːmɪnəns/	
predominant	/prɪˈdɑːmɪnənt/	
preface	/ˈprefəs/	
prefer	/prɪ ˈfɜːr/	
preferable	/ˈprefərəbəl/	
preference	/ˈprefərəns/	
preferential	/ˌprefəˈrenʃəl/	
pregnant	/ˈpreɡnənt/	
pregnancy	/ˈpreɡnənsi/	
prejudice	/ˈpredʒədɪs/	
preliminary	/prɪ ˈ lɪmɪneri/	
premature	/ˌpriːmə ˈtʃʊr/	
premier	/prɪ ˈ mɪr/ or /ˈpriːmɪr/	
premise	/ˈpremɪs/	
premium	/ˈpriːmiəm/	
preoccupy	/priː ˈɑːkj upaɪ/	
preoccupied	/priː ˈɑːkj upaɪd/	
prepare	/prɪ ˈ per/	
preparation	/ˌprepəˈ reɪʃən/	
preparatory	/prɪ ˈ pærətɔːri/	
preposition	/ˌprepəˈzɪʃən/	
prerequisite	/priː ˈ rekwəzɪt/	
prescribe	/prɪˈskraɪb/	
prescription	/prɪˈskrɪpʃən/	
present	/ˈprezənt/	
presence	/ˈprezəns/	
presentation	/ˌprezənˈteɪʃən/	
presently	/ˈprezəntli/	
preserve	/prɪ ˈzɜːrv/	
preservation	/ˌprezərˈveɪʃən/	
preservative	/prɪ ˈzɜːrvətɪv/	
preside	/prɪˈzaɪd/	
president	/ˈprezɪdənt/	
presidency	/ˈprezɪdənsi/	
presidential	/ˌprezɪˈdenʃəl/	
press	/pres/	
pressure	/ˈpreʃər/	
pressing	/ˈpresɪŋ/	
prestige	/pres ˈtiːʒ/	
prestigious	/presˈtɪdʒəs/	
presume	/prɪˈzuːm/	
presumption	/prɪˈzʌmpʃən/	
presumably	/prɪˈzuːməbli/	
pretend	/prɪˈtend/	
pretense	/prɪ ˈtens/	
pretence	/prɪ ˈtens/	
pretext	/ˈpriːtekst/	
pretty	/ˈprɪti/	
prevail	/prɪ ˈveɪl/	
prevalence	/ˈprevələns/	
prevalent	/ˈprevələnt/	
prevent	/prɪ ˈvent/	
prevention	/prɪˈvenʃən/	
preventive	/prɪˈventɪv/	
preview	/ˈpriːvjuː/	
previous	/ˈpriːviəs/	
prey	/preɪ/	
price	/praɪs/	
priceless	/ˈpraɪsləs/	
pride	/praɪd/	
proud	/praʊd/	
priest	/priːst/	
primary	/ˈpraɪmeri/	
primarily	/praɪ ˈ merəli/	
prime	/praɪm/	
primitive	/ˈprɪmɪtɪv/	
prince	/prɪns/	
princess	/prɪnˈses/ or / ˈ prɪ	
principal	/ ˈ prɪsəpəl/	
principle	/ˈprɪnsəpəl/	
print	/prɪnt/	
printer	/ˈprɪntər/	
printing	/ˈprɪntɪŋ/	
prior	/ˈpraɪər/	
priority	/praɪ ˈɔːrəti/	
prison	/ˈprɪzən/	
prisoner	/ˈprɪzənər/	
private	/ˈpraɪvɪt/	
privacy	/ˈpraɪvəsi/	
privatization	/ˌpraɪvɪtaɪˈzeɪʃən/	
privatisation	/ˌpraɪvɪtaɪˈzeɪʃən/	
privilege	/ˈprɪvəlɪdʒ/	
privileged	/ˈprɪvəlɪdʒd/	
prize	/praɪz/	
probable	/ˈprɑːbəbəl/	
probability	/ˌprɑːbə ˈbɪləti/	
probably	/ˈprɑːbəbli/	
probe	/proʊb/	
problem	/ˈprɑːbləm/	
problematic	/ˌprɑːbləˈ mætɪk/	
procedure	/prəˈsiːdʒər/	
proceed	/prə ˈsiːd/	
proceedings	/prəˈsiːdɪŋz/	
process	/ˈprɑːses/	
processor	/ˈprɑːsesər/	
procession	/prəˈseʃən/	
proclaim	/prəˈ kleɪm/	
proclamation	/ˌprɑːkləˈ meɪʃən/	
produce	/prəˈduːs/ (v.) / ˈ prɑ ːduːs/ (n.)	
production	/prəˈdʌkʃən/	
productivity	/ˌprɑːdʌk ˈtɪvəti/	
product	/ˈprɑːdʌkt/	
profession	/prəˈfeʃən/	
professional	/prəˈfeʃənəl/	
professor	/prəˈfesər/	
proficient	/prəˈfɪʃənt/	
proficiency	/prəˈfɪʃənsi/	
profile	/ˈproʊfaɪl/	
profit	/ˈprɑːfɪt/	
profitable	/ˈprɑːfɪtəbəl/	
profound	/prəˈfaʊnd/	
program	/ˈproʊɡræm/	
programme	/ˈproʊɡræm/	
progress	/ˈprɑːɡres/ (n.) /prəˈɡ res/ (v.)	
progressive	/prəˈɡresɪv/	
progression	/prəˈɡreʃən/	
prohibit	/prəˈ hɪbɪt/	
prohibition	/ˌproʊɪˈbɪʃən/	
prohibitive	/prəˈ hɪbɪtɪv/	
project	/ˈprɑːdʒekt/ (n.) /prə ˈdʒekt/ (v.)	
projector	/prəˈdʒektər/	
projection	/prəˈdʒekʃən/	
prolong	/prə ˈ lɔːŋ/	
prominent	/ˈprɑːmɪnənt/	
prominence	/ˈprɑːmɪnəns/	
promise	/ˈprɑːmɪs/	
promising	/ˈprɑːmɪsɪŋ/	
promote	/prəˈ moʊt/	
promotion	/prəˈ moʊʃən/	
prompt	/prɑːmpt/	
prone	/proʊn/	
pronoun	/ˈproʊnaʊn/	
pronounce	/prəˈ naʊns/	
pronunciation	/prəˌ nʌnsiˈeɪʃən/	
proof	/pruːf/	
proofread	/ˈpruːfriːd/	
prop	/prɑːp/	
propaganda	/ˌprɑːpəˈɡændə/	
propagate	/ˈprɑːpəɡeɪt/	
propagation	/ˌprɑːpəˈɡeɪʃən/	
propel	/prəˈ pel/	
propeller	/prəˈ pelər/	
proper	/ˈprɑːpər/	
property	/ˈprɑːpərti/	
proportion	/prəˈ pɔːrʃən/	
proportional	/prəˈ pɔːrʃənəl/	
propose	/prəˈ poʊz/	
proposal	/prəˈ poʊzəl/	
proposition	/ˌprɑːpəˈzɪʃən/	
prose	/proʊz/	
prosecute	/ˈprɑːsɪkjuːt/	
prosecution	/ˌprɑːsɪ ˈ kjuːʃən/	
prospect	/ˈprɑːspekt/	
prospective	/prəˈspektɪv/	
prosper	/ˈprɑːspər/	
prosperity	/prɑː ˈsperəti/	
prosperous	/ˈprɑːspərəs/	
protect	/prəˈtekt/	
protection	/prəˈtekʃən/	
protective	/prəˈtektɪv/	
protein	/ˈproʊtiːn/	
protest	/ˈproʊtest/ (n.) /prə ˈtest/ (v.)	
protocol	/ˈproʊtəkɔːl/	
prototype	/ˈproʊtətaɪp/	
prove	/pruːv/	
proverb	/ˈprɑːvɜːrb/	
proverbial	/prə ˈvɜːrbiəl/	
provide	/prəˈvaɪd/	
provision	/prəˈvɪʒən/	
provided	/prəˈvaɪdɪd/	
province	/ˈprɑːvɪns/	
provincial	/prəˈvɪnʃəl/	
provoke	/prəˈvoʊk/	
provocation	/ˌprɑːvəˈ keɪʃən/	
provocative	/prəˈvɑːkətɪv/	
proximate	/ˈprɑːksɪmət/	
proximity	/prɑːk ˈsɪməti/	
psychiatry	/saɪ ˈ kaɪətri/	
psychiatric	/ ˌsaɪkiˈætrɪk/	
psychiatrist	/saɪ ˈ kaɪətrɪst/	
psychology	/saɪ ˈ kɑːlədʒi/	
psychological	/ˌsaɪkəˈlɑːdʒɪkəl/	
psychologist	/saɪˈ kɑːlədʒɪst/	
pub	/pʌb/	
public	/ˈpʌblɪk/	
publicize	/ˈpʌblɪsaɪz/	
publicise	/ˈpʌblɪsaɪz/	
publicity	/pʌbˈlɪsəti/	
publicly	/ˈpʌblɪkli/	
publish	/ˈpʌblɪʃ/	
publication	/ˌpʌblɪˈkeɪʃən/	
pudding	/ˈpʊdɪŋ/	
pull	/pʊl/	
pulse	/pʌls/	
pump	/pʌmp/	
pumpkin	/ˈpʌmpkɪn/	
punch	/pʌntʃ/	
punctual	/ˈpʌŋktʃuəl/	
punctuality	/ˌpʌŋktʃu ˈæləti/	
punish	/ˈpʌnɪʃ/	
punishment	/ˈpʌnɪʃmənt/	
pupil	/ˈpjuːpəl/	
purchase	/ˈpɜːrtʃəs/	
pure	/pjʊr/	
purity	/ˈpjʊrəti/	
purify	/ˈpjʊrɪfaɪ/	
purple	/ˈpɜːrpəl/	
purpose	/ˈpɜːrpəs/	
purposeful	/ˈpɜːrpəsfəl/	
purse	/pɜːrs/	
pursue	/pərˈsuː/	
pursuit	/pərˈsuːt/	
push	/pʊʃ/	
pushy	/ˈpʊʃi/	
put	/pʊt/	
puzzlement	/ˈpʌzəlmənt/	
puzzle	/ˈpʌzəl/	
pyramid	/ˈpɪrəmɪd/	
quake	/kweɪk/	
qualify	/ˈkwɑːlɪfaɪ/	
qualification	/ˌkwɑːlɪfɪ ˈ keɪʃən/	
quality	/ˈkwɑːləti/	
qualitative	/ˈkwɑːlɪteɪtɪv/	
quantify	/ˈkwɑːntɪfaɪ/	
quantification	/ˌkwɑːntɪfɪˈkeɪʃən/	
quantity	/ˈkwɑːntəti/	
quantitative	/ˈkwɑːntɪteɪtɪv/	
quarrel	/ˈkwɑːrəl/	
quarrelsome	/ˈkwɑːrəlsəm/	
quart	/kwɔːrt/	
quarter	/ˈkwɔːrtər/	
quarterly	/ˈkwɔːrtərli/	
queen	/kwiːn/	
questionnaire	/ˌkwestʃə ˈner/	
query	/ˈkwɪri/	
quest	/kwest/	
question	/ˈkwestʃən/	
queue	/kjuː/	
quotation	/kwoʊˈteɪʃən/	
quick	/kwɪk/	
quiet	/ˈkwaɪət/	
quit	/kwɪt/	
quite	/kwaɪt/	
quiver	/ˈkwɪvər/	
quiz	/kwɪz/	
quota	/ˈkwoʊtə/	
quote	/kwoʊt/	
rabbit	/ˈræbɪt/	
racial	/ˈreɪʃəl/	
racism	/ˈreɪsɪzəm/	
racist	/ˈreɪsɪst/	
race	/reɪs/	
rack	/ræk/	
radar	/ˈreɪdɑːr/	
radiation	/ˌreɪdi ˈeɪʃən/	
radiator	/ˈreɪdieɪtər/	
radiant	/ˈreɪdiənt/	
radiate	/ˈreɪdieɪt/	
radical	/ˈrædɪkəl/	
radioactivity	/ ˌ reɪdioʊæk ˈtɪvəti/	
radio	/ˈreɪdioʊ/	
radioactive	/ ˌ reɪdioʊˈæktɪv/	
rag	/ræɡ/	
ragged	/ˈræɡɪd/	
raggedly	/ˈræɡɪdli/	
rage	/reɪdʒ/	
raging	/ˈreɪdʒɪŋ/	
raid	/reɪd/	
rainy	/ˈreɪni/	
rail	/reɪl/	
railway	/ˈreɪlweɪ/	
railroad	/ˈreɪlroʊd/	
rain	/reɪn/	
rainbow	/ˈreɪnboʊ/	
raincoat	/ˈreɪnkoʊt/	
raise	/reɪz/	
rally	/ˈræli/	
ranch	/ræntʃ/	
random	/ˈrændəm/	
range	/reɪndʒ/	
rank	/ræŋk/	
rap	/ræp/	
rape	/reɪp/	
rapid	/ˈræpɪd/	
rare	/rer/	
rarely	/ˈrerli/	
rarity	/ˈrerəti/	
rash	/ræʃ/	
rat	/ræt/	
rate	/reɪt/	
rating	/ˈreɪtɪŋ/	
rather	/ˈræðər/	
ratification	/ˌrætɪfɪˈ keɪʃən/	
ratify	/ˈrætɪfaɪ/	
ratio	/ˈreɪʃioʊ/	
ration	/ˈræʃən/	
rational	/ˈræʃənəl/	
rattle	/ˈrætəl/	
raw	/rɔː/	
ray	/reɪ/	
reach	/riːtʃ/	
react	/riˈækt/	
read	/riːd/	
reading	/ˈriːdɪŋ/	
reader	/ˈriːdər/	
ready	/ˈredi/	
readily	/ˈredɪli/	
real	/riːl/	
really	/ˈriːəli/	
reality	/ri ˈæləti/	
realistic	/ ˌ riːə ˈlɪstɪk/	
realism	/ˈriːəlɪzəm/	
realize	/ˈriːəlaɪz/	
realise	/ˈriːəlaɪz/	
realization	/ˌriːəlaɪ ˈzeɪʃən/	
realisation	/ˌriːəlaɪ ˈzeɪʃən/	
realm	/relm/	
reap	/riːp/	
rear	/rɪr/	
reason	/ˈriːzən/	
reasonable	/ˈriːzənəbəl/	
reassure	/ˌriːə ˈʃʊr/	
reassurance	/ˌriːə ˈʃʊrəns/	
rebel	/ˈrebəl/ (n.) /rɪ ˈbel/	
rebellion	/rɪ ˈbeljən/	
rebellious	/rɪ ˈbeljəs/	
recall	/rɪ ˈ kɔːl/	
receipt	/rɪ ˈsiːt/	
recipient	/rɪ ˈsɪpiənt/	
receptive	/rɪ ˈseptɪv/	
receiver	/rɪ ˈsiːvər/	
recede	/rɪ ˈsiːd/	
receive	/rɪ ˈsiːv/	
recent	/ˈriːsənt/	
recently	/ˈriːsəntli/	
reception	/rɪˈsepʃən/	
receptionist	/rɪˈsepʃənɪst/	
recession	/rɪˈseʃən/	
recipe	/ˈresəpi/	
reciprocal	/rɪ ˈsɪprəkəl/	
recitation	/ˌresɪ ˈteɪʃən/	
recite	/rɪ ˈsaɪt/	
reckless	/ˈrekləs/	
recognition	/ˌrekəɡˈ nɪʃən/	
reckon	/ˈrekən/	
recognize	/ˈrekəɡnaɪz/	
recognise	/ˈrekəɡnaɪz/	
recommend	/ ˌ rekəˈ mend/	
recommendation	/ˌrekəmenˈdeɪʃən/	
reconcile	/ˈrekənsaɪl/	
reconciliation	/ˌrekənsɪliˈeɪʃən/	
reconciliatory	/ ˌ rekən ˈsɪliətɔːri/	
record	/ˈrekərd/ (n.) /rɪ ˈ kɔːrd/ (v.)	
recorder	/rɪ ˈ kɔːrdər/	
recording	/rɪ ˈ kɔːrdɪŋ/	
recover	/rɪ ˈ kʌvər/	
recovery	/rɪ ˈ kʌvəri/	
recreation	/ˌrekri ˈeɪʃən/	
recreational	/ˌrekri ˈeɪʃənəl/	
recruit	/rɪ ˈ kruːt/	
recruitment	/rɪ ˈ kruːtmənt/	
rectify	/ˈrektɪfaɪ/	
rectification	/ˌrektɪfɪ ˈ keɪʃən/	
recur	/rɪ ˈ kɜːr/	
recurrence	/rɪ ˈ kɜːrəns/	
recycle	/riː ˈsaɪkəl/	
recyclable	/riː ˈsaɪkələbəl/	
red	/red/	
reduce	/rɪ ˈduːs/	
reduction	/rɪˈdʌkʃən/	
redundant	/rɪˈdʌndənt/	
redundancy	/rɪˈdʌndənsi/	
reel	/riːl/	
refer	/rɪ ˈfɜːr/	
reference	/ˈrefərəns/	
referee	/ ˌ refə ˈ riː/	
refinery	/rɪ ˈfaɪnəri/	
refinement	/rɪˈfaɪnmənt/	
referendum	/ ˌ refəˈ rendəm/	
refine	/rɪ ˈfaɪn/	
reflect	/rɪ ˈflekt/	
reflection	/rɪ ˈflekʃən/	
reflective	/rɪ ˈflektɪv/	
reform	/rɪ ˈfɔːrm/	
reformation	/ˌrefərˈmeɪʃən/	
reformist	/rɪ ˈfɔːrmɪst/	
refrain	/rɪ ˈfreɪn/	
refrigeration	/rɪ ˌfrɪdʒəˈ reɪʃən/	
refresh	/rɪ ˈfreʃ/	
refreshment	/rɪˈfreʃmənt/	
refrigerator	/rɪ ˈfrɪdʒəreɪtər/	
fridge	/frɪdʒ/	
refuge	/ˈrefjuːdʒ/	
refugee	/ˌrefju ˈdʒiː/	
refund	/ˈriːfʌnd/ (n.) /rɪ ˈfʌnd/ (v.)	
refuse	/rɪ ˈfjuːz/ (v.) /ˈrefjuːs/ (n.)	
refusal	/rɪ ˈfjuːzəl/	
refute	/rɪ ˈfjuːt/	
refutation	/ˌrefju ˈteɪʃən/	
regard	/rɪ ˈɡɑːrd/	
regarding	/rɪ ˈɡɑːrdɪŋ/	
regardless	/rɪ ˈɡɑːrdləs/	
regime	/reɪ ˈʒiːm/	
regiment	/ˈredʒɪmənt/	
regimental	/ˌredʒɪˈmentəl/	
region	/ˈriːdʒən/	
regional	/ˈriːdʒənəl/	
register	/ˈredʒɪstər/	
registration	/ˌredʒɪˈstreɪʃən/	
registrar	/ˈredʒɪstrɑːr/	
regret	/rɪ ˈɡret/	
regrettable	/rɪ ˈɡretəbəl/	
regretful	/rɪ ˈɡretfəl/	
regular	/ˈreɡjələr/	
regularity	/ˌreɡju ˈlærəti/	
regulate	/ˈreɡjuleɪt/	
regulation	/ˌreɡju ˈleɪʃən/	
regulatory	/ˈreɡjələtɔːri/	
regulator	/ˈreɡjuleɪtər/	
rehabilitate	/ ˌ riːə ˈbɪlɪteɪt/	
rehabilitation	/ˌriːə ˌbɪlɪ ˈteɪʃən/	
rehearse	/rɪ ˈ hɜːrs/	
rehearsal	/rɪ ˈ hɜːrsəl/	
reign	/reɪn/	
rein	/reɪn/	
reinforce	/ ˌ riːɪn ˈfɔːrs/	
reinforcement	/ ˌ riːɪn ˈfɔːrsmənt/	
reject	/rɪ ˈdʒekt/	
rejection	/rɪˈdʒekʃən/	
rejoice	/rɪˈdʒɔɪs/	
rejoicing	/rɪˈdʒɔɪsɪŋ/	
relate	/rɪ ˈleɪt/	
relation	/rɪ ˈleɪʃən/	
relationship	/rɪ ˈleɪʃənʃɪp/	
relative	/ˈrelətɪv/	
relativity	/ ˌ relə ˈtɪvəti/	
relax	/rɪˈlæks/	
relaxation	/ˌriːlæk ˈseɪʃən/	
relay	/ˈriːleɪ/ (n.) /rɪ ˈleɪ/ (v.)	
release	/rɪ ˈliːs/	
relentless	/rɪ ˈlentləs/	
relevant	/ˈreləvənt/	
relevance	/ˈreləvəns/	
relic	/ˈrelɪk/	
relieve	/rɪ ˈliːv/	
relief	/rɪ ˈliːf/	
religion	/rɪ ˈlɪdʒən/	
religious	/rɪ ˈlɪdʒəs/	
relish	/ˈrelɪʃ/	
reluctant	/rɪ ˈlʌktənt/	
reluctance	/rɪ ˈlʌktəns/	
rely	/rɪ ˈlaɪ/	
reliance	/rɪ ˈlaɪəns/	
reliable	/rɪ ˈlaɪəbəl/	
remain	/rɪˈ meɪn/	
remainder	/rɪˈ meɪndər/	
remark	/rɪ ˈ mɑːrk/	
remarkable	/rɪˈ mɑːrkəbəl/	
remedy	/ˈremədi/	
remedial	/rɪ ˈ miːdiəl/	
remember	/rɪˈ membər/	
remembrance	/rɪˈ membrəns/	
remind	/rɪˈ maɪnd/	
reminder	/rɪˈ maɪndər/	
reminiscent	/ ˌ remɪˈ nɪsənt/	
reminiscence	/ ˌ remɪˈ nɪsəns/	
remnant	/ˈremnənt/	
remote	/rɪˈ moʊt/	
remove	/rɪˈ muːv/	
removal	/rɪ ˈ muːvəl/	
renaissance	/ˈrenəsɑːns/ or /rɪˈ neɪ səns/	
render	/ˈrendər/	
rendering	/ˈrendərɪŋ/	
renew	/rɪ ˈ nuː/	
renewal	/rɪ ˈ nuːəl/	
renewable	/rɪ ˈ nuːəbəl/	
renovate	/ˈrenəveɪt/	
renovation	/ˌrenəˈveɪʃən/	
renown	/rɪˈ naʊn/	
renowned	/rɪˈ naʊnd/	
rent	/rent/	
rental	/ˈrentəl/	
repair	/rɪ ˈ per/	
reparable	/ˈrepərəbəl/ or /rɪˈper əbəl/	
repay	/rɪ ˈ peɪ/	
repayment	/rɪˈ peɪmənt/	
repeat	/rɪ ˈ piːt/	
repetition	/ˌrepəˈtɪʃən/	
repetitive	/rɪ ˈ petətɪv/	
repeatedly	/rɪ ˈ piːtɪdli/	
repel	/rɪ ˈ pel/	
repertoire	/ˈrepərtwɑːr/	
replace	/rɪ ˈ pleɪs/	
replacement	/rɪˈ pleɪsmənt/	
reply	/rɪ ˈ plaɪ/	
report	/rɪ ˈ pɔːrt/	
reporter	/rɪ ˈ pɔːrtər/	
represent	/ˌreprɪˈzent/	
representation	/ˌreprɪzenˈteɪʃən/	
representative	/ˌreprɪˈzentətɪv/	
repress	/rɪ ˈ pres/	
repression	/rɪ ˈ preʃən/	
repressive	/rɪ ˈ presɪv/	
reproach	/rɪ ˈ proʊtʃ/	
reproduce	/ˌriːprə ˈduːs/	
reproduction	/ˌriːprəˈdʌkʃən/	
reproductive	/ˌriːprəˈdʌktɪv/	
republic	/rɪ ˈ pʌblɪk/	
republican	/rɪˈ pʌblɪkən/	
reputation	/ˌrepju ˈteɪʃən/	
repute	/rɪ ˈ pjuːt/	
reputable	/ˈrepjətəbəl/	
request	/rɪˈ kwest/	
require	/rɪˈ kwaɪər/	
requirement	/rɪˈ kwaɪərmənt/	
rescue	/ˈreskjuː/	
research	/rɪ ˈsɜːrtʃ/ or /ˈriːsɜːrtʃ/	
researcher	/rɪ ˈsɜːrtʃər/	
resemble	/rɪˈzembəl/	
resemblance	/rɪˈzembləns/	
resent	/rɪ ˈzent/	
resentment	/rɪˈzentmənt/	
reserve	/rɪ ˈzɜːrv/	
reservation	/ˌrezərˈveɪʃən/	
reserved	/rɪ ˈzɜːrvd/	
reservoir	/ˈrezərvwɑːr/	
reshuffle	/riː ˈʃʌfəl/	
reside	/rɪ ˈzaɪd/	
residence	/ˈrezɪdəns/	
resident	/ˈrezɪdənt/	
residential	/ˌrezɪ ˈdenʃəl/	
resign	/rɪ ˈzaɪn/	
resignation	/ˌrezɪɡ ˈ neɪʃən/	
resist	/rɪ ˈzɪst/	
resistance	/rɪˈzɪstəns/	
resistant	/rɪ ˈzɪstənt/	
resolve	/rɪ ˈzɑːlv/	
resolution	/ˌrezə ˈluːʃən/	
resolute	/ˈrezəluːt/	
resort	/rɪ ˈzɔːrt/	
resource	/ˈriːsɔːrs/ or /rɪ ˈsɔːrs/	
resourceful	/rɪ ˈsɔːrsfəl/	
respect	/rɪ ˈspekt/	
respectable	/rɪˈspektəbəl/	
respectful	/rɪ ˈspektfəl/	
respective	/rɪ ˈspektɪv/	
respectively	/rɪ ˈspektɪvli/	
respond	/rɪˈspɑːnd/	
response	/rɪ ˈspɑːns/	
responsive	/rɪˈspɑːnsɪv/	
respondent	/rɪˈspɑːndənt/	
responsible	/rɪˈspɑːnsəbəl/	
responsibility	/rɪ ˌspɑːnsə ˈbɪləti/	
rest	/rest/	
restaurant	/ˈrestərɑːnt/	
restless	/ˈrestləs/	
restore	/rɪ ˈstɔːr/	
restoration	/ˌrestəˈ reɪʃən/	
restrain	/rɪ ˈstreɪn/	
restraint	/rɪ ˈstreɪnt/	
restrict	/rɪ ˈstrɪkt/	
restriction	/rɪ ˈstrɪkʃən/	
restrictive	/rɪ ˈstrɪktɪv/	
result	/rɪ ˈzʌlt/	
resultant	/rɪ ˈzʌltənt/	
resume	/rɪˈzuːm/	
resumption	/rɪˈzʌmpʃən/	
résumé	/ˈrezəmeɪ/	
retail	/ˈriːteɪl/	
retailer	/ˈriːteɪlər/	
retain	/rɪ ˈteɪn/	
retention	/rɪ ˈtenʃən/	
retaliate	/rɪ ˈtælieɪt/	
retaliation	/rɪ ˌtæliˈeɪʃən/	
retarded	/rɪ ˈtɑːrdɪd/	
retell	/riː ˈtel/	
retelling	/riː ˈtelɪŋ/	
retire	/rɪ ˈtaɪər/	
retirement	/rɪˈtaɪərmənt/	
retired	/rɪ ˈtaɪərd/	
retort	/rɪ ˈtɔːrt/	
retreat	/rɪ ˈtriːt/	
retrieve	/rɪ ˈtriːv/	
retrieval	/rɪ ˈtriːvəl/	
retrospect	/ˈretrəspekt/	
retrospective	/ˌretrəˈspektɪv/	
return	/rɪ ˈtɜːrn/	
reunite	/ˌriːjuː ˈnaɪt/	
reunification	/ˌriːjuːnɪfɪ ˈ keɪʃən/	
reunion	/riː ˈjuːniən/	
reveal	/rɪ ˈviːl/	
revelation	/ˌrevəˈleɪʃən/	
revenge	/rɪˈvendʒ/	
revengeful	/rɪˈvendʒfəl/	
revenue	/ˈrevənuː/	
reverse	/rɪ ˈvɜːrs/	
reversal	/rɪ ˈvɜːrsəl/	
reversible	/rɪ ˈvɜːrsəbəl/	
review	/rɪ ˈvjuː/	
reviewer	/rɪ ˈvjuːər/	
revise	/rɪ ˈvaɪz/	
revision	/rɪˈvɪʒən/	
revive	/rɪ ˈvaɪv/	
revival	/rɪ ˈvaɪvəl/	
revolt	/rɪ ˈvoʊlt/	
revolution	/ˌrevə ˈluːʃən/	
revolutionary	/ˌrevə ˈluːʃəneri/	
revolve	/rɪ ˈvɑːlv/	
reward	/rɪ ˈwɔːrd/	
rewarding	/rɪˈwɔːrdɪŋ/	
rhetoric	/ˈretərɪk/	
rhetorical	/rɪ ˈtɔːrɪkəl/	
rhythm	/ˈrɪðəm/	
rib	/rɪb/	
rhythmic	/ˈrɪð mɪk/	
ribbon	/ˈrɪbən/	
rice	/raɪs/	
rich	/rɪtʃ/	
rid	/rɪd/	
riddle	/ˈrɪdəl/	
ride	/raɪd/	
rider	/ˈraɪdər/	
ridge	/rɪdʒ/	
ridicule	/ˈrɪdɪkjuːl/	
ridiculous	/rɪ ˈdɪkjələs/	
rifle	/ˈraɪfəl/	
rig	/rɪɡ/	
right	/raɪt/	
rigid	/ˈrɪdʒɪd/	
rigidity	/rɪ ˈdʒɪdəti/	
rigor	/ˈrɪɡər/	
rigour	/ˈrɪɡər/	
rigorous	/ˈrɪɡərəs/	
rim	/rɪm/	
ring	/rɪŋ/	
riot	/ˈraɪət/	
riotous	/ˈraɪətəs/	
rip	/rɪp/	
ripe	/raɪp/	
ripen	/ˈraɪpən/	
rise	/raɪz/	
risk	/rɪsk/	
risky	/ˈrɪski/	
ritual	/ˈrɪtʃuəl/	
rival	/ˈraɪvəl/	
rivalry	/ˈraɪvəlri/	
river	/ˈrɪvər/	
road	/roʊd/	
roar	/rɔːr/	
roast	/roʊst/	
rob	/rɑːb/	
robbery	/ˈrɑːbəri/	
robot	/ˈroʊbɑːt/	
robotic	/roʊˈbɑːtɪk/	
robust	/roʊˈbʌst/	
rock	/rɑːk/	
rocky	/ˈrɑːki/	
rocket	/ˈrɑːkɪt/	
rod	/rɑːd/	
role	/roʊl/	
roll	/roʊl/	
roller	/ˈroʊlər/	
romance	/rouˈ mæns/	
romantic	/rouˈ mæntɪk/	
roof	/ruːf/	
room	/ruːm/	
root	/ruːt/	
rope	/roup/	
rose	/rouz/	
rosy	/ˈrouzi/	
rot	/rɑːt/	
rotten	/ˈrɑːtən/	
rotate	/ˈrouteɪt/	
rotation	/rouˈteɪʃən/	
rough	/rΛf/	
roughly	/ˈrΛfli/	
round	/raund/	
rouse	/rauz/	
route	/ruːt/ or /raut/	
routine	/ruː ˈtiːn/	
row	/rou/	
royal	/ˈr0ɪəl/	
royalty	/ˈr0ɪəlti/	
rub	/rΛb/	
rubber	/ˈrΛbər/	
rubbish	/ˈrΛbɪʃ/	
rude	/ruːd/	
rug	/rΛɡ/	
ruin	/ˈruːɪn/	
ruinous	/ˈruːɪnəs/	
rule	/ruːl/	
ruler	/ˈruːlər/	
ruling	/ˈruːlɪŋ/	
rumor	/ˈruːmər/	
rumour	/ˈruːmər/	
run	/rΛn/	
runner	/ˈrΛnər/	
running	/ˈrΛnɪŋ/	
runway	/ˈrΛnweɪ/	
rural	/ˈrurəl/	
rush	/rΛʃ/	
rust	/rΛst/	
rusty	/ˈrΛsti/	
ruthless	/ˈruːələs/	
sack	/sæk/	
sacred	/ˈseɪkrɪd/	
sacrifice	/ˈsækrɪfaɪs/	
sacrificial	/ˌsækrɪ ˈfɪʃəl/	
sad	/sæd/	
sadden	/ˈsædən/	
saddle	/ˈsædəl/	
sadness	/ˈsædnəs/	
safe	/seɪf/	
safety	/ˈseɪfti/	
sailor	/ˈseɪlər/	
safeguard	/ˈseɪfɡɑːrd/	
sail	/seɪl/	
sailing	/ˈseɪlɪŋ/	
saint	/seɪnt/	
sake	/seɪk/	
salad	/ˈsæləd/	
salary	/ˈsæləri/	
sale	/seɪl/	
salesman	/ˈseɪlzmən/	
salmon	/ˈsæmən/	
salon	/sə ˈlɑːn/	
salt	/s0ːlt/	
salty	/ˈs0ːlti/	
salute	/sə ˈluːt/	
salutation	/ˌsælju ˈteɪʃən/	
salvage	/ˈsælvɪd3/	
salvation	/sælˈveɪʃən/	
same	/seɪm/	
sample	/ˈsæmpəl/	
sanction	/ˈsæŋkʃən/	
sanctuary	/ˈsæŋktʃueri/	
sand	/sænd/	
sandwich	/ˈsænwɪtʃ/	
sanitation	/ˌsænɪˈteɪʃən/	
sanitary	/ˈsænɪteri/	
sarcasm	/ˈsɑːrkæzəm/	
sarcastic	/sɑːrˈ kæstɪk/	
satellite	/ˈsætəlaɪt/	
satire	/ˈsætaɪər/	
satirical	/sə ˈtɪrɪkəl/	
satirist	/ˈsætərɪst/	
satisfy	/ˈsætɪsfaɪ/	
satisfaction	/ˌsætɪsˈfækʃən/	
satisfactory	/ ˌsætɪsˈfæktəri/	
saturate	/ˈsætʃəreɪt/	
saturation	/ˌsætʃə ˈ reɪʃən/	
saturday	/ˈsætərdeɪ/	
sauce	/sɔːs/	
sausage	/ˈsɔːsɪdʒ/	
savage	/ˈsævɪdʒ/	
save	/seɪv/	
saving	/ˈseɪvɪŋ/	
say	/seɪ/	
saying	/ˈseɪɪŋ/	
scale	/skeɪl/	
scan	/skæn/	
scanner	/ˈskænər/	
scandal	/ˈskændəl/	
scandalous	/ˈskændələs/	
scar	/skɑːr/	
scarce	/skers/	
scarcity	/ˈskersəti/	
scarcely	/ˈskersli/	
scare	/sker/	
scary	/ˈskeri/	
scatter	/ˈskætər/	
scenario	/sɪˈ nærioʊ/	
scene	/siːn/	
scenery	/ˈsiːnəri/	
scenic	/ˈsiːnɪk/	
scent	/sent/	
schedule	/ˈskedʒuːl/ or /ˈʃedjuːl/	
scheme	/skiːm/	
scholar	/ˈskɑːlər/	
scholarly	/ˈskɑːlərli/	
scholarship	/ˈskɑːlərʃɪp/	
scholastic	/skəˈlæstɪk/	
school	/skuːl/	
schooling	/ˈskuːlɪŋ/	
science	/ˈsaɪəns/	
scientific	/ ˌsaɪənˈtɪfɪk/	
scientist	/ˈsaɪəntɪst/	
scissors	/ˈsɪzərz/	
scold	/skoʊld/	
scope	/skoʊp/	
score	/skɔːr/	
scorn	/skɔːrn/	
scout	/skaʊt/	
scornful	/ˈskɔːrnfəl/	
scramble	/ˈskræmbəl/	
scrap	/skræp/	
scrape	/skreɪp/	
scratch	/skrætʃ/	
scream	/skriːm/	
screen	/skriːn/	
screw	/skruː/	
script	/skrɪpt/	
scripture	/ˈskrɪptʃər/	
scrub	/skrʌb/	
scrutiny	/ˈskruːtəni/	
scrutinize	/ˈskruːtənaɪz/	
sculpture	/ˈskʌlptʃər/	
sea	/siː/	
seal	/siːl/	
search	/sɜːrtʃ/	
season	/ˈsiːzən/	
seat	/siːt/	
seasonal	/ˈsiːzənəl/	
second	/ˈsekənd/	
secondary	/ˈsekənderi/	
second-hand	/ ˌsekəndˈhænd/	
secret	/ˈsiːkrət/	
secrecy	/ˈsiːkrəsi/	
secretive	/ˈsiːkrətɪv/	
secretary	/ˈsekrəteri/	
secretarial	/ ˌsekrə ˈteriəl/	
section	/ˈsekʃən/	
sector	/ˈsektər/	
secular	/ˈsekjələr/	
secure	/sɪ ˈ kjʊr/	
security	/sɪ ˈ kjʊrəti/	
seduce	/sɪ ˈduːs/	
seduction	/sɪˈdʌkʃən/	
seductive	/sɪˈdʌktɪv/	
see	/siː/	
seed	/siːd/	
seedling	/ˈsiːdlɪŋ/	
seek	/siːk/	
seem	/siːm/	
seeming	/ˈsiːmɪŋ/	
seemingly	/ˈsiːmɪŋli/	
segment	/ˈseɡmənt/	
segmental	/seɡˈ mentəl/	
segregate	/ˈseɡrɪɡeɪt/	
segregation	/ˌseɡrɪˈɡeɪʃən/	
seize	/siːz/	
seizure	/ˈsiːʒər/	
seldom	/ˈseldəm/	
select	/sɪ ˈlekt/	
selection	/sɪˈlekʃən/	
selective	/sɪ ˈlektɪv/	
self	/self/	
selfish	/ˈselfɪʃ/	
selfless	/ˈselfləs/	
sell	/sel/	
semester	/sɪˈ mestər/	
seminar	/ˈsemɪnɑːr/	
senate	/ˈsenɪt/	
senator	/ˈsenətər/	
send	/send/	
seniority	/ ˌsiːni ˈɔːrəti/	
senior	/ˈsiːniər/	
sensation	/senˈseɪʃən/	
sensational	/senˈseɪʃənəl/	
sense	/sens/	
sensible	/ˈsensəbəl/	
sensitive	/ˈsensətɪv/	
sensitivity	/ ˌsensəˈtɪvəti/	
sentence	/ˈsentəns/	
sentiment	/ˈsentɪmənt/	
sentimental	/ ˌsentɪˈ mentəl/	
separate	/ˈsepərət/ (adj.) / ˈsep əreɪt/ (v.)	
separation	/ˌsepəˈreɪʃən/	
separatist	/ˈsepərətɪst/	
september	/sepˈtembər/	
sequence	/ˈsiːkwəns/	
sequential	/sɪˈ kwenʃəl/	
sergeant	/ˈsɑːrdʒənt/	
service	/ˈsɜːrvɪs/	
serving	/ˈsɜːrvɪŋ/	
serial	/ˈsɪriəl/	
series	/ˈsɪriːz/	
serious	/ˈsɪriəs/	
servant	/ˈsɜːrvənt/	
serve	/sɜːrv/	
session	/ˈseʃən/	
set	/set/	
setback	/ˈsetbæk/	
setting	/ˈsetɪŋ/	
settle	/ˈsetəl/	
settlement	/ˈsetəlmənt/	
seven	/ˈsevən/	
seventeen	/ ˌsevən ˈtiːn/	
seventy	/ˈsevənti/	
several	/ˈsevərəl/	
severe	/sɪ ˈvɪr/	
severity	/sɪ ˈverəti/	
sew	/soʊ/	
sex	/seks/	
sexual	/ˈsekʃuəl/	
sexy	/ˈseksi/	
shabby	/ˈʃæbi/	
shade	/ʃeɪd/	
shadow	/ˈʃædoʊ/	
shaft	/ʃæft/	
shake	/ʃeɪk/	
shaky	/ˈʃeɪki/	
shall	/ʃæl/ or /ʃəl/	
shallow	/ˈʃæloʊ/	
shame	/ʃeɪm/	
shameful	/ˈʃeɪmfəl/	
shameless	/ˈʃeɪmləs/	
shape	/ʃeɪp/	
share	/ʃer/	
shark	/ʃɑːrk/	
sharp	/ʃɑːrp/	
sharpen	/ˈʃɑːrpən/	
shatter	/ˈʃætər/	
shave	/ʃeɪv/	
shaver	/ˈʃeɪvər/	
she	/ʃiː/	
shed	/ʃed/	
sheep	/ʃiːp/	
sheer	/ʃɪr/	
sheet	/ʃiːt/	
shelf	/ʃelf/	
shell	/ʃel/	
shelter	/ˈʃeltər/	
shepherd	/ˈʃepərd/	
shield	/ʃiːld/	
shift	/ʃɪft/	
shine	/ʃaɪn/	
shiny	/ˈʃaɪni/	
ship	/ʃɪp/	
shipping	/ˈʃɪpɪŋ/	
shipment	/ˈʃɪpmənt/	
shipyard	/ˈʃɪpjɑːrd/	
shirt	/ʃɜːrt/	
shit	/ʃɪt/	
shiver	/ˈʃɪvər/	
shock	/ʃɑːk/	
shoe	/ʃuː/	
shoot	/ʃuːt/	
shop	/ʃɑːp/	
shopping	/ˈʃɑːpɪŋ/	
shore	/ʃɔːr/	
short	/ʃɔːrt/	
shortage	/ˈʃɔːrtɪdʒ/	
shorts	/ʃɔːrts/	
shortcoming	/ˈʃɔːrtkʌmɪŋ/	
shorthand	/ˈʃɔːrthænd/	
shortly	/ˈʃɔːrtli/	
shot	/ʃɑːt/	
should	/ʃʊd/	
shoulder	/ˈʃoʊldər/	
shout	/ʃaʊt/	
shove	/ʃʌv/	
show	/ʃoʊ/	
showy	/ˈʃoʊi/	
showcase	/ˈʃoʊkeɪs/	
shower	/ˈʃaʊər/	
shred	/ʃred/	
shrewd	/ʃruːd/	
shrimp	/ʃrɪmp/	
shrink	/ʃrɪŋk/	
shrub	/ʃrʌb/	
shrubbery	/ˈʃrʌbəri/	
shrug	/ʃrʌɡ/	
shut	/ʃʌt/	
shuttle	/ˈʃʌtəl/	
shy	/ʃaɪ/	
shyness	/ˈʃaɪnəs/	
shyly	/ˈʃaɪli/	
sick	/sɪk/	
sicken	/ˈsɪkən/	
side	/saɪd/	
sideways	/ˈsaɪdweɪz/	
sigh	/saɪ/	
sight	/saɪt/	
sightseeing	/ˈsaɪtsiːɪŋ/	
sign	/saɪn/	
signature	/ˈsɪɡnətʃər/	
signal	/ˈsɪɡnəl/	
significant	/sɪɡ ˈ nɪfɪkənt/	
significance	/sɪɡˈ nɪfɪkəns/	
signify	/ˈsɪɡnɪfaɪ/	
silent	/ˈsaɪlənt/	
silence	/ˈsaɪləns/	
silicon	/ˈsɪlɪkən/	
silk	/sɪlk/	
silky	/ˈsɪlki/	
silver	/ˈsɪlvər/	
silvery	/ˈsɪlvəri/	
similar	/ˈsɪmɪlər/	
similarity	/ ˌsɪmɪ ˈ lærəti/	
simple	/ˈsɪmpəl/	
simplicity	/sɪm ˈ plɪsəti/	
simplify	/ˈsɪmplɪfaɪ/	
simply	/ˈsɪmpli/	
simulate	/ˈsɪmj uleɪt/	
simulation	/ˌsɪmju ˈleɪʃən/	
simultaneous	/ ˌsaɪməlˈteɪniəs/	
sin	/sɪn/	
since	/sɪns/	
sincere	/sɪn ˈsɪr/	
sincerity	/sɪnˈserəti/	
sing	/sɪŋ/	
singer	/ˈsɪŋər/	
single	/ˈsɪŋɡəl/	
singular	/ˈsɪŋɡjələr/	
singularity	/ˌsɪŋɡju ˈlærəti/	
sinister	/ˈsɪnɪstər/	
sink	/sɪŋk/	
sip	/sɪp/	
sir	/sɜːr/	
sister	/ˈsɪstər/	
sit	/sɪt/	
sitting	/ˈsɪtɪŋ/	
site	/saɪt/	
situation	/ˌsɪtʃu ˈeɪʃən/	
situate	/ˈsɪtʃueɪt/	
six	/sɪks/	
sixteen	/ ˌsɪks ˈtiːn/	
sixty	/ˈsɪksti/	
size	/saɪz/	
sizable	/ˈsaɪzəbəl/	
skate	/skeɪt/	
skating	/ˈskeɪtɪŋ/	
skeleton	/ˈskelɪtən/	
skeptical	/ˈskeptɪkəl/	
sceptical	/ˈskeptɪkəl/	
skeptic	/ˈskeptɪk/	
sceptic	/ˈskeptɪk/	
skepticism	/ˈskeptɪsɪzəm/	
scepticism	/ˈskeptɪsɪzəm/	
sketch	/sketʃ/	
sketchy	/ˈsketʃi/	
ski	/skiː/	
skiing	/ˈskiːɪŋ/	
skill	/skɪl/	
skilful	/ˈskɪlfəl/	
skillful	/ˈskɪlfəl/	
skilled	/skɪld/	
skim	/skɪm/	
skin	/skɪn/	
skinny	/ˈskɪni/	
skip	/skɪp/	
skirt	/skɜːrt/	
skull	/skʌl/	
sky	/skaɪ/	
skyline	/ˈskaɪlaɪn/	
skyscraper	/ˈskaɪskreɪpər/	
slack	/slæk/	
slam	/slæm/	
slap	/slæp/	
slash	/slæʃ/	
slaughter	/ˈslɔːtər/	
slave	/sleɪv/	
slavery	/ˈsleɪvəri/	
sleep	/sliːp/	
sleepy	/ˈsliːpi/	
sleepiness	/ˈsliːpinəs/	
sleeve	/sliːv/	
slender	/ˈslendər/	
slice	/slaɪs/	
slide	/slaɪd/	
slight	/slaɪt/	
slim	/slɪm/	
slip	/slɪp/	
slippery	/ˈslɪpəri/	
slipper	/ˈslɪpər/	
slogan	/ˈsloʊɡən/	
slope	/sloʊp/	
slot	/slɑːt/	
slow	/sloʊ/	
slum	/slʌm/	
slump	/slʌmp/	
small	/smɔːl/	
smart	/smɑːrt/	
smartphone	/ˈsmɑːrtfoʊn/	
smash	/smæʃ/	
smelly	/ˈsmeli/	
smuggler	/ˈsmΛɡlər/	
smell	/smel/	
smoggy	/ˈsmɑːɡi/	
smile	/smaɪl/	
smoky	/ˈsmouki/	
smog	/smɑːɡ/	
smoke	/smouk/	
smuggling	/ˈsmΛɡlɪŋ/	
smooth	/smuːŎ/	
smuggle	/ˈsmΛɡəl/	
snack	/snæk/	
snail	/sneɪl/	
snake	/sneɪk/	
snap	/snæp/	
snobbish	/ˈsnɑːbɪʃ/	
snatch	/snætʃ/	
snowy	/ˈsnoui/	
sneak	/sniːk/	
sniff	/snɪf/	
snob	/snɑːb/	
snow	/snou/	
so	/sou/	
soak	/souk/	
soap	/soup/	
soar	/s0ːr/	
sob	/sɑːb/	
sober	/ˈsoubər/	
so-called	/ ˌsou ˈ k0ːld/	
soccer	/ˈsɑːkər/	
social	/ˈsouʃəl/	
socialize	/ˈsouʃəlaɪz/	
sociable	/ˈsouʃəbəl/	
society	/səˈsaɪəti/	
socialist	/ˈsouʃəlɪst/	
socialism	/ˈsouʃəlɪzəm/	
sociologist	/ˌsousiˈɑːləd3ɪst/	
sociology	/ˌsousi ˈɑːləd3i/	
sock	/sɑːk/	
socket	/ˈsɑːkɪt/	
soda	/ˈsoudə/	
sodium	/ˈsoudiəm/	
sofa	/ˈsoʊfə/	
soft	/sɔːft/	
soften	/ˈsɔːfən/	
software	/ˈsɔːftwer/	
soil	/sɔɪl/	
solar	/ˈsoʊlər/	
soldier	/ˈsoʊldʒər/	
sole	/soʊl/	
solely	/ˈsoʊlli/	
solemn	/ˈsɑːləm/	
solemnity	/səˈlemnəti/	
solicit	/sə ˈlɪsɪt/	
solicitor	/sə ˈlɪsɪtər/	
solid	/ˈsɑːlɪd/	
solidity	/sə ˈlɪdəti/	
solidify	/səˈlɪdɪfaɪ/	
solidarity	/ ˌsɑːlɪ ˈdærəti/	
solitary	/ˈsɑːlɪteri/	
solitude	/ˈsɑːlɪtuːd/	
solo	/ˈsoʊloʊ/	
solve	/sɑːlv/	
solution	/səˈluːʃən/	
solvent	/ˈsɑːlvənt/	
soluble	/ˈsɑːljəbəl/	
some	/sʌm/	
somebody	/ˈsʌmbɑːdi/	
somehow	/ˈsʌmhaʊ/	
someone	/ˈsʌmwʌn/	
something	/ˈsʌməɪŋ/	
sometime	/ˈsʌmtaɪm/	
sometimes	/ˈsʌmtaɪmz/	
somewhat	/ˈsʌmwʌt/	
somewhere	/ˈsʌmwer/	
son	/sʌn/	
song	/sɔːŋ/	
soon	/suːn/	
soothe	/suːð/	
sophisticated	/səˈfɪstɪkeɪtɪd/	
sophistication	/səˌfɪstɪˈ keɪʃən/	
sore	/sɔːr/	
sorrow	/ˈsɑːroʊ/	
sorrowful	/ˈsɑːroʊfəl/	
sorry	/ˈsɑːri/	
sort	/s0ːrt/	
soul	/soul/	
sound	/saund/	
soup	/suːp/	
sour	/ˈsauər/	
source	/s0ːrs/	
south	/sauə/	
southern	/ˈsΛŎərn/	
southeast	/ ˌsauəˈiːst/	
southeastern	/ ˌsauəˈiːstərn/	
southwest	/ ˌsauəˈwest/	
southwestern	/ ˌsauəˈwestərn/	
souvenir	/ ˌsuːvə ˈnɪr/	
sovereign	/ˈsɑːvrɪn/	
sovereignty	/ˈsɑːvrənti/	
sow	/sou/	
space	/speɪs/	
spacious	/ˈspeɪʃəs/	
spatial	/ˈspeɪʃəl/	
spaceship	/ˈspeɪsʃɪp/	
spacecraft	/ˈspeɪskræft/	
spade	/speɪd/	
spaghetti	/spəˈɡeti/	
span	/spæn/	
spare	/sper/	
sparingly	/ˈsperɪŋli/	
spark	/spɑːrk/	
sparkle	/ˈspɑːrkəl/	
speak	/spiːk/	
speaker	/ˈspiːkər/	
spear	/spɪr/	
special	/ˈspeʃəl/	
specialize	/ˈspeʃəlaɪz/	
specialization	/ˌspeʃəlaɪˈzeɪʃən/	
specialist	/ˈspeʃəlɪst/	
specialty	/ˈspeʃəlti/	
specially	/ˈspeʃəli/	
species	/ˈspiːʃiːz/	
specific	/spəˈsɪfɪk/	
specifically	/spə ˈsɪfɪkli/	
specify	/ˈspesɪfaɪ/	
specification	/ˌspesɪfɪˈ keɪʃən/	
specimen	/ˈspesɪmən/	
spectacle	/ˈspektəkəl/	
spectacular	/spekˈtækjələr/	
spectator	/ˈspekteɪtər/	
spectrum	/ˈspektrəm/	
speculate	/ˈspekjuleɪt/	
speculation	/ˌspekju ˈleɪʃən/	
speculative	/ˈspekjələtɪv/	
speech	/spiːtʃ/	
speechless	/ˈspiːtʃləs/	
speed	/spiːd/	
speeding	/ˈspiːdɪŋ/	
spell	/spel/	
spend	/spend/	
sphere	/sfɪr/	
spice	/spaɪs/	
spider	/ˈspaɪdər/	
spill	/spɪl/	
spin	/spɪn/	
spine	/spaɪn/	
spinal	/ˈspaɪnəl/	
spiral	/ˈspaɪrəl/	
spirit	/ˈspɪrɪt/	
spiritual	/ˈspɪrɪtʃuəl/	
spit	/spɪt/	
spite	/spaɪt/	
splash	/splæʃ/	
splendid	/ˈsplendɪd/	
splendor	/ˈsplendər/	
splendour	/ˈsplendər/	
split	/splɪt/	
spoil	/spɔɪl/	
spokesman	/ˈspoʊksmən/	
spokeswoman	/ˈspoʊkswʊmən/	
spokesperson	/ˈspoʊkspɜːrsən/	
sponge	/spʌndʒ/	
spongy	/ˈspʌndʒi/	
sponsor	/ˈspɑːnsər/	
sponsorship	/ˈspɑːnsərʃɪp/	
spontaneous	/spɑːnˈteɪniəs/	
spontaneity	/ˌspɑːntəˈ neɪəti/	
spoon	/spuːn/	
spoonful	/ˈspuːnfʊl/	
sport	/spɔːrt/	
sportsman	/ˈspɔːrtsmən/	
sportswoman	/ˈspɔːrtswʊmən/	
spot	/spɑːt/	
spotlight	/ˈspɑːtlaɪt/	
spouse	/spaʊs/	
sprawl	/sprɔːl/	
spray	/spreɪ/	
spread	/spred/	
spring	/sprɪŋ/	
sprinkle	/ˈsprɪŋkəl/	
spur	/spɜːr/	
spy	/spaɪ/	
squad	/skwɑːd/	
square	/skwer/	
squeeze	/skwiːz/	
stab	/stæb/	
stable	/ˈsteɪbəl/	
stability	/stə ˈbɪləti/	
stabilize	/ˈsteɪbəlaɪz/	
stack	/stæk/	
stadium	/ˈsteɪdiəm/	
staff	/stæf/	
stage	/steɪdʒ/	
stagger	/ˈstæɡər/	
stagnate	/ˈstæɡneɪt/	
stagnation	/stæɡˈ neɪʃən/	
stagnant	/ˈstæɡnənt/	
stain	/steɪn/	
stainless	/ˈsteɪnləs/	
stair	/ster/	
staircase	/ˈsterkeɪs/	
stake	/steɪk/	
stale	/steɪl/	
stalk	/stɔːk/	
stall	/stɔːl/	
stammer	/ˈstæmər/	
stamp	/stæmp/	
stance	/stæns/	
stand	/stænd/	
standard	/ˈstændərd/	
standardize	/ˈstændərdaɪz/	
standardization	/ˌstændərdɪ ˈzeɪʃən/	
standby	/ˈstændbaɪ/	
standpoint	/ˈstændpɔɪnt/	
staple	/ˈsteɪpəl/	
stapler	/ˈsteɪplər/	
star	/stɑːr/	
starry	/ˈstɑːri/	
stare	/ster/	
stark	/stɑːrk/	
start	/stɑːrt/	
starter	/ˈstɑːrtər/	
startle	/ˈstɑːrtəl/	
starve	/stɑːrv/	
starvation	/stɑːrˈveɪʃən/	
state	/steɪt/	
statement	/ˈsteɪtmənt/	
statesman	/ˈsteɪtsmən/	
static	/ˈstætɪk/	
station	/ˈsteɪʃən/	
stationary	/ˈsteɪʃəneri/	
stationery	/ˈsteɪʃəneri/	
statistic	/stə ˈtɪstɪk/	
statistical	/stə ˈtɪstɪkəl/	
statue	/ˈstætʃuː/	
statutory	/ˈstætʃətɔːri/	
steamer	/ˈstiːmər/	
status	/ˈsteɪtəs/ or /ˈstætəs/	
steadily	/ˈstedɪli/	
steamy	/ˈstiːmi/	
stay	/steɪ/	
steady	/ˈstedi/	
steak	/steɪk/	
steal	/stiːl/	
steam	/stiːm/	
steel	/stiːl/	
steep	/stiːp/	
steer	/stɪr/	
stem	/stem/	
step	/step/	
stereotype	/ˈsteriətaɪp/	
stern	/stɜːrn/	
steward	/ˈstuːərd/	
stewardess	/ˈstuːərdəs/	
stick	/stɪk/	
sticky	/ˈstɪki/	
stiff	/stɪf/	
stiffen	/ˈstɪfən/	
stifle	/ˈstaɪfəl/	
stigma	/ˈstɪɡmə/	
still	/stɪl/	
stimulate	/ˈstɪmj uleɪt/	
stimulation	/ˌstɪmju ˈleɪʃən/	
stimulus	/ˈstɪmjələs/	
stimulant	/ˈstɪmjələnt/	
sting	/stɪŋ/	
stipulate	/ˈstɪpj uleɪt/	
stipulation	/ˌstɪpju ˈ leɪʃən/	
stir	/stɜːr/	
stitch	/stɪtʃ/	
stock	/stɑːk/	
stocking	/ˈstɑːkɪŋ/	
stomach	/ˈstʌmək/	
stone	/stoʊn/	
stony	/ˈstoʊni/	
stool	/stuːl/	
stoop	/stuːp/	
stop	/stɑːp/	
stoppage	/ˈstɑːpɪdʒ/	
store	/stɔːr/	
storage	/ˈstɔːrɪdʒ/	
storm	/stɔːrm/	
stormy	/ˈstɔːrmi/	
story	/ˈstɔːri/	
storey	/ˈstɔːri/	
stout	/staʊt/	
stove	/stoʊv/	
straight	/streɪt/	
straighten	/ˈstreɪtən/	
straightforward	/ ˌstreɪt ˈfɔːrwərd/	
strain	/streɪn/	
strait	/streɪt/	
strand	/strænd/	
strange	/streɪndʒ/	
stranger	/ˈstreɪndʒər/	
strangle	/ˈstræŋɡəl/	
strap	/stræp/	
strategy	/ˈstrætədʒi/	
strategic	/strə ˈtiːdʒɪk/	
straw	/strɔː/	
stray	/streɪ/	
streak	/striːk/	
stream	/striːm/	
streamline	/ˈstriːmlaɪn/	
street	/striːt/	
stress	/stres/	
stressful	/ˈstresfəl/	
stretch	/stretʃ/	
strict	/strɪkt/	
stride	/straɪd/	
strike	/straɪk/	
striking	/ˈstraɪkɪŋ/	
string	/strɪŋ/	
strip	/strɪp/	
stripe	/straɪp/	
strive	/straɪv/	
stroke	/stroʊk/	
stroll	/stroʊl/	
strong	/strɔːŋ/	
strengthen	/ˈstreŋkəən/	
structure	/ˈstrʌktʃər/	
structural	/ˈstrʌktʃərəl/	
struggle	/ˈstrʌɡəl/	
stubborn	/ˈstʌbərn/	
student	/ˈstuːdənt/	
studio	/ˈstuːdioʊ/	
study	/ˈstʌdi/	
stuff	/stʌf/	
stuffy	/ˈstʌfi/	
stuffing	/ˈstʌfɪŋ/	
stumble	/ˈstʌmbəl/	
stump	/stʌmp/	
stun	/stʌn/	
stunning	/ˈstʌnɪŋ/	
stupid	/ˈstuːpɪd/	
stupidity	/stuː ˈ pɪdəti/	
sturdy	/ˈstɜːrdi/	
style	/staɪl/	
stylish	/ˈstaɪlɪʃ/	
subject	/ˈsʌbdʒɪkt/ (n./adj.) /s əbˈdʒekt/ (v.)	
subjective	/səbˈdʒektɪv/	
submarine	/ ˌsʌbməˈriːn/	
submerge	/səbˈmɜːrdʒ/	
submit	/səbˈmɪt/	
submission	/səbˈmɪʃən/	
submissive	/səbˈmɪsɪv/	
subordinate	/səˈbɔːrdɪnət/	
subordination	/səˌbɔːrdɪ ˈ neɪʃən/	
subscribe	/səbˈskraɪb/	
subscription	/səbˈskrɪpʃən/	
subscriber	/səbˈskraɪbər/	
subsequent	/ˈsʌbsɪkwənt/	
subsidy	/ˈsʌbsɪdi/	
subsidize	/ˈsʌbsɪdaɪz/	
supply	/səˈ plaɪ/	
supplier	/səˈ plaɪər/	
support	/sə ˈ pɔːrt/	
supportive	/səˈ pɔːrtɪv/	
supporter	/səˈ pɔːrtər/	
suppose	/səˈ poʊz/	
supposition	/ˌsʌpəˈzɪʃən/	
supposedly	/səˈ poʊzɪdli/	
suppress	/səˈ pres/	
suppression	/səˈ preʃən/	
suppressive	/səˈ presɪv/	
supreme	/suː ˈ priːm/	
sure	/ʃur/	
supremacy	/suːˈ preməsi/	
surf	/s3ːrf/	
surfing	/ˈs3ːrfɪŋ/	
surface	/ˈs3ːrfɪs/	
surge	/s3ːrd3/	
surgery	/ˈs3ːrd3əri/	
surgical	/ˈs3ːrd3ɪkəl/	
surgeon	/ˈs3ːrd3ən/	
surname	/ˈs3ːrneɪm/	
surpass	/sərˈ pæs/	
surroundings	/səˈ raundɪŋz/	
surplus	/ˈs3ːrplΛs/	
surprise	/sərˈ praɪz/	
surrender	/səˈ rendər/	
surround	/səˈ raund/	
surveillance	/s3ːrˈveɪləns/	
survey	/ˈs3ːrveɪ/ (n.) /sərˈveɪ / (v.)	
survive	/sərˈvaɪv/	
survival	/sərˈvaɪvəl/	
survivor	/sərˈvaɪvər/	
susceptible	/səˈseptəbəl/	
suspect	/səˈspekt/ (v.) / ˈsΛ spekt/ (n.)	
suspend	/səˈspend/	
suspension	/səˈspenʃən/	
suspense	/səˈspens/	
suspicion	/səˈspɪʃən/	
suspicious	/səˈspɪʃəs/	
sustain	/səˈsteɪn/	
sustainable	/səˈsteɪnəbəl/	
sustainability	/səˌsteɪnəˈbɪləti/	
swallow	/ˈswɑːlou/	
swamp	/swɑːmp/	
sweater	/ˈswetər/	
swap	/swɑːp/	
sway	/sweɪ/	
swear	/swer/	
sweat	/swet/	
sweep	/swiːp/	
sweet	/swiːt/	
swell	/swel/	
swift	/swɪft/	
swim	/swɪm/	
swimming	/ˈswɪmɪŋ/	
swimmer	/ˈswɪmər/	
swing	/swɪŋ/	
swipe	/swaɪp/	
switch	/swɪtʃ/	
sword	/sɔːrd/	
symbol	/ˈsɪmbəl/	
symbolic	/sɪm ˈbɑːlɪk/	
symmetry	/ˈsɪmətri/	
symmetric	/sɪˈ metrɪk/	
symmetrical	/sɪˈ metrɪkəl/	
sympathy	/ˈsɪmpəəi/	
sympathetic	/ˌsɪmpəˈəetɪk/	
sympathize	/ˈsɪmpəəaɪz/	
symphony	/ˈsɪmfəni/	
symposium	/sɪmˈ poʊziəm/	
symptom	/ˈsɪmptəm/	
synthetic	/sɪnˈəetɪk/	
synthesize	/ˈsɪnəəsaɪz/	
syndicate	/ˈsɪndɪkət/ (n.) /ˈsɪndɪ keɪt/ (v.)	
systematic	/ ˌsɪstəˈ mætɪk/	
systematically	/ ˌsɪstəˈ mætɪkli/	
syndrome	/ˈsɪndroʊm/	
synonym	/ˈsɪnənɪm/	
synthesis	/ˈsɪnəəsɪs/	
system	/ˈsɪstəm/	
table	/ˈteɪbəl/	
tablet	/ˈtæblɪt/	
taboo	/tə ˈbuː/	
tack	/tæk/	
tackle	/ˈtækəl/	
tact	/tækt/	
tactful	/ˈtæktfəl/	
tactic	/ˈtæktɪk/	
tag	/tæɡ/	
tail	/teɪl/	
tailor	/ˈteɪlər/	
take	/teɪk/	
takeoff	/ˈteɪkɔːf/	
tale	/teɪl/	
talent	/ˈtælənt/	
talk	/tɔːk/	
tall	/tɔːl/	
tame	/teɪm/	
tan	/tæn/	
tangible	/ˈtændʒəbəl/	
tangle	/ˈtæŋɡəl/	
tank	/tæŋk/	
tanker	/ˈtæŋkər/	
tap	/tæp/	
tape	/teɪp/	
target	/ˈtɑːrɡɪt/	
tariff	/ˈtærɪf/	
task	/tæsk/	
taste	/teɪst/	
tax	/tæks/	
taxi	/ˈtæksi/	
tea	/tiː/	
teach	/tiːtʃ/	
team	/tiːm/	
tear	/tɪr/ (n.) /ter/ (v. )	
tease	/tiːz/	
technical	/ˈteknɪkəl/	
technique	/tek ˈ niːk/	
technology	/tek ˈ nɑːlədʒi/	
tedious	/ˈtiːdiəs/	
teen	/tiːn/	
teenager	/ˈtiːneɪdʒər/	
telecommunications	/ˌtelikəmjuːnɪˈ keɪʃə	
telephone	/ˈtelɪfoʊn/	
phone	/foʊn/	
telescope	/ˈtelɪskoʊp/	
television	/ˈtelɪvɪʒən/	
tv	/ ˌtiː ˈviː/	
tell	/tel/	
teller	/ˈtelər/	
temper	/ˈtempər/	
temperament	/ˈtempərəmənt/	
temperature	/ˈtemprətʃər/	
temple	/ˈtempəl/	
tempo	/ˈtempoʊ/	
temporal	/ˈtempərəl/	
temporary	/ˈtempəreri/	
temporarily	/ˌtempəˈrerəli/	
tempt	/tempt/	
ten	/ten/	
temptation	/tempˈteɪʃən/	
tenant	/ˈtenənt/	
tendency	/ˈtendənsi/	
tend	/tend/	
tension	/ˈtenʃən/	
tender	/ˈtendər/	
tennis	/ˈtenɪs/	
tense	/tens/	
tent	/tent/	
tentative	/ˈtentətɪv/	
tenure	/ˈtenjər/	
term	/tɜːrm/	
terminal	/ˈtɜːrmɪnəl/	
termination	/ˌtɜːrmɪ ˈ neɪʃən/	
terminate	/ˈtɜːrmɪneɪt/	
terribly	/ˈterəbli/	
terrace	/ˈterəs/	
territorial	/ ˌterɪ ˈtɔːriəl/	
terrain	/tə ˈ reɪn/	
terrify	/ˈterɪfaɪ/	
terrorism	/ˈterərɪzəm/	
terrorist	/ˈterərɪst/	
terrible	/ˈterəbəl/	
terrific	/tə ˈ rɪfɪk/	
territory	/ˈterɪtɔːri/	
terror	/ˈterər/	
tertiary	/ˈtɜːrʃieri/	
test	/test/	
testify	/ˈtestɪfaɪ/	
testimony	/ˈtestɪmoʊni/	
text	/tekst/	
textbook	/ˈtekstbʊk/	
textile	/ˈtekstaɪl/	
thankful	/ˈəæŋkfəl/	
texture	/ˈtekstʃər/	
theatrical	/əi ˈætrɪkəl/	
than	/ðæn/ or /ðən/	
thank	/əæŋk/	
thanksgiving	/ˌəæŋksˈɡɪvɪŋ/	
that	/ðæt/	
the	/ðə/ or /ði/	
theater	/ˈəiːətər/	
theatre	/ˈəiːətər/	
theft	/əeft/	
their	/ðer/	
theirs	/ðerz/	
them	/ðem/ or /ðəm/	
theme	/əiːm/	
themselves	/ðəmˈselvz/	
then	/ðen/	
theory	/ˈəiːəri/	
theoretical	/ ˌəiːə ˈ retɪkəl/	
therapy	/ˈəerəpi/	
therapist	/ˈəerəpɪst/	
therapeutic	/ˌəerə ˈpjuːtɪk/	
there	/ðer/	
thereby	/ ˌðerˈbaɪ/	
therefore	/ˈðerfɔːr/	
thermal	/ˈəɜːrməl/	
thermometer	/əərˈ mɑːmɪtər/	
these	/ðiːz/	
thesis	/ˈəiːsɪs/	
they	/ðeɪ/	
thick	/əɪk/	
thief	/əiːf/	
thigh	/əaɪ/	
thin	/əɪn/	
thing	/əɪŋ/	
think	/əɪŋk/	
thinking	/ˈəɪŋkɪŋ/	
third	/əɜːrd/	
thirst	/əɜːrst/	
thirsty	/ˈəɜːrsti/	
thirteen	/ ˌəɜːr ˈtiːn/	
thirty	/ˈəɜːrti/	
this	/ðɪs/	
thorn	/əɔːrn/	
thorny	/ˈəɔːrni/	
thorough	/ˈəɜːroʊ/	
those	/ðoʊz/	
though	/ðoʊ/	
thought	/əɔːt/	
thoughtful	/ˈəɔːtfəl/	
thousand	/ˈəaʊzənd/	
thread	/əred/	
threat	/əret/	
threaten	/ˈəretən/	
three	/əriː/	
threshold	/ˈəreʃhoʊld/	
thrift	/ərɪft/	
thrifty	/ˈərɪfti/	
thrill	/ərɪl/	
thriller	/ˈərɪlər/	
thrive	/əraɪv/	
throat	/əroʊt/	
throne	/əroʊn/	
through	/əruː/	
throughout	/əruː ˈaʊt/	
throw	/əroʊ/	
thrust	/ərʌst/	
thumb	/əʌm/	
thunder	/ˈəʌndər/	
thunderous	/ˈəʌndərəs/	
thursday	/ˈəɜːrzdeɪ/	
thus	/ðʌs/	
tick	/tɪk/	
ticket	/ˈtɪkɪt/	
tickle	/ˈtɪkəl/	
tide	/taɪd/	
tidal	/ˈtaɪdəl/	
tidy	/ˈtaɪdi/	
tie	/taɪ/	
tiger	/ˈtaɪɡər/	
tigress	/ˈtaɪɡrəs/	
tight	/taɪt/	
tile	/taɪl/	
tighten	/ˈtaɪtən/	
till	/tɪl/	
tilt	/tɪlt/	
timely	/ˈtaɪmli/	
timing	/ˈtaɪmɪŋ/	
timber	/ˈtɪmbər/	
time	/taɪm/	
timid	/ˈtɪmɪd/	
tired	/ˈtaɪərd/	
tiring	/ˈtaɪrɪŋ/	
tireless	/ˈtaɪərləs/	
tiresome	/ˈtaɪərsəm/	
tin	/tɪn/	
tiny	/ˈtaɪni/	
tip	/tɪp/	
tire	/ˈtaɪər/	
tissue	/ˈtɪʃuː/	
title	/ˈtaɪtəl/	
to	/tuː/ or /tə/	
toast	/toʊst/	
tobacco	/təˈbækoʊ/	
today	/təˈdeɪ/	
toe	/toʊ/	
together	/təˈɡeðər/	
toil	/tɔɪl/	
tolerance	/ˈtɑːlərəns/	
tolerant	/ˈtɑːlərənt/	
tolerable	/ˈtɑːlərəbəl/	
toilet	/ˈtɔɪlɪt/	
tonnage	/ˈtʌnɪdʒ/	
token	/ˈtoʊkən/	
tolerate	/ˈtɑːləreɪt/	
toll	/toʊl/	
tomato	/təˈ meɪtoʊ/	
tomorrow	/təˈ mɑːroʊ/	
ton	/tʌn/	
tone	/toʊn/	
tongue	/tʌŋ/	
tonight	/tə ˈ naɪt/	
too	/tuː/	
tool	/tuːl/	
tooth	/tuːə/	
top	/tɑːp/	
topic	/ˈtɑːpɪk/	
topple	/ˈtɑːpəl/	
torch	/tɔːrtʃ/	
tornado	/tɔːrˈ neɪdoʊ/	
torture	/ˈtɔːrtʃər/	
toss	/tɔːs/	
total	/ˈtoʊtəl/	
touch	/tʌtʃ/	
tough	/tʌf/	
tour	/tʊr/	
tourism	/ˈtʊrɪzəm/	
tourist	/ˈtʊrɪst/	
tournament	/ˈtɜːrnəmənt/ or /ˈtʊrn əmənt/	
tow	/toʊ/	
toward	/təˈwɔːrd/	
towards	/təˈwɔːrdz/	
towel	/ˈtaʊəl/	
tower	/ˈtaʊər/	
town	/taʊn/	
township	/ˈtaʊnʃɪp/	
toxic	/ˈtɑːksɪk/	
toy	/tɔɪ/	
trace	/treɪs/	
track	/træk/	
tract	/trækt/	
tractor	/ˈtræktər/	
trade	/treɪd/	
trademark	/ˈtreɪdmɑːrk/	
tradition	/trəˈdɪʃən/	
traditional	/trəˈdɪʃənəl/	
traffic	/ˈtræfɪk/	
trafficking	/ˈtræfɪkɪŋ/	
tragedy	/ˈtrædʒədi/	
tragic	/ˈtrædʒɪk/	
tragical	/ˈtrædʒɪkəl/	
trail	/treɪl/	
trailer	/ˈtreɪlər/	
train	/treɪn/	
trainer	/ˈtreɪnər/	
training	/ˈtreɪnɪŋ/	
trait	/treɪt/	
tram	/træm/	
tranquil	/ˈtræŋkwɪl/	
tranquility	/træŋˈ kwɪləti/	
transaction	/trænˈzækʃən/	
transcend	/trænˈsend/	
transference	/trænsˈfɜːrəns/	
transcript	/ˈtrænskrɪpt/	
transfer	/træns ˈfɜːr/ (v.)/ˈtrænsfɜːr/ (n.)	
transform	/trænsˈfɔːrm/	
transformation	/ˌtrænsfərˈ meɪʃən/	
transient	/ˈtrænʃənt/	
transistor	/trænˈzɪstər/	
transit	/ˈtrænzɪt/	
transition	/trænˈzɪʃən/	
transitional	/trænˈzɪʃənəl/	
translate	/træns ˈleɪt/	
translation	/trænsˈleɪʃən/	
translator	/trænsˈleɪtər/	
transmit	/trænsˈ mɪt/	
transmission	/trænsˈ mɪʃən/	
transmitter	/trænsˈ mɪtər/	
transparent	/trænsˈ pærənt/	
transparency	/trænsˈ pærənsi/	
transplant	/trænsˈ plænt/ (v.)/ˈtrænsplænt/ (n.)	
transplantation	/ˌtrænsplænˈteɪʃən/	
transportation	/ˌtrænspərˈteɪʃən/	
transport	/ˈtrænspɔːrt/ (n.)/trænˈspɔːrt/ (v.)	
trap	/træp/	
trash	/træʃ/	
trauma	/ˈtrɔːmə/	
traumatic	/trəˈ mætɪk/	
travel	/ˈtrævəl/	
tray	/treɪ/	
tread	/tred/	
treasure	/ˈtreʒər/	
treasury	/ˈtreʒəri/	
treasurer	/ˈtreʒərər/	
treat	/triːt/	
treatment	/ˈtriːtmənt/	
treaty	/ˈtriːti/	
tree	/triː/	
trek	/trek/	
tremble	/ˈtrembəl/	
tremendous	/trəˈ mendəs/	
trench	/trentʃ/	
trend	/trend/	
trial	/ˈtraɪəl/	
triangle	/ˈtraɪæŋɡəl/	
triangular	/traɪˈæŋɡjələr/	
tribe	/traɪb/	
tribal	/ˈtraɪbəl/	
tribune	/ˈtrɪbjuːn/	
tribute	/ˈtrɪbjuːt/	
trick	/trɪk/	
tricky	/ˈtrɪki/	
trickle	/ˈtrɪkəl/	
trifle	/ˈtraɪfəl/	
trigger	/ˈtrɪɡər/	
triumphant	/traɪˈʌmfənt/	
trillion	/ˈtrɪljən/	
trim	/trɪm/	
trip	/trɪp/	
triple	/ˈtrɪpəl/	
triumph	/ˈtraɪəmf/	
trivial	/ˈtrɪviəl/	
trolley	/ˈtrɑːli/	
troop	/truːp/	
tropical	/ˈtrɑːpɪkəl/	
trophy	/ˈtroʊfi/	
troublesome	/ˈtrʌbəlsəm/	
tropic	/ˈtrɑːpɪk/	
truly	/ˈtruːli/	
trouble	/ˈtrʌbəl/	
trousers	/ˈtraʊzərz/	
truck	/trʌk/	
true	/truː/	
trumpet	/ˈtrʌmpɪt/	
trustee	/trʌ ˈstiː/	
trunk	/trʌŋk/	
truthful	/ˈtruːəfəl/	
trust	/trʌst/	
trying	/ˈtraɪɪŋ/	
truth	/truːə/	
try	/traɪ/	
tub	/tʌb/	
tube	/tuːb/	
tuck	/tʌk/	
tuesday	/ˈtuːzdeɪ/	
tug	/tʌɡ/	
tuition	/tuː ˈɪʃən/	
tumble	/ˈtʌmbəl/	
tumor	/ˈtuːmər/	
tumour	/ˈtuːmər/	
tune	/tuːn/	
tunnel	/ˈtʌnəl/	
turbulent	/ˈtɜːrbjələnt/	
turbulence	/ˈtɜːrbjələns/	
turkey	/ˈtɜːrki/	
turmoil	/ˈtɜːrmɔɪl/	
turn	/tɜːrn/	
turnout	/ˈtɜːrnaʊt/	
tutorial	/tuː ˈtɔːriəl/	
turnover	/ˈtɜːrnoʊvər/	
twelfth	/twelfə/	
twentieth	/ˈtwentiəə/	
turtle	/ˈtɜːrtəl/	
tutor	/ˈtuːtər/	
typist	/ˈtaɪpɪst/	
twelve	/twelv/	
twenty	/ˈtwenti/	
twice	/twaɪs/	
twin	/twɪn/	
twist	/twɪst/	
two	/tuː/	
type	/taɪp/	
typewriter	/ˈtaɪpraɪtər/	
typical	/ˈtɪpɪkəl/	
tyre	/ˈtaɪər/	
ugly	/ˈʌɡli/	
ultimate	/ˈʌltɪmət/	
ugliness	/ˈʌɡlinəs/	
ultimately	/ˈʌltɪmətli/	
ultra	/ˈʌltrə/	
umbrella	/ʌmˈbrelə/	
unanimous	/ju ˈ nænɪməs/	
uncertain	/ʌnˈsɜːrtən/	
uncertainty	/ʌn ˈsɜːrtənti/	
uncle	/ˈʌŋkəl/	
uncover	/ʌnˈ kʌvər/	
under	/ˈʌndər/	
underdeveloped	/ˌʌndərdɪ ˈveləpt/	
underestimate	/ ˌʌndərˈestɪmeɪt/	
undergo	/ˌʌndərˈɡoʊ/	
undergraduate	/ˌʌndərˈɡrædʒuɪt/	
underground	/ˈʌndərɡraʊnd/(adj./n.) / ˌʌndərˈɡraʊ	
underline	/ ˌʌndərˈ laɪn/	
underlie	/ ˌʌndərˈ laɪ/	
underlying	/ˌʌndərˈ laɪɪŋ/	
undermine	/ ˌʌndərˈ maɪn/	
underneath	/ ˌʌndərˈ niːə/	
understand	/ ˌʌndərˈstænd/	
understanding	/ˌʌndərˈstændɪŋ/	
undertake	/ ˌʌndərˈteɪk/	
undertaking	/ˌʌndərˈteɪkɪŋ/	
underwear	/ˈʌndərwer/	
undo	/ʌnˈduː/	
undoubtedly	/ʌnˈdaʊtɪdli/	
uneasy	/ʌn ˈ iːzi/	
unemployed	/ˌʌnɪmˈ plɔɪd/	
unemployment	/ˌʌnɪmˈ plɔɪmənt/	
unfold	/ʌnˈfoʊld/	
uniform	/ˈjuːnɪfɔːrm/	
uniformity	/ˌjuːnɪ ˈfɔːrməti/	
unify	/ˈjuːnɪfaɪ/	
unification	/ˌjuːnɪfɪˈ keɪʃən/	
unilateral	/ˌjuːnɪˈlætərəl/	
union	/ˈjuːniən/	
unique	/ju ˈ niːk/	
unit	/ˈjuːnɪt/	
unite	/ju ˈ naɪt/	
unity	/ˈjuːnəti/	
universe	/ˈjuːnɪvɜːrs/	
universal	/ˌjuːnɪ ˈvɜːrsəl/	
university	/ˌjuːnɪ ˈvɜːrsəti/	
unleash	/ʌn ˈliːʃ/	
unless	/ənˈles/	
unprecedented	/ʌnˈ presɪdentɪd/	
until	/ən ˈtɪl/	
unveil	/ʌnˈveɪl/	
up	/ʌp/	
update	/ʌpˈdeɪt/ (v.) /ˈʌpdeɪt/ (n.)	
upgrade	/ʌpˈɡreɪd/ (v.) / ˈʌpɡre ɪd/ (n.)	
uphold	/ʌpˈ hoʊld/	
upload	/ʌpˈloʊd/ (v.) /ˈʌploʊ d/ (n.)	
upon	/ə ˈ pɑːn/	
upper	/ˈʌpər/	
upright	/ˈʌpraɪt/	
uprising	/ˈʌpraɪzɪŋ/	
upset	/ʌp ˈset/ (v./adj.) / ˈʌ pset/ (n.)	
upstairs	/ˌʌpˈsterz/	
up-to-date	/ˌʌp tə ˈdeɪt/	
upward	/ˈʌpwərd/	
upwards	/ˈʌpwərdz/	
uranium	/jʊ ˈ reɪniəm/	
urban	/ˈɜːrbən/	
urge	/ɜːrdʒ/	
urbanize	/ˈɜːrbənaɪz/	
urbanization	/ˌɜːrbənaɪˈzeɪʃən/	
urgent	/ˈɜːrdʒənt/	
urgency	/ˈɜːrdʒənsi/	
urine	/ˈjʊrɪn/	
urinate	/ˈjʊrɪneɪt/	
us	/ʌs/	
usage	/ˈjuːsɪdʒ/	
use	/juːz/ (v.) /juːs/ (n.)	
user	/ˈjuːzər/	
useful	/ˈjuːsfəl/	
useless	/ˈjuːsləs/	
used	/juːzd/ (adj.) /juːst/ (adj. )	
usual	/ˈjuːʒuəl/	
usually	/ˈjuː3uəli/	
utility	/juː ˈtɪləti/	
utilize	/ˈjuːtəlaɪz/	
utilise	/ˈjuːtəlaɪz/	
utilization	/ˌjuːtəlaɪ ˈzeɪʃən/	
utilisation	/ˌjuːtəlaɪ ˈzeɪʃən/	
utmost	/ˈΛtmoust/	
utter	/ˈΛtər/	
utterly	/ˈΛtərli/	
vacant	/ˈveɪkənt/	
vacancy	/ˈveɪkənsi/	
vacation	/veɪˈ keɪʃən/	
vaccine	/væk ˈsiːn/	
vaccinate	/ˈvæksɪneɪt/	
vaccination	/ˌvæksɪˈ neɪʃən/	
vacuum	/ˈvækjuːm/	
vague	/veɪɡ/	
vain	/veɪn/	
vanity	/ˈvænəti/	
valid	/ˈvælɪd/	
validate	/ˈvælɪdeɪt/	
validity	/və ˈlɪdəti/	
valley	/ˈvæli/	
value	/ˈvæljuː/	
valuable	/ˈvæljuəbəl/	
valve	/vælv/	
van	/væn/	
vanish	/ˈvænɪʃ/	
vapor	/ˈveɪpər/	
vapour	/ˈveɪpər/	
various	/ˈveriəs/	
variety	/və ˈ raɪəti/	
vary	/ˈveri/	
variation	/ˌveriˈeɪʃən/	
variable	/ˈveriəbəl/	
variant	/ˈveriənt/	
vast	/væst/	
vegetable	/ˈved3təbəl/	
vegetarian	/ˌved3əˈteriən/	
vegetation	/ˌved3əˈteɪʃən/	
vehicle	/ˈviːhɪkəl/ or /ˈviːəkl/	
veil	/veɪl/	
vein	/veɪn/	
velocity	/və ˈlɑːsəti/	
velvet	/ˈvelvɪt/	
vendor	/ˈvendər/	
vent	/vent/	
ventilate	/ˈventɪleɪt/	
ventilation	/ˌventɪ ˈleɪʃən/	
venture	/ˈventʃər/	
venue	/ˈvenjuː/	
verb	/vɜːrb/	
verbal	/ˈvɜːrbəl/	
verdict	/ˈvɜːrdɪkt/	
verge	/vɜːrdʒ/	
verification	/ˌverɪfɪ ˈ keɪʃən/	
verify	/ˈverɪfaɪ/	
versatile	/ˈvɜːrsətəl/	
verse	/vɜːrs/	
version	/ˈvɜːrʒən/	
versus	/ˈvɜːrsəs/	
vertical	/ˈvɜːrtɪkəl/	
very	/ˈveri/	
vessel	/ˈvesəl/	
vest	/vest/	
veteran	/ˈvetərən/	
veto	/ˈviːtoʊ/	
via	/ˈvaɪə/ or /ˈviːə/	
viable	/ˈvaɪəbəl/	
vibrate	/ˈvaɪbreɪt/	
vibration	/vaɪˈbreɪʃən/	
vice	/vaɪs/	
vicinity	/vɪ ˈsɪnəti/	
vicious	/ˈvɪʃəs/	
victimize	/ˈvɪktɪmaɪz/	
victim	/ˈvɪktɪm/	
victory	/ˈvɪktəri/	
victorious	/vɪk ˈtɔːriəs/	
video	/ˈvɪdioʊ/	
view	/vjuː/	
viewpoint	/ˈvjuːpɔɪnt/	
vigor	/ˈvɪɡər/	
vigour	/ˈvɪɡər/	
vigorous	/ˈvɪɡərəs/	
village	/ˈvɪlɪdʒ/	
villager	/ˈvɪlɪdʒər/	
vinegar	/ˈvɪnɪɡər/	
violate	/ˈvaɪəleɪt/	
violation	/ˌvaɪəˈleɪʃən/	
violent	/ˈvaɪələnt/	
violence	/ˈvaɪələns/	
violin	/ ˌvaɪə ˈlɪn/	
violinist	/ ˌvaɪə ˈlɪnɪst/	
virgin	/ˈvɜːrdʒɪn/	
virginity	/vərˈdʒɪnəti/	
virtual	/ˈvɜːrtʃuəl/	
virtually	/ˈvɜːrtʃuəli/	
virtue	/ˈvɜːrtʃuː/	
virtuous	/ˈvɜːrtʃuəs/	
virus	/ˈvaɪrəs/	
visa	/ˈviːzə/	
visible	/ˈvɪzəbəl/	
visibility	/ ˌvɪzə ˈbɪləti/	
vision	/ˈvɪʒən/	
visionary	/ˈvɪʒəneri/	
visit	/ˈvɪzɪt/	
visitor	/ˈvɪzɪtər/	
visual	/ˈvɪʒuəl/	
visualize	/ˈvɪʒuəlaɪz/	
vital	/ˈvaɪtəl/	
vitality	/vaɪ ˈtæləti/	
vitamin	/ˈvaɪtəmɪn/	
vivid	/ˈvɪvɪd/	
vocabulary	/voʊˈ kæbjəleri/	
vocal	/ˈvoʊkəl/	
vocation	/voʊˈ keɪʃən/	
vocational	/voʊˈ keɪʃənəl/	
vogue	/voʊɡ/	
voice	/vɔɪs/	
void	/vɔɪd/	
volatile	/ˈvɑːlətəl/	
volatility	/ ˌvɑːlə ˈtɪləti/	
volcano	/vɑːlˈ keɪnoʊ/	
volcanic	/vɑːlˈ kænɪk/	
volleyball	/ˈvɑːlibɔːl/	
volt	/voʊlt/	
volume	/ˈvɑːljuːm/	
voluminous	/vəˈluːmɪnəs/	
volunteer	/ ˌvɑːlən ˈtɪr/	
voluntary	/ˈvɑːlənteri/	
vote	/voʊt/	
voter	/ˈvoʊtər/	
voucher	/ˈvaʊtʃər/	
vow	/vaʊ/	
voyage	/ˈvɔɪɪdʒ/	
vulgar	/ˈvʌlɡər/	
vulnerable	/ˈvʌlnərəbəl/	
vulnerability	/ ˌvʌlnərəˈbɪləti/	
wage	/weɪdʒ/	
waiter	/ˈweɪtər/	
waitress	/ˈweɪtrəs/	
wagon	/ˈwæɡən/	
waggon	/ˈwæɡən/	
waist	/weɪst/	
wait	/weɪt/	
waive	/weɪv/	
waiver	/ˈweɪvər/	
wake	/weɪk/	
waken	/ˈweɪkən/	
walk	/wɔːk/	
wall	/wɔːl/	
wallet	/ˈwɑːlɪt/	
wander	/ˈwɑːndər/	
want	/wɑːnt/	
war	/wɔːr/	
ward	/wɔːrd/	
wardrobe	/ˈwɔːrdroʊb/	
ware	/wer/	
warehouse	/ˈwerhaʊs/	
warfare	/ˈwɔːrfer/	
warm	/wɔːrm/	
warmth	/wɔːrmə/	
warn	/wɔːrn/	
warning	/ˈwɔːrnɪŋ/	
warrant	/ˈwɔːrənt/	
warranty	/ˈwɔːrənti/	
warrior	/ˈwɔːriər/	
wary	/ˈweri/	
wash	/wɔːʃ/	
washing	/ˈwɔːʃɪŋ/	
waste	/weɪst/	
wasteful	/ˈweɪstfəl/	
watch	/wɑːtʃ/	
watchful	/ˈwɑːtʃfəl/	
water	/ˈwɔːtər/	
waterproof	/ˈwɔːtərpruːf/	
watertight	/ˈwɔːtərtaɪt/	
watt	/wɑːt/	
wavy	/ˈweɪvi/	
weak	/wiːk/	
weakness	/ˈwiːknəs/	
weaken	/ˈwiːkən/	
wealth	/welə/	
wealthy	/ˈweləi/	
weapon	/ˈwepən/	
wear	/wer/	
weariness	/ˈwɪrinəs/	
weary	/ˈwɪri/	
weather	/ˈweðər/	
weave	/wiːv/	
web	/web/	
webcast	/ˈwebkæst/	
website	/ˈwebsaɪt/	
wed	/wed/	
wedding	/ˈwedɪŋ/	
wedge	/wedʒ/	
wednesday	/ˈwenzdeɪ/	
weed	/wiːd/	
week	/wiːk/	
weekly	/ˈwiːkli/	
weekday	/ˈwiːkdeɪ/	
weekend	/ ˌwiːk ˈend/	
weep	/wiːp/	
weigh	/weɪ/	
weight	/weɪt/	
weird	/wɪrd/	
welcome	/ˈwelkəm/	
welfare	/ˈwelfer/	
well	/wel/	
well-being	/ ˌwel ˈbiːɪŋ/	
well-known	/ ˌwel ˈ noʊn/	
well-off	/ ˌwel ˈɔːf/	
west	/west/	
western	/ˈwestərn/	
westerner	/ˈwestərnər/	
wet	/wet/	
whale	/weɪl/	
wharf	/wɔːrf/	
what	/wʌt/	
whatever	/wʌtˈevər/	
whatsoever	/ ˌwʌtsoʊˈevər/	
wheat	/wiːt/	
wheel	/wiːl/	
when	/wen/	
whenever	/wenˈevər/	
where	/wer/	
wherever	/werˈevər/	
whereabouts	/ˈwerəbaʊts/ (n.)/ˌwerəˈbaʊts/ (adv.)	
whereas	/werˈæz/	
whereby	/werˈbaɪ/	
whether	/ˈweðər/	
which	/wɪtʃ/	
whichever	/wɪtʃˈevər/	
while	/waɪl/	
whilst	/waɪlst/	
whip	/wɪp/	
whirl	/wɜːrl/	
whisky	/ˈwɪski/	
whisper	/ˈwɪspər/	
whistle	/ˈwɪsəl/	
white	/waɪt/	
who	/huː/	
whoever	/huːˈevər/	
whole	/hoʊl/	
wholly	/ˈhoʊlli/	
wholesale	/ˈhoʊlseɪl/	
wholesome	/ˈhoʊlsəm/	
whom	/huːm/	
whose	/huːz/	
why	/waɪ/	
wicked	/ˈwɪkɪd/	
wide	/waɪd/	
width	/wɪdə/	
widen	/ˈwaɪdən/	
widespread	/ˈwaɪdspred/	
widow	/ˈwɪdoʊ/	
widower	/ˈwɪdoʊər/	
wield	/wiːld/	
wife	/waɪf/	
wild	/waɪld/	
wilderness	/ˈwɪldərnəs/	
wildlife	/ˈwaɪldlaɪf/	
will	/wɪl/	
willpower	/ˈwɪlpaʊər/	
win	/wɪn/	
wind	/wɪnd/	
window	/ˈwɪndoʊ/	
wine	/waɪn/	
wing	/wɪŋ/	
wink	/wɪŋk/	
winter	/ˈwɪntər/	
wipe	/waɪp/	
wire	/ˈwaɪər/	
wise	/waɪz/	
wish	/wɪʃ/	
wit	/wɪt/	
witch	/wɪtʃ/	
with	/wɪð/ or /wɪə/	
withdraw	/wɪðˈdrɔː/	
wither	/ˈwɪðər/	
withhold	/wɪðˈhoʊld/	
within	/wɪˈðɪn/	
without	/wɪˈðaʊt/	
withstand	/wɪðˈstænd/	
witness	/ˈwɪtnəs/	
wolf	/wʊlf/	
woman	/ˈwʊmən/	
wonder	/ˈwʌndər/	
wonderful	/ˈwʌndərfəl/	
wood	/wʊd/	
wooden	/ˈwʊdən/	
wool	/wʊl/	
woolen	/ˈwʊlən/	
woollen	/ˈwʊlən/	
word	/wɜːrd/	
wording	/ˈwɜːrdɪŋ/	
work	/wɜːrk/	
worker	/ˈwɜːrkər/	
workforce	/ˈwɜːrkfɔːrs/	
workout	/ˈwɜːrkaʊt/	
workshop	/ˈwɜːrkʃɑːp/	
world	/wɜːrld/	
worldwide	/ˈwɜːrldwaɪd/	
worm	/wɜːrm/	
worry	/ˈwɜːri/	
worried	/ˈwɜːrid/	
worse	/wɜːrs/	
worship	/ˈwɜːrʃɪp/	
worst	/wɜːrst/	
willing	/ˈwɪlɪŋ/	
willingness	/ˈwɪlɪŋnəs/	
winner	/ˈwɪnər/	
windy	/ˈwɪndi/	
winery	/ˈwaɪnəri/	
wireless	/ˈwaɪərləs/	
wisdom	/ˈwɪzdəm/	
witty	/ˈwɪti/	
withdrawal	/wɪðˈdrɔːəl/	
worth	/wɜːrə/	
worthless	/ˈwɜːrələs/	
worthwhile	/ ˌwɜːrəˈwaɪl/	
worthiness	/ˈwɜːrð inəs/	
worthy	/ˈwɜːrð i/	
wrapping	/ˈræpɪŋ/	
would	/wʊd/	
wreckage	/ˈrekɪdʒ/	
wrestling	/ˈreslɪŋ/	
wrap	/ræp/	
wreck	/rek/	
wrench	/rentʃ/	
wrestle	/ˈresəl/	
wretched	/ˈretʃɪd/	
wrinkle	/ˈrɪŋkəl/	
wrist	/rɪst/	
write	/raɪt/	
writer	/ˈraɪtər/	
writing	/ˈraɪtɪŋ/	
wrong	/rɔːŋ/	
x-ray	/ˈeks reɪ/	
yacht	/jɑːt/	
yard	/jɑːrd/	
yawn	/jɔːn/	
year	/jɪr/	
yearly	/ˈjɪrli/	
yearning	/ˈjɜːrnɪŋ/	
yell	/jel/	
yearn	/jɜːrn/	
yellow	/ˈjeloʊ/	
yeah	/jeə/	
yes	/jes/	
yesterday	/ˈjestərdeɪ/	
yet	/jet/	
yield	/jiːld/	
yoga	/ˈjoʊɡə/	
yoghurt	/ˈjoʊɡərt/	
you	/juː/	
young	/jʌŋ/	
youngster	/ˈjʌŋstər/	
your	/jʊr/	
yours	/jʊrz/	
yourself	/jɔːr ˈself/	
yourselves	/jɔːrˈselvz/	
youth	/juːə/	
zeal	/ziːl/	
youthful	/ˈjuːəfəl/	
zealous	/ˈzeləs/	
zero	/ˈzɪroʊ/	
zigzag	/ˈzɪɡzæɡ/	
zip	/zɪp/	
zipper	/ˈzɪpər/	
zone	/zoʊn/	
zoological	/ˌzuːə ˈlɑːdʒɪkəl/	
zoo	/zuː/	
zoology	/zuː ˈɑːlədʒi/	
zoom	/zu:m/	`;
const CET6_WORDS = CET6_RAW.split('\n').map(l => {
  const p = l.split('\t');
  return [p[0] || '', p[1] || '', p[2] || ''];
}).filter(x => x[0]);

/* 402 个手写释义：docx 的释义列是空的，这里给一小批高频核心词补上，
   猜词选项和词书展示都靠它；其余词的释义在读文章时自动补齐。 */
const CET6_GLOSS = {
  'abandon': '放弃；抛弃', 'abolish': '废除（制度、法律）', 'abrupt': '突然的；唐突的', 'absurd': '荒谬的', 'accelerate': '加速；促进', 'accessible': '可接近的；易懂的',
  'accommodate': '容纳；适应', 'accumulate': '积累', 'acknowledge': '承认；致谢', 'acquire': '获得；习得', 'acute': '敏锐的；（病）急性的', 'adhere': '坚持；黏附',
  'adjacent': '邻近的', 'advocate': '提倡；拥护', 'aesthetic': '审美的；美学的', 'aggregate': '总计；集合体', 'allocate': '分配；拨给', 'ambiguous': '模棱两可的',
  'amend': '修正（法律、文件）', 'ample': '充足的；宽敞的', 'analogous': '类似的', 'anonymous': '匿名的', 'anticipate': '预料；期待', 'appraisal': '评估；鉴定',
  'arbitrary': '任意的；武断的', 'articulate': '清楚地表达', 'ascertain': '查明；确定', 'aspiration': '抱负；渴望', 'assert': '断言；主张', 'assess': '评估',
  'asset': '资产；有价值的人或物', 'assign': '分配；指派', 'assimilate': '吸收；同化', 'attain': '达到；获得', 'attribute': '把…归因于', 'authentic': '真正的；可信的',
  'autonomy': '自主权；自治', 'bias': '偏见；偏向', 'bolster': '支持；增强', 'breach': '违反；缺口', 'bulk': '大部分；体积', 'capacity': '容量；能力',
  'cater': '迎合；提供饮食', 'cease': '停止', 'chronic': '慢性的；长期的', 'circulate': '循环；流传', 'civic': '公民的；城市的', 'clarify': '澄清；阐明',
  'coherent': '连贯的；条理清楚的', 'coincide': '同时发生；一致', 'collaborate': '合作', 'commence': '开始', 'commodity': '商品；大宗商品', 'compatible': '兼容的；合得来的',
  'compel': '迫使', 'compensate': '补偿；抵消', 'compile': '汇编；编纂', 'complement': '补充；与…相配', 'comply': '遵从；服从', 'comprehensive': '全面的；综合的',
  'comprise': '由…组成；包含', 'conceal': '隐藏；隐瞒', 'concede': '承认；让步', 'conceive': '构想；设想', 'concise': '简洁的', 'condemn': '谴责；判刑',
  'confer': '授予；商议', 'confine': '限制；禁闭', 'conform': '遵守；符合', 'consensus': '共识；一致意见', 'conserve': '保护；节约', 'consolidate': '巩固；合并',
  'conspicuous': '显眼的；引人注目的', 'constitute': '构成；组成', 'constrain': '限制；约束', 'contaminate': '污染', 'contemplate': '沉思；考虑', 'contemporary': '当代的；同时代的',
  'contend': '主张；竞争', 'context': '语境；背景', 'contradict': '反驳；与…矛盾', 'contrary': '相反的', 'controversy': '争议', 'conventional': '传统的；常规的',
  'converge': '汇聚；趋同', 'convey': '传达；运送', 'conviction': '坚定的信念；定罪', 'correlate': '相关；使相互关联', 'correspond': '相符；通信', 'credible': '可信的',
  'criterion': '标准；准则', 'crucial': '至关重要的', 'cultivate': '培养；耕种', 'cumulative': '累积的', 'curb': '抑制；控制', 'dampen': '抑制；使减弱',
  'deceive': '欺骗', 'decisive': '决定性的；果断的', 'decline': '下降；婉拒', 'dedicate': '奉献；致力于', 'deem': '认为；视为', 'deficit': '赤字；不足',
  'deliberate': '故意的；审慎的', 'denote': '表示；意味着', 'depict': '描绘；描述', 'deprive': '剥夺', 'derive': '源于；获得', 'descend': '下降；下来',
  'designate': '指定；标明', 'deteriorate': '恶化', 'deviate': '偏离', 'devise': '设计；想出', 'diagnose': '诊断', 'differentiate': '区分；使不同',
  'diminish': '减少；削弱', 'discard': '丢弃；抛弃', 'disclose': '披露；透露', 'discrepancy': '差异；不一致', 'discriminate': '区别；歧视', 'dismiss': '驳回；解雇',
  'displace': '取代；使离开原位', 'dispose': '处理；处置', 'disrupt': '扰乱；中断', 'distinct': '明显的；截然不同的', 'distort': '扭曲；歪曲', 'diverse': '多样的',
  'domain': '领域；范围', 'dominate': '主导；支配', 'drain': '消耗；排水', 'drastic': '激烈的；极端的', 'dubious': '可疑的；半信半疑的', 'durable': '耐用的；持久的',
  'dwell': '居住；细想', 'eccentric': '古怪的', 'elaborate': '精心制作的；复杂的', 'elevate': '提升；升高', 'elicit': '引出；探出', 'eliminate': '消除；淘汰',
  'embrace': '拥抱；欣然接受', 'emerge': '出现；显露', 'eminent': '杰出的；著名的', 'empirical': '实证的；经验的', 'endeavor': '努力；尝试', 'endorse': '赞同；代言',
  'endure': '忍受；持续', 'enforce': '执行；强制', 'enhance': '增强；提高', 'entail': '需要；牵涉', 'enterprise': '企业；事业心', 'entitle': '使有资格；给…命名',
  'equilibrium': '平衡；均衡', 'equity': '公平；股权', 'erode': '侵蚀；削弱', 'essence': '本质；精髓', 'esteem': '尊重；敬重', 'evoke': '唤起；引起',
  'evolve': '演变；进化', 'exaggerate': '夸大', 'exceed': '超过', 'exceptional': '杰出的；例外的', 'exclusive': '独有的；排外的', 'exert': '施加（影响、压力）',
  'exhaust': '耗尽；使疲惫', 'explicit': '明确的；直白的', 'exploit': '利用；剥削', 'extract': '提取；摘录', 'extravagant': '奢侈的；过度的', 'fabricate': '捏造；制造',
  'facilitate': '促进；使便利', 'faculty': '才能；院系；全体教员', 'feasible': '可行的', 'fluctuate': '波动；起伏', 'foster': '培养；促进', 'fragile': '脆弱的；易碎的',
  'framework': '框架；体系', 'friction': '摩擦；分歧', 'fundamental': '根本的；基础的', 'gauge': '衡量；判断', 'genuine': '真正的；真诚的', 'grasp': '抓住；理解',
  'grave': '严重的；严肃的', 'halt': '停止；中断', 'hamper': '妨碍；阻碍', 'harness': '利用（自然力）', 'hazard': '危险；隐患', 'heritage': '遗产；传统',
  'hierarchy': '等级制度；层级', 'hinder': '阻碍', 'hypothesis': '假设；假说', 'identical': '完全相同的', 'ideology': '意识形态；观念体系', 'illustrate': '说明；举例说明',
  'imminent': '迫近的', 'impair': '损害；削弱', 'impartial': '公正的；不偏不倚的', 'implement': '实施；执行', 'implication': '含义；潜在影响', 'implicit': '含蓄的；隐含的',
  'impose': '强加；征收', 'incentive': '激励；动机', 'incline': '倾向；使倾斜', 'incorporate': '纳入；包含', 'indigenous': '本土的；土生的', 'induce': '引起；诱导',
  'indulge': '沉溺；纵容', 'inevitable': '不可避免的', 'infer': '推断', 'inherent': '内在的；固有的', 'inhibit': '抑制；阻碍', 'initiate': '发起；开始',
  'insight': '洞察力；见解', 'integral': '不可或缺的；整体的', 'integrate': '整合；融入', 'integrity': '正直；完整性', 'intensify': '加强；加剧', 'intervene': '干预；介入',
  'intrinsic': '内在的；本质的', 'invoke': '援引；唤起', 'isolate': '隔离；孤立', 'jeopardize': '危及；损害', 'justify': '证明…正当', 'legacy': '遗产；遗留问题',
  'legitimate': '合法的；合理的', 'liable': '有责任的；易于…的', 'lucrative': '有利可图的', 'magnitude': '重要性；量级', 'maintain': '维持；主张', 'mandate': '授权；命令',
  'manifest': '显示；表明', 'manipulate': '操纵；操控', 'marginal': '边缘的；微小的', 'mediate': '调解；斡旋', 'merit': '优点；价值', 'migrate': '迁移；移居',
  'mitigate': '缓解；减轻', 'mobilize': '动员；调动', 'momentum': '势头；动量', 'monopoly': '垄断', 'navigate': '导航；应对（复杂局面）', 'neutral': '中立的；中性的',
  'notion': '概念；观念', 'nourish': '滋养；培养', 'objective': '客观的', 'obligation': '义务；责任', 'obscure': '晦涩的；不出名的', 'obstacle': '障碍',
  'offset': '抵消；弥补', 'ongoing': '持续进行的', 'optimal': '最优的；最佳的', 'outcome': '结果；成果', 'outset': '开端；开始', 'overwhelming': '压倒性的',
  'paradox': '悖论；自相矛盾的事', 'parallel': '平行的；类似的', 'peculiar': '奇怪的；特有的', 'perceive': '察觉；认为', 'peripheral': '外围的；次要的', 'persist': '坚持；持续存在',
  'perspective': '视角；观点', 'pervasive': '普遍的；无处不在的', 'phenomenon': '现象', 'plausible': '貌似合理的', 'portray': '描绘；扮演', 'pose': '造成（威胁）；提出（问题）',
  'precede': '先于；在…之前发生', 'predominant': '主要的；占主导的', 'preliminary': '初步的；预备的', 'premise': '前提；假设', 'prescribe': '规定；开（药）', 'preserve': '保护；保存',
  'prestige': '声望；威信', 'presume': '假定；推测', 'prevail': '盛行；获胜', 'primitive': '原始的；简陋的', 'principal': '主要的；首要的', 'prior': '先前的；优先的',
  'privilege': '特权；荣幸', 'probe': '探究；探查', 'proclaim': '宣布；表明', 'prohibit': '禁止', 'prolong': '延长', 'prominent': '突出的；著名的',
  'prone': '易于…的；倾向于…的', 'proportion': '比例；部分', 'prospect': '前景；可能性', 'provoke': '激起；挑衅', 'prudent': '谨慎的；精明的', 'qualify': '使合格；取得资格',
  'quota': '配额；定额', 'radical': '激进的；根本的', 'rational': '理性的；合理的', 'reclaim': '收回；开垦', 'reconcile': '调和；使一致', 'refine': '提炼；改进',
  'reinforce': '强化；加强', 'relevant': '相关的；切题的', 'reluctant': '不情愿的', 'remedy': '补救办法；疗法', 'render': '使成为；提供', 'replicate': '复制；重复',
  'resemble': '与…相似', 'reside': '居住；存在于', 'resolve': '解决；决心', 'restore': '恢复；修复', 'restrain': '抑制；约束', 'retain': '保留；保持',
  'retreat': '撤退；退缩', 'reveal': '揭示；显露', 'revenue': '收入；税收', 'reverse': '反转；颠倒', 'revise': '修改；复习', 'rigid': '僵硬的；死板的',
  'rival': '竞争对手', 'robust': '强健的；稳健的', 'salient': '显著的；突出的', 'sanction': '制裁；批准', 'scarce': '稀缺的', 'scenario': '情景；设想',
  'scrutiny': '仔细审查', 'segment': '部分；细分市场', 'sequence': '序列；一连串', 'severe': '严重的；严厉的', 'shrink': '收缩；萎缩', 'significant': '重要的；显著的',
  'simulate': '模拟；模仿', 'skeptical': '怀疑的', 'sober': '清醒的；冷静的', 'solitary': '孤独的；独自的', 'sophisticated': '复杂的；老练的', 'sparse': '稀少的；稀疏的',
  'spectrum': '范围；光谱', 'speculate': '推测；投机', 'spontaneous': '自发的；即兴的', 'stability': '稳定；稳定性', 'stagnant': '停滞的；不流动的', 'stem': '源于；遏制',
  'stimulate': '刺激；激发', 'straightforward': '直接的；坦率的', 'strain': '压力；紧张', 'strategic': '战略的；关键的', 'striking': '显著的；引人注目的', 'subjective': '主观的',
  'submit': '提交；屈服', 'subordinate': '次要的；从属的', 'subsequent': '随后的', 'subsidy': '补贴；津贴', 'substantial': '大量的；实质的', 'substitute': '替代',
  'subtle': '微妙的；细微的', 'suffice': '足够；满足', 'supplement': '补充', 'suppress': '压制；抑制', 'surge': '激增；涌动', 'surpass': '超过；胜过',
  'susceptible': '易受影响的；易感的', 'sustain': '维持；承受', 'tackle': '处理；应对', 'tangible': '有形的；切实的', 'tedious': '乏味的；冗长的', 'temper': '缓和；调节',
  'temporary': '临时的', 'tempt': '诱惑；引诱', 'tentative': '试探性的；暂定的', 'terminate': '终止；结束', 'thereby': '因此；从而', 'thorough': '彻底的；周密的',
  'threshold': '门槛；临界值', 'thrive': '繁荣；茁壮成长', 'tolerate': '容忍；耐受', 'trace': '追溯；追踪', 'trait': '特征；特性', 'transmit': '传送；传播',
  'transparent': '透明的；公开的', 'trigger': '引发；触发', 'trivial': '微不足道的', 'ultimate': '最终的；根本的', 'undergo': '经历；接受', 'underlying': '潜在的；根本的',
  'undermine': '削弱；暗中破坏', 'undertake': '承担；着手', 'uniform': '统一的；一致的', 'unprecedented': '前所未有的', 'utilize': '利用', 'vague': '模糊的；含糊的',
  'valid': '有效的；站得住脚的', 'vanish': '消失', 'variable': '可变的；多变的', 'vast': '广阔的；巨大的', 'venture': '冒险事业；风险投资', 'verify': '核实；证实',
  'viable': '可行的；能存活的', 'vibrant': '充满活力的；鲜艳的', 'virtue': '美德；优点', 'vital': '至关重要的', 'vivid': '生动的；鲜明的', 'volatile': '易变的；波动剧烈的',
  'voluntary': '自愿的；志愿的', 'vulnerable': '脆弱的；易受伤的', 'warrant': '使有必要；证明正当', 'withstand': '承受；抵住', 'witness': '见证；目击', 'yield': '产出；屈服',
};
