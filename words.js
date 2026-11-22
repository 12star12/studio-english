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
  'a': '不定冠词；一个',
  'an': '不定冠词；一个',
  'abbreviation': '缩写；简称',
  'abide': '遵守；忍受',
  'able': '能；有能力的',
  'ability': '能力；才能',
  'abnormal': '异常；不正常',
  'aboard': '在船（车、飞机）上',
  'abolition': '废除；废止',
  'abort': '中止；流产',
  'abortion': '流产；堕胎',
  'about': '关于；大约',
  'above': '在上方；超过',
  'abreast': '并肩；并排',
  'abroad': '在国外',
  'absent': '缺席；不在',
  'absolute': '绝对的；无条件的',
  'absorb': '吸收；吸引',
  'absorption': '吸收；专注',
  'abstract': '抽象；概括',
  'absurdity': '荒谬；荒唐',
  'abundant': '丰富；充裕',
  'abundance': '丰富；大量',
  'abuse': '滥用；虐待',
  'abusive': '侮辱的；滥用的',
  'academy': '学院；研究院',
  'academic': '学术的；学院的',
  'academician': '院士；学者',
  'acceleration': '加速；加速度',
  'accent': '口音；重音',
  'accept': '接受；承认',
  'acceptance': '接受；认可',
  'acceptable': '可接受的；合格的',
  'access': '进入；通道',
  'accessory': '附件；同谋',
  'accident': '事故；意外',
  'accidental': '意外的；偶然的',
  'acclaim': '欢呼；称赞',
  'accommodation': '住宿；适应',
  'accompany': '陪伴；伴随',
  'accomplish': '完成；实现',
  'accomplishment': '成就；完成',
  'accord': '一致；协议',
  'accordance': '一致；符合',
  'accordingly': '相应地；因此',
  'account': '账户；解释',
  'accounting': '会计；核算',
  'accountant': '会计师；会计员',
  'accountancy': '会计学；会计行业',
  'accountable': '负责的；可解释的',
  'accountability': '责任；可解释性',
  'accumulation': '积累；积聚',
  'accumulative': '累积的；渐增的',
  'accurate': '准确的；精确的',
  'accuracy': '准确；精确度',
  'accuse': '指控；控告',
  'accusation': '指控；控告',
  'accustom': '使习惯；适应',
  'accustomed': '习惯的；适应的',
  'ace': '高手；王牌',
  'ache': '疼痛；痛苦',
  'achieve': '实现；完成',
  'achievement': '成就；成果',
  'acid': '酸；酸性物质',
  'acidity': '酸性；酸度',
  'acknowledgement': '承认；感谢',
  'acquaint': '认识；使熟悉',
  'acquaintance': '熟人；相识',
  'acquisition': '获得；购置',
  'acre': '英亩；土地面积单位',
  'across': '横过；越过',
  'act': '行动；扮演',
  'action': '行动；活动',
  'acting': '表演；行为',
  'activate': '激活；使活动',
  'active': '活跃的；积极的',
  'activity': '活动；活跃',
  'activist': '活动家；积极分子',
  'actor': '演员；行为者',
  'actress': '女演员；演员',
  'actual': '实际的；真实的',
  'actually': '实际上；事实上',
  'acupuncture': '针灸；针法',
  'adapt': '适应；改编',
  'adaptation': '适应；改编',
  'adaptive': '适应性的；可适应的',
  'add': '增加；添加',
  'addition': '增加；加法',
  'additional': '额外的；附加的',
  'addict': '上瘾者；使上瘾',
  'addiction': '上瘾；沉迷',
  'addictive': '上瘾的；吸引人的',
  'address': '地址；致辞',
  'adequate': '足够的；适当的',
  'adequacy': '足够；适当',
  'adequately': '足够地；适当地',
  'adherence': '遵守；坚持',
  'adjective': '形容词',
  'adjust': '调整；调节',
  'adjustment': '调整；调节',
  'administer': '管理；执行',
  'administrate': '管理；治理',
  'administration': '管理；行政',
  'administrative': '行政的；管理的',
  'admire': '钦佩；赞美',
  'admiration': '钦佩；赞美',
  'admirable': '值得钦佩的；令人赞美的',
  'admit': '承认；接纳',
  'admission': '承认；入学许可',
  'admittance': '准入；入场许可',
  'admittedly': '无可否认地；公认地',
  'adolescent': '青少年；青少年期',
  'adolescence': '青少年期；青春期',
  'adopt': '采用；收养',
  'adoption': '采用；收养',
  'adore': '崇拜；热爱',
  'adorable': '可爱的；令人爱慕的',
  'adult': '成人；成年人',
  'adulthood': '成年；成人期',
  'advance': '前进；提升',
  'advancement': '进步；提升',
  'advanced': '高级的；先进的',
  'advantage': '优势；有利条件',
  'advantageous': '有利的；有益的',
  'advent': '到来；出现',
  'adventure': '冒险；奇遇',
  'adventurer': '冒险家；探险家',
  'adventurous': '冒险的；大胆的',
  'adverb': '副词；状语',
  'adversary': '对手；敌人',
  'adverse': '不利的；敌对的',
  'adversity': '逆境；不幸',
  'advertise': '广告；宣传',
  'advertisement': '广告；公告',
  'advertising': '广告；宣传',
  'advice': '建议；忠告',
  'advise': '建议；劝告',
  'adviser': '顾问；指导者',
  'advisor': '顾问；指导者',
  'advisory': '咨询性的；顾问的',
  'advisable': '可取的；明智的',
  'advocacy': '提倡；倡导',
  'aerial': '空中的；航空的',
  'aesthetics': '美学；审美',
  'affair': '事务；事件',
  'affect': '影响；感动',
  'affection': '感情；爱',
  'affectionate': '亲切的；深情的',
  'affiliate': '附属机构；加盟者',
  'affiliation': '联系；从属关系',
  'affirm': '肯定；确认',
  'affirmation': '肯定；确认',
  'affirmative': '肯定的；积极的',
  'affix': '附加；贴上',
  'affixation': '附加；贴上',
  'affluent': '富饶的；富裕的',
  'affluence': '富裕；丰富',
  'afford': '负担得起；提供',
  'affordable': '负担得起的；可负担的',
  'affordability': '负担能力；可负担性',
  'afloat': '漂浮；不负债',
  'afraid': '害怕；担心',
  'after': '之后；在...之后',
  'aftermath': '后果；余波',
  'afternoon': '下午；午后',
  'afterward': '之后；后来',
  'afterwards': '之后；后来',
  'again': '再次；又',
  'against': '反对；与...相对',
  'age': '年龄；时代',
  'aged': '年老的；老化的',
  'aging': '老化；变老',
  'agenda': '议程；计划',
  'agency': '机构；代理',
  'agent': '代理人；中介',
  'aggravate': '加剧；恶化',
  'aggravation': '加剧；烦恼',
  'aggressive': '侵略性的；有进取心的',
  'aggression': '侵略；攻击',
  'agitate': '搅动；煽动',
  'agitation': '搅动；动荡',
  'ago': '以前',
  'agree': '同意',
  'agreement': '协议；同意',
  'agreeable': '令人愉快的；同意的',
  'agony': '剧痛；痛苦',
  'agriculture': '农业',
  'agricultural': '农业的',
  'ahead': '在前；将来',
  'aid': '帮助；援助',
  'aide': '助手；副官',
  'aids': '帮助；艾滋病',
  'ail': '生病',
  'ailment': '疾病',
  'aim': '目标；瞄准',
  'air': '空气；空中',
  'airborne': '空中的；空气传播的',
  'aircraft': '飞机',
  'airline': '航空公司',
  'airplane': '飞机；航空器',
  'aeroplane': '飞机；航空器',
  'airport': '机场；航空站',
  'aisle': '通道；走道',
  'akin': '类似；相似的',
  'alarm': '警报；闹钟',
  'album': '相册；专辑',
  'alcohol': '酒精；酒',
  'alcoholic': '酒精中毒者；酒鬼',
  'ale': '麦酒；啤酒',
  'alert': '警觉；警报',
  'algebra': '代数；代数学',
  'alien': '外星人；外国人',
  'alienate': '疏远；使疏远',
  'alienation': '疏远；异化',
  'align': '对齐；排列',
  'alignment': '对齐；排列',
  'alike': '相似；相像',
  'alive': '活着；活跃的',
  'all': '所有；全部',
  'allege': '声称；指控',
  'allegation': '指控；指控事项',
  'alleged': '被指控的',
  'allegedly': '据称；据说',
  'allergic': '过敏的',
  'allergy': '过敏症',
  'alleviate': '减轻；缓解',
  'alleviation': '减轻；缓解',
  'alley': '小巷；小巷道',
  'allocation': '分配；配给',
  'allot': '分配；拨给',
  'allotment': '分配；拨给',
  'allow': '允许；准许',
  'allowance': '津贴；补助',
  'alloy': '合金',
  'allude': '暗示；提及',
  'allusion': '暗示；典故',
  'allure': '吸引；诱惑',
  'allurement': '诱惑；魅力',
  'ally': '盟友；同盟国',
  'absence': '缺席；不在',
  'alliance': '联盟；联合',
  'almighty': '全能的；强大的',
  'almost': '几乎；差不多',
  'aloft': '在高处；在空中',
  'alone': '单独的；孤独的',
  'along': '沿着；一起',
  'alongside': '在旁边；并排',
  'aloud': '大声地',
  'alphabet': '字母表',
  'alphabetic': '字母的；按字母顺序的',
  'alphabetical': '字母顺序的',
  'already': '已经',
  'also': '也；同样',
  'alter': '改变；更改',
  'alteration': '改变；变动',
  'alternate': '交替的；轮流的',
  'alternation': '交替；轮流',
  'alternately': '交替地；轮流地',
  'alternative': '替代的；选择的',
  'although': '尽管；虽然',
  'altitude': '高度；海拔',
  'altogether': '总共；完全',
  'aluminium': '铝',
  'always': '总是；一直',
  'am': '我；是',
  'amass': '积累；积聚',
  'amateur': '业余的；外行的',
  'amaze': '使惊讶；使惊奇',
  'amazing': '惊人的；了不起的',
  'amazement': '惊讶；惊奇',
  'ambassador': '大使；使节',
  'ambiguity': '含糊；不明确',
  'ambition': '野心；抱负',
  'ambitious': '有野心的；雄心勃勃的',
  'ambulance': '救护车',
  'amendment': '修正；修改',
  'amiable': '和蔼的；亲切的',
  'amidst': '在...之中；在...之间',
  'ammunition': '弹药；军火',
  'amongst': '在...之中；在...之间',
  'amount': '数量；总额',
  'amplify': '放大；增强',
  'amplification': '放大；增强',
  'amuse': '逗乐；使愉快',
  'amusing': '有趣的；愉快的',
  'amusement': '娱乐；乐趣',
  'analogue': '类似物；模拟',
  'analogy': '类比；类似',
  'analyse': '分析；分解',
  'analysis': '分析；分解',
  'analytic': '分析的；解析的',
  'analytical': '分析的；解析的',
  'analyst': '分析师；分解者',
  'ancestor': '祖先；祖宗',
  'ancestry': '血统；家世',
  'anchor': '锚；支柱',
  'anchorage': '锚地；停泊处',
  'ancient': '古老的；古代的',
  'and': '和；与',
  'anecdote': '轶事；趣闻',
  'anecdotal': '轶事的；趣闻的',
  'anew': '重新；再次',
  'angel': '天使',
  'angle': '角度；观点',
  'angry': '生气的；愤怒的',
  'anger': '愤怒；怒火',
  'anguish': '痛苦；苦恼',
  'animal': '动物',
  'animate': '有生命的；活泼的',
  'animated': '生动的；活泼的',
  'animation': '动画；活动',
  'ankle': '踝；脚踝',
  'annex': '附属物；并吞',
  'annexation': '并吞；吞并',
  'anniversary': '周年纪念',
  'announce': '宣布；通告',
  'announcement': '公告；通告',
  'annoy': '打扰；使烦恼',
  'annoyance': '烦恼；麻烦',
  'annual': '每年的；年度的',
  'anonymity': '匿名；匿名性',
  'another': '另一个；另一',
  'answer': '回答；答案',
  'ant': '蚂蚁',
  'antagonist': '对手；敌手',
  'antagonistic': '对抗的；敌对的',
  'antagonistically': '对抗地；敌对地',
  'antagonism': '对抗；敌对',
  'antenna': '天线',
  'anticipation': '预期；期待',
  'antibiotic': '抗生素',
  'antique': '古董；古老的',
  'antonym': '反义词',
  'anxiety': '焦虑；忧虑',
  'anxious': '焦虑的；担忧的',
  'any': '任何；一些',
  'apologize': '道歉；认错',
  'apologise': '道歉；认错',
  'apologetic': '道歉的；抱歉的',
  'anybody': '任何人',
  'anyone': '任何人',
  'anyhow': '无论如何；不管怎样',
  'anything': '任何东西',
  'anyway': '无论如何；不管怎样',
  'anywhere': '任何地方',
  'apart': '分开；相隔',
  'apartment': '公寓',
  'apt': '适当的；恰当的',
  'ape': '猿；仿效',
  'apology': '道歉；辩解',
  'app': '应用程序',
  'appal': '使惊愕；使震惊',
  'appall': '使惊愕；使震惊',
  'apparatus': '设备；仪器',
  'apparent': '明显的；显而易见的',
  'apparently': '显然地；明显地',
  'appeal': '呼吁；上诉',
  'appealing': '吸引人的；诱人的',
  'appear': '出现；显得',
  'appearance': '外观；出现',
  'appease': '平息；安抚',
  'appeasement': '平息；安抚',
  'appendix': '附录；阑尾',
  'applause': '鼓掌；喝彩',
  'appetite': '食欲；欲望',
  'applaud': '鼓掌；称赞',
  'apple': '苹果',
  'application': '申请；应用',
  'applicant': '申请人',
  'applicable': '适用的；可应用的',
  'appliance': '器具；设备',
  'apply': '应用；申请',
  'appoint': '任命；约定',
  'appointment': '约会；任命',
  'appraise': '评价；估价',
  'appreciate': '感激；欣赏',
  'appreciation': '感激；欣赏',
  'appreciative': '感激的；欣赏的',
  'apprentice': '学徒',
  'appropriation': '拨款；挪用',
  'approach': '方法；接近',
  'appropriate': '适当的；恰当的',
  'approve': '批准；赞成',
  'approval': '批准；赞成',
  'approximate': '近似；大约',
  'approximately': '近似地；大约地',
  'approximation': '近似；估计',
  'april': '四月',
  'apron': '围裙',
  'aptly': '适当地；恰当地',
  'aptitude': '才能；倾向',
  'arbitrarily': '任意地；武断地',
  'arbitrate': '仲裁；裁决',
  'arbitration': '仲裁；裁决',
  'arc': '弧；弧形',
  'arch': '拱；拱形',
  'architect': '建筑师',
  'architecture': '建筑；建筑学',
  'archive': '档案；档案馆',
  'ardent': '热情的；热烈的',
  'area': '地区；区域',
  'arena': '竞技场；舞台',
  'argue': '争论；辩论',
  'argument': '争论；论点',
  'argumentation': '论证；论战',
  'argumentative': '好争论的；爱辩论的',
  'arguable': '可争论的；可辩驳的',
  'arise': '出现；发生',
  'aristocrat': '贵族；贵族政治家',
  'aristocratic': '贵族的；贵族政治的',
  'aristocracy': '贵族；贵族政治',
  'arithmetic': '算术',
  'arm': '臂；武装',
  'armament': '军备；武器',
  'armor': '盔甲；装甲',
  'armour': '盔甲；装甲',
  'army': '军队',
  'around': '围绕；大约',
  'arouse': '唤醒；激起',
  'arousal': '唤醒；激起',
  'arrange': '安排；整理',
  'arrangement': '安排；整理',
  'array': '排列；一系列',
  'arrest': '逮捕；阻止',
  'arrive': '到达；抵达',
  'arrival': '到达；抵达',
  'arrogant': '傲慢的；自大的',
  'arrogance': '傲慢；自大',
  'arrow': '箭；箭头',
  'art': '艺术；技艺',
  'artist': '艺术家',
  'artistic': '艺术的；有艺术感的',
  'artistically': '艺术地；有艺术风格地',
  'artery': '动脉',
  'article': '文章；物品',
  'articulation': '关节；明确表达',
  'artifact': '人工制品；手工艺品',
  'artificial': '人工的；人造的',
  'be': '是；存在',
  'beach': '海滩',
  'bead': '珠子',
  'beak': '喙',
  'beam': '梁；光线',
  'bean': '豆',
  'bear': '熊；忍受',
  'beard': '胡须',
  'bearing': '轴承；忍受',
  'beast': '野兽',
  'beat': '敲打；节拍',
  'beauty': '美；美人',
  'beautiful': '美',
  'beautify': '美化',
  'because': '因为',
  'beckon': '招手',
  'become': '成为',
  'bed': '床',
  'bedding': '床品',
  'bee': '蜜蜂',
  'beef': '牛肉',
  'beer': '啤酒',
  'beetle': '甲虫',
  'before': '之前',
  'beforehand': '事先',
  'beg': '乞讨',
  'begin': '开始',
  'beggar': '乞丐',
  'beginning': '开始',
  'behalf': '代表',
  'behave': '行为',
  'behaviour': '行为',
  'behavioral': '行为上的',
  'behind': '后面',
  'being': '存在',
  'belief': '信仰',
  'believe': '相信',
  'bell': '铃',
  'belly': '肚子',
  'belong': '属于',
  'belongings': '财产',
  'beloved': '心爱的人',
  'below': '下面',
  'belt': '腰带',
  'bench': '长椅',
  'bend': '弯曲',
  'beneath': '下面',
  'benefit': '好处',
  'beneficial': '有益的',
  'beneficiary': '受益人',
  'benevolence': '仁慈',
  'benevolent': '仁慈的',
  'benign': '良性的',
  'berry': '浆果',
  'beset': '困扰',
  'beside': '旁边',
  'besides': '除...之外',
  'siege': '围攻',
  'best': '最好的',
  'bet': '打赌',
  'betray': '背叛',
  'better': '更好',
  'between': '之间',
  'beverage': '饮料',
  'beware': '小心',
  'bewilder': '迷惑',
  'bewilderment': '迷惑',
  'beyond': '超过',
  'bible': '圣经',
  'biblical': '圣经的',
  'bibliography': '书目',
  'bicycle': '自行车',
  'bike': '自行车',
  'bid': '投标',
  'big': '大',
  'bilateral': '双边的',
  'bill': '账单',
  'billion': '十亿',
  'bin': '箱子',
  'billionaire': '亿万富翁',
  'bind': '捆绑',
  'binoculars': '双筒望远镜',
  'biochemistry': '生物化学',
  'biochemical': '生物化学的',
  'biochemist': '生物化学家',
  'biography': '传记',
  'biographical': '传记的',
  'biographer': '传记作家',
  'biology': '生物学',
  'biological': '生物学的',
  'biologist': '生物学家',
  'biotechnology': '生物技术',
  'bird': '鸟',
  'birth': '出生',
  'birthday': '生日',
  'biscuit': '饼干',
  'bishop': '主教',
  'bit': '一点',
  'bitch': '母狗',
  'bite': '咬',
  'cellar': '地下室；酒窖',
  'celsius': '摄氏度',
  'cement': '水泥',
  'cemetery': '墓地',
  'censor': '审查员；审查',
  'censorship': '审查制度',
  'census': '人口普查',
  'cent': '分；百分之一',
  'center': '中心；中央',
  'central': '中心的；中央的',
  'centigrade': '摄氏温度计',
  'centralize': '集中；使集中',
  'centimeter': '厘米',
  'century': '世纪',
  'ceramic': '陶瓷',
  'cereal': '谷物；谷类食品',
  'ceremony': '仪式；典礼',
  'ceremonial': '仪式的；礼节的',
  'certain': '确定的；无疑的',
  'certainly': '当然；无疑地',
  'certainty': '确定性；必然性',
  'certificate': '证书；证明',
  'certify': '证明；证实',
  'certification': '证明；认证',
  'chain': '链条；连锁',
  'chair': '椅子；主席',
  'chairman': '主席；董事长',
  'chairperson': '主席；董事长',
  'chalk': '粉笔；白垩',
  'challenge': '挑战；挑衅',
  'challenging': '挑战性的；艰巨的',
  'chamber': '房间；议院',
  'champagne': '香槟酒',
  'champion': '冠军；捍卫者',
  'championship': '冠军；锦标赛',
  'chance': '机会；可能性',
  'chancellor': '总理；大臣',
  'change': '改变；零钱',
  'channel': '频道；水道',
  'chant': '吟唱；颂歌',
  'chaos': '混乱；无序',
  'chaotic': '混乱的；无序的',
  'chapel': '小教堂',
  'chapter': '章节；一课',
  'character': '人物；性格',
  'characteristic': '特点；特性',
  'characterize': '以…为特征；描述',
  'charge': '费用；指控',
  'charity': '慈善；慈善机构',
  'charitable': '慈善的；仁慈的',
  'charm': '魅力；迷人的',
  'charming': '迷人的；可爱的',
  'chart': '图表；海图',
  'charter': '特许状；宪章',
  'chase': '追逐；追赶',
  'chat': '聊天；闲谈',
  'cheap': '便宜的；廉价的',
  'cheat': '欺骗；作弊',
  'check': '检查；支票',
  'cheque': '支票',
  'cheek': '脸颊；面颊',
  'cheer': '欢呼；高兴',
  'cheerful': '愉快的；高兴的',
  'cheese': '奶酪；干酪',
  'chef': '厨师',
  'chemical': '化学的；化学物质',
  'chemist': '化学家',
  'chemistry': '化学',
  'cherish': '珍爱；爱护',
  'childish': '孩子气的；幼稚的',
  'chess': '国际象棋',
  'chest': '胸；胸腔',
  'chew': '咀嚼；咬',
  'chicken': '鸡；小鸡',
  'chief': '首领；主要的',
  'child': '孩子；儿童',
  'chill': '寒冷；使冷',
  'chilly': '寒冷的；使人感到冷的',
  'chimney': '烟囱',
  'chin': '下巴',
  'china': '中国；瓷器',
  'chip': '碎片；芯片',
  'chocolate': '巧克力',
  'choice': '选择；精选',
  'choir': '合唱团',
  'choke': '窒息；堵塞',
  'cholesterol': '胆固醇',
  'choose': '选择；挑选',
  'chop': '砍；剁',
  'chopstick': '筷子',
  'chord': '和弦；和声',
  'chore': '家务；杂事',
  'chorus': '合唱；合唱团',
  'christ': '基督',
  'christmas': '圣诞节',
  'christian': '基督教的；基督徒的',
  'christianity': '基督教',
  'chronically': '长期地；慢性地',
  'chronicle': '编年史；记录',
  'chunk': '块；大块',
  'bitter': '苦涩；痛苦的',
  'bizarre': '奇异的；古怪的',
  'black': '黑色；黑暗的',
  'blackboard': '黑板；公告板',
  'blackmail': '勒索；敲诈',
  'blade': '刀片；叶片',
  'blame': '责备；归咎',
  'blank': '空白；无表情的',
  'blanket': '毯子；覆盖物',
  'blast': '爆炸；一阵',
  'blaze': '火焰；烈火',
  'bleach': '漂白；褪色',
  'bleak': '荒凉的；无希望的',
  'bleed': '出血；渗出',
  'blend': '混合；融合',
  'bless': '祝福；保佑',
  'blessing': '祝福；恩赐',
  'blind': '盲目的；瞎的',
  'blink': '眨眼；闪烁',
  'bloc': '集团；联盟',
  'block': '阻塞；街区',
  'blog': '博客；网络日志',
  'blond': '金发；淡黄色的',
  'blonde': '金发女子；淡黄色',
  'blood': '血液；血腥的',
  'bloody': '血腥的；残忍的',
  'bloom': '开花；繁荣',
  'blossom': '开花；兴旺',
  'blouse': '女衫；罩衫',
  'blow': '吹；打击',
  'blue': '蓝色；忧郁的',
  'blueprint': '蓝图；计划',
  'bluff': '骗局；虚张声势',
  'blunder': '错误；失误',
  'blunt': '钝的；直率的',
  'blur': '模糊；混淆',
  'blush': '脸红；羞愧',
  'board': '木板；董事会',
  'boast': '自夸；拥有',
  'boastful': '自夸的；自负的',
  'boat': '船；小舟',
  'body': '身体；主体',
  'bodily': '身体的；全身的',
  'boil': '煮沸；沸腾',
  'boiler': '锅炉；蒸锅',
  'bold': '大胆的；醒目的',
  'bolt': '螺栓；门闩',
  'bomb': '炸弹；轰炸',
  'bond': '债券；纽带',
  'bondage': '奴役；束缚',
  'bone': '骨头；骨感的',
  'bony': '骨感的；瘦的',
  'bonus': '奖金；红利',
  'book': '书；预订',
  'boom': '繁荣；爆炸声',
  'boost': '提升；推动',
  'boot': '靴子；启动',
  'booth': '小屋；摊位',
  'border': '边界；边疆',
  'bore': '钻孔；无聊的',
  'boring': '无聊的；令人厌烦的',
  'born': '出生；天生的',
  'borrow': '借；借用',
  'boss': '老板；上司',
  'botany': '植物学',
  'botanical': '植物的；植物学的',
  'both': '两者；双方',
  'bother': '打扰；麻烦',
  'bottle': '瓶子；装瓶',
  'bottom': '底部；基础',
  'bounce': '弹跳；反弹',
  'bound': '界限；束缚',
  'boundary': '边界；界限',
  'bouquet': '花束；一束',
  'bout': '一阵；回合',
  'bow': '鞠躬；弓',
  'bowel': '肠；内部',
  'bowl': '碗；容器',
  'box': '盒子；拳击',
  'boxing': '拳击；装箱',
  'boy': '男孩；少年',
  'boycott': '抵制；联合抵制',
  'brace': '支架；鼓起勇气',
  'bracket': '括号；支架',
  'brag': '吹牛；自夸',
  'brain': '大脑；智力',
  'brake': '刹车；制动',
  'branch': '分支；树枝',
  'brand': '品牌；烙印',
  'brand-new': '全新的；崭新的',
  'brandy': '白兰地；白兰地酒',
  'brass': '黄铜；铜管乐器',
  'brave': '勇敢的；无畏的',
  'bravery': '勇敢；勇敢的行为',
  'bread': '面包；生计',
  'break': '打破；休息',
  'breakdown': '崩溃；故障',
  'breakfast': '早餐；打破夜晚',
  'breakthrough': '突破；进展',
  'breast': '胸部；乳房',
  'cabin': '小屋；船舱',
  'cabinet': '橱柜；内阁',
  'cable': '电缆；电报',
  'cafe': '咖啡馆',
  'cafeteria': '自助餐厅',
  'cage': '笼子；牢房',
  'cake': '蛋糕',
  'calcium': '钙',
  'calculate': '计算',
  'calculation': '计算；计算结果',
  'calculator': '计算器',
  'calculating': '计算中',
  'calendar': '日历',
  'calf': '小牛；小腿',
  'call': '打电话；称呼',
  'calling': '职业；召唤',
  'calm': '平静的',
  'calorie': '卡路里',
  'camel': '骆驼',
  'camera': '照相机',
  'camp': '营地；野营',
  'campaign': '运动；战役',
  'campus': '校园',
  'can': '罐头；能',
  'canal': '运河',
  'cancel': '取消',
  'cancellation': '取消；撤销',
  'cancer': '癌症',
  'candidate': '候选人',
  'candidacy': '候选人资格',
  'candle': '蜡烛',
  'candy': '糖果',
  'cane': '手杖；竹竿',
  'cannon': '大炮',
  'canoe': '独木舟',
  'canteen': '食堂',
  'canvas': '帆布',
  'cap': '帽子',
  'capable': '有能力的',
  'capability': '能力',
  'cape': '披风',
  'capital': '首都；资本',
  'capitalism': '资本主义',
  'capsule': '胶囊；太空舱',
  'captain': '船长；队长',
  'caption': '标题；字幕',
  'captive': '俘虏',
  'capture': '捕获',
  'car': '汽车',
  'caravan': '车队',
  'carbohydrate': '碳水化合物',
  'carbon': '碳',
  'card': '卡片；纸牌',
  'cardboard': '纸板',
  'cardinal': '红衣主教；基数词',
  'care': '关心；照料',
  'careless': '粗心的',
  'career': '职业',
  'cargo': '货物',
  'carpenter': '木匠',
  'carpet': '地毯',
  'carriage': '马车；运费',
  'carrier': '运输工具；载体',
  'carrot': '胡萝卜',
  'carry': '携带；运送',
  'cart': '手推车',
  'carton': '纸箱',
  'cartoon': '卡通；漫画',
  'cartoonist': '漫画家',
  'carve': '雕刻',
  'carving': '雕刻',
  'case': '情况；箱子',
  'catastrophic': '灾难性的',
  'cash': '现金',
  'cashier': '收银员',
  'casino': '赌场',
  'cast': '投掷；演员阵容',
  'castle': '城堡',
  'casual': '随便的；偶然的',
  'casualty': '伤亡人员',
  'cat': '猫',
  'catalog': '目录',
  'catalogue': '目录',
  'catastrophe': '灾难',
  'catch': '抓住；捕捉',
  'cautious': '谨慎的',
  'category': '类别',
  'cathedral': '大教堂',
  'catholic': '天主教的',
  'cattle': '牛',
  'cauliflower': '菜花',
  'cause': '原因；事业',
  'caution': '警告；小心',
  'cave': '洞穴',
  'celebration': '庆祝',
  'cavity': '洞；腔',
  'ceiling': '天花板',
  'celebrate': '庆祝',
  'celebrity': '名人',
  'cell': '细胞；牢房',
  'breath': '呼吸；气息',
  'breathe': '呼吸',
  'breed': '品种；繁殖',
  'breeze': '微风',
  'brew': '酿造；冲泡',
  'brewery': '啤酒厂',
  'bribe': '贿赂',
  'bribery': '贿赂；贿赂行为',
  'brick': '砖块',
  'bride': '新娘',
  'bridegroom': '新郎',
  'bridge': '桥梁',
  'brief': '简短；摘要',
  'briefcase': '公文包',
  'brigade': '旅；支队',
  'bright': '明亮；聪明的',
  'brilliant': '灿烂；杰出的',
  'briefing': '简报；会议',
  'brighten': '使明亮；使高兴',
  'brilliance': '光辉；才华',
  'bring': '带来；引起',
  'broaden': '拓宽；扩大',
  'brink': '边缘；边缘地带',
  'brisk': '轻快的；活泼的',
  'broad': '宽阔的；广泛的',
  'broadcast': '广播；传播',
  'brochure': '小册子',
  'broke': '破产；破产的',
  'broker': '经纪人',
  'bronze': '青铜',
  'brood': '沉思；一窝（鸟）',
  'broom': '扫帚',
  'brother': '兄弟',
  'brow': '眉毛',
  'brown': '棕色',
  'browse': '浏览；吃草',
  'bruise': '擦伤；瘀伤',
  'brunch': '早午餐',
  'brush': '刷；画笔',
  'brutal': '残忍的；野蛮的',
  'bubble': '水泡；冒泡',
  'buck': '美元；雄鹿',
  'bucket': '桶',
  'buckle': '扣环；扣紧',
  'bud': '芽；蓓蕾',
  'buddy': '伙伴；朋友',
  'browser': '浏览器',
  'brutality': '残忍；残暴',
  'buddhism': '佛教',
  'buddhist': '佛教徒',
  'budget': '预算',
  'budgetary': '预算的',
  'buffalo': '水牛',
  'buffer': '缓冲；缓冲器',
  'buffet': '自助餐',
  'bug': '虫子；故障',
  'build': '建造；建立',
  'bulb': '灯泡；球茎',
  'bull': '公牛；牛市',
  'building': '建筑；大楼',
  'bulky': '庞大的；笨重的',
  'bullet': '子弹',
  'bulletin': '公报；公告板',
  'bully': '欺凌；恃强凌弱者',
  'bump': '碰撞；肿块',
  'bumper': '保险杠',
  'bunch': '束；一伙',
  'bundle': '捆；包',
  'burden': '负担；重担',
  'bureau': '局；办公室',
  'bureaucrat': '官僚；公务员',
  'bureaucratic': '官僚的；官僚主义的',
  'bureaucracy': '官僚主义；官僚机构',
  'burglar': '盗贼',
  'burglary': '盗窃；盗窃罪',
  'burn': '燃烧；烧伤',
  'burial': '埋葬；葬礼',
  'burst': '爆发；爆裂',
  'bury': '埋葬；隐藏',
  'bus': '公共汽车',
  'bush': '灌木丛',
  'business': '商业；事务',
  'businessman': '商人',
  'bushy': '浓密的；茂盛的',
  'bust': '半身像；破产',
  'busy': '忙碌的',
  'but': '但是；除了',
  'butcher': '屠夫；屠宰',
  'butt': '屁股；烟蒂',
  'butter': '黄油',
  'butterfly': '蝴蝶',
  'button': '按钮；纽扣',
  'buy': '购买',
  'buyer': '买主',
  'buzz': '嗡嗡声；嘈杂声',
  'by': '在…旁边；经过',
  'bystander': '旁观者',
  'church': '教堂；宗教场所',
  'cigar': '雪茄；香烟',
  'cigarette': '香烟；纸烟',
  'cinema': '电影院；电影',
  'circle': '圆圈；圈子',
  'circuit': '电路；环行',
  'circulation': '流通；发行量',
  'circumstance': '情况；环境',
  'circus': '马戏团；杂技',
  'cite': '引用；提及',
  'citation': '引用；引证',
  'citizen': '公民；市民',
  'citizenship': '公民权；国籍',
  'city': '城市；都市',
  'civil': '公民的；民用的',
  'civilize': '文明化；教化',
  'civilization': '文明；文化',
  'civilian': '平民；百姓',
  'claim': '声称；要求',
  'clamp': '夹具；夹紧',
  'clan': '宗族；家族',
  'clap': '鼓掌；拍手',
  'clarity': '清晰；明确',
  'clarification': '阐明；澄清',
  'clash': '冲突；碰撞',
  'clasp': '扣子；紧握',
  'class': '班级；种类',
  'classic': '经典；杰作',
  'classical': '古典的；经典的',
  'classify': '分类；归类',
  'classification': '分类；分级',
  'classified': '分类的；机密的',
  'classmate': '同学；同班同学',
  'classroom': '教室；课堂',
  'clause': '条款；从句',
  'claw': '爪子；抓',
  'clay': '粘土；泥土',
  'clean': '清洁；干净',
  'cleanse': '清洁；净化',
  'clear': '清楚；清除',
  'clearly': '清楚地；明显地',
  'clearance': '清除；空地',
  'clear-cut': '明确的；轮廓分明的',
  'clearing': '空地；清除',
  'clerical': '牧师的；书写的',
  'clench': '紧握；咬紧',
  'clergy': '神职人员；牧师',
  'clerk': '职员；书记员',
  'clever': '聪明的；机灵的',
  'click': '点击；咔哒声',
  'client': '客户；委托人',
  'cliff': '悬崖；峭壁',
  'climate': '气候；风气',
  'climatic': '气候的；风土的',
  'climax': '高潮；顶点',
  'climb': '攀登；爬升',
  'cling': '粘附；坚持',
  'clinic': '诊所；门诊部',
  'clinical': '临床的；诊所的',
  'clip': '剪；夹子',
  'cloak': '斗篷；掩盖',
  'clock': '时钟；钟表',
  'clockwise': '顺时针的',
  'clog': '堵塞；木屐',
  'clone': '克隆；复制',
  'close': '关闭；靠近',
  'closet': '壁橱；密室',
  'cloth': '布；织物',
  'clothe': '穿衣；覆盖',
  'clothes': '衣服；服装',
  'clothing': '衣服；衣着',
  'cloud': '云；多云',
  'cloudy': '多云的；阴沉的',
  'clown': '小丑；滑稽的人',
  'club': '俱乐部；社团',
  'clue': '线索；暗示',
  'clumsy': '笨拙的；不灵活的',
  'cluster': '簇；群集',
  'clutch': '抓紧；离合器',
  'coach': '教练；长途汽车',
  'coal': '煤；煤炭',
  'coalition': '联盟；联合',
  'coarse': '粗糙的；粗野的',
  'coast': '海岸；沿海',
  'coastal': '沿海的；海岸的',
  'coat': '外套；披风',
  'cocaine': '可卡因；毒品',
  'cock': '公鸡；龙头',
  'cockpit': '驾驶舱；机舱',
  'cocktail': '鸡尾酒；混合饮料',
  'coconut': '椰子；椰果',
  'code': '代码；法典',
  'coexist': '共存；并存',
  'coexistence': '共存；共处',
  'coffee': '咖啡；咖啡豆',
  'cognitive': '认知的；认识的',
  'cognition': '认知；认识',
  'coherence': '连贯性；一致性',
  'cohesion': '凝聚力；粘合',
  'coil': '线圈；卷曲',
  'core': '核心；中心',
  'cork': '软木塞；软木',
  'corn': '玉米；谷物',
  'corner': '角落；拐角',
  'cornerstone': '基石；基础',
  'corporal': '士官；肉体',
  'corporation': '公司；法人',
  'corporate': '公司的；企业',
  'corps': '军团；团体',
  'corpse': '尸体；遗体',
  'correct': '正确；改正',
  'correction': '纠正；改正',
  'corrective': '纠正的；矫正的',
  'correlation': '相关；关联',
  'correlative': '相关的；关联的',
  'correspondence': '通信；信件',
  'correspondent': '记者；通信者',
  'corresponding': '相应的；对应的',
  'corridor': '走廊；通道',
  'corrode': '腐蚀；侵蚀',
  'corrosion': '腐蚀；侵蚀',
  'corruption': '腐败；堕落',
  'cosmetic': '化妆品；美容的',
  'cosmopolitan': '世界性的；国际的',
  'cosmos': '宇宙；秩序',
  'cosmic': '宇宙的；广阔的',
  'cost': '成本；费用',
  'costly': '昂贵的；代价高的',
  'costume': '服装；戏装',
  'cottage': '小屋；农舍',
  'cotton': '棉花；棉布',
  'couch': '沙发；长椅',
  'cough': '咳嗽；咳',
  'could': '能；可以',
  'council': '委员会；议会',
  'councillor': '议员；参事',
  'councilor': '议员；参事',
  'counsel': '建议；咨询',
  'counsellor': '顾问；律师',
  'counselor': '顾问；律师',
  'count': '计算；计数',
  'countdown': '倒计时',
  'counter': '柜台；计数器',
  'counteract': '对抗；抵消',
  'counteraction': '对抗；反作用',
  'counterfeit': '伪造；赝品',
  'counterpart': '对应物；副本',
  'country': '国家；乡村',
  'countryside': '乡村；郊外',
  'county': '县；郡',
  'couple': '一对；夫妻',
  'coupon': '优惠券；赠券',
  'courage': '勇气；胆量',
  'courageous': '勇敢的；无畏的',
  'course': '课程；过程',
  'court': '法院；球场',
  'courtesy': '礼貌；谦恭',
  'courtyard': '庭院；天井',
  'cousin': '堂（表）兄弟；堂（表）姐妹',
  'cover': '覆盖；封面',
  'coverage': '覆盖；报道',
  'cow': '牛；母牛',
  'coward': '懦夫；胆小鬼',
  'cowardly': '胆小的；懦弱的',
  'cowardice': '懦弱；胆怯',
  'cowboy': '牛仔；牧牛人',
  'cozy': '舒适的；亲密的',
  'crab': '蟹；蟹肉',
  'crack': '裂缝；破裂',
  'crackdown': '镇压；打击',
  'cracker': '饼干；爆竹',
  'craft': '工艺；手艺',
  'cram': '填塞；猛塞',
  'crane': '起重机；鹤',
  'crash': '碰撞；坠落',
  'crate': '板条箱；笼子',
  'crave': '渴望；贪食',
  'crawl': '爬行；缓慢移动',
  'crazy': '疯狂的；古怪的',
  'cream': '奶油；精华',
  'creamy': '奶油状的；丰富的',
  'create': '创造；产生',
  'creation': '创造；作品',
  'creative': '有创造力的；创新的',
  'creator': '创造者；创作者',
  'creature': '生物；造物',
  'credential': '凭证；证书',
  'credibility': '可信性；可靠性',
  'credit': '信用；信誉',
  'creditable': '值得赞扬的；可信的',
  'creep': '爬行；蔓延',
  'crew': '全体船员；全体乘务员',
  'cricket': '蟋蟀；板球',
  'crime': '犯罪；罪行',
  'criminal': '罪犯；犯罪者',
  'cripple': '跛子；削弱',
  'crisis': '危机；决定性时刻',
  'crisp': '脆的；清新的',
  'consideration': '考虑；体谅',
  'considering': '考虑到；鉴于',
  'considerable': '相当大的；值得考虑的',
  'considerate': '体贴的；考虑周到的',
  'consist': '由...组成；一致',
  'consistent': '一致的；连续的',
  'consistency': '一致性；连贯性',
  'console': '安慰；控制台',
  'consolation': '安慰；慰藉',
  'consolidation': '巩固；合并',
  'conspire': '阴谋；共谋',
  'conspiracy': '阴谋；密谋',
  'constant': '持续的；不变的',
  'constituent': '组成成分；选民',
  'constituency': '选民；选区',
  'constitution': '宪法；体质',
  'constitutional': '宪法的；体质的',
  'constraint': '约束；限制',
  'construct': '建造；构造',
  'construction': '建筑；构造',
  'consulate': '领事馆',
  'consul': '领事',
  'consult': '咨询；查阅',
  'consultation': '咨询；协商',
  'consultative': '咨询的；顾问的',
  'consultant': '顾问',
  'consume': '消费；消耗',
  'consumer': '消费者',
  'consumption': '消费；消耗',
  'contact': '接触；联系',
  'contagious': '传染性的；有感染力的',
  'contain': '包含；控制',
  'container': '容器；集装箱',
  'containment': '控制；限制',
  'contamination': '污染；沾染',
  'contemplation': '沉思；注视',
  'contemplative': '沉思的；冥想的',
  'contempt': '轻视；蔑视',
  'contemptible': '可鄙的；可轻视的',
  'contention': '争论；竞争',
  'contentious': '争论的；有争议的',
  'content': '内容；满足',
  'contented': '满意的；快乐的',
  'contest': '竞赛；争论',
  'contestant': '参赛者；争论者',
  'contextual': '上下文的；情境的',
  'continent': '大陆；洲',
  'continental': '大陆的；洲际的',
  'contingent': '偶然的；随机的',
  'continue': '继续；延续',
  'continuation': '继续；延续',
  'continual': '持续的；不断的',
  'continuous': '连续的；持续的',
  'continuity': '连续性；连贯性',
  'contract': '合同；收缩',
  'contractor': '承包商；订约人',
  'contraction': '收缩；紧缩',
  'contradiction': '矛盾；反驳',
  'contradictory': '矛盾的；反对的',
  'contrast': '对比；对照',
  'contribute': '贡献；捐助',
  'contribution': '贡献；捐助',
  'contributor': '贡献者；捐助者',
  'contrive': '发明；策划',
  'control': '控制；管理',
  'controversial': '有争议的；引起争论的',
  'convene': '召集；集合',
  'convenient': '方便的；便利的',
  'convenience': '方便；便利',
  'convention': '会议；习俗',
  'convergence': '会聚；收敛',
  'converse': '交谈；谈话',
  'conversation': '谈话；会话',
  'convert': '转换；改变',
  'conversion': '转换；改变',
  'convertible': '可转换的；可改变的',
  'conveyance': '运输；传达',
  'convict': '宣判有罪；囚犯',
  'convince': '说服；信服',
  'convincing': '令人信服的；有说服力的',
  'convoy': '护航；护送',
  'cook': '烹饪；厨师',
  'cooker': '炊具；炉子',
  'cookie': '饼干',
  'cool': '凉爽；冷静',
  'cooperate': '合作；协作',
  'cooperation': '合作；协作',
  'cooperative': '合作的；协作的',
  'coordinate': '协调；调整',
  'coordination': '协调；配合',
  'coordinator': '协调员',
  'cop': '警察；美元',
  'cope': '应对；处理',
  'copper': '铜；铜币',
  'copy': '复制；副本',
  'copyright': '版权',
  'coral': '珊瑚',
  'cord': '绳索；神经',
  'cordial': '热诚的；友好的',
  'cordiality': '热诚；友好',
  'cohesive': '有凝聚力的；粘合的',
  'coin': '硬币；创造',
  'coinage': '铸币；新词',
  'coincidence': '巧合；一致',
  'cold': '寒冷；冷漠',
  'collaboration': '合作；协作',
  'collaborative': '合作的；协作的',
  'collapse': '倒塌；崩溃',
  'collar': '衣领；圈套',
  'colleague': '同事；同僚',
  'collect': '收集；聚集',
  'collection': '收藏；收集品',
  'collective': '集体的；集体的',
  'college': '学院；大学',
  'collide': '碰撞；冲突',
  'collision': '碰撞；冲突',
  'colon': '冒号',
  'semicolon': '分号',
  'colonel': '上校',
  'colonial': '殖民地的；殖民主义的',
  'colonialism': '殖民主义',
  'colonize': '殖民；开拓',
  'colony': '殖民地；聚居地',
  'color': '颜色；色彩',
  'colour': '颜色；色彩',
  'colorful': '多彩的；有趣的',
  'colourful': '多彩的；有趣的',
  'column': '柱；专栏',
  'columnist': '专栏作家',
  'comb': '梳子；梳理',
  'combat': '战斗；斗争',
  'combative': '好战的；斗争的',
  'combination': '结合；组合',
  'combine': '结合；联合',
  'come': '来；到达',
  'comedy': '喜剧；幽默',
  'comet': '彗星',
  'comfort': '舒适；安慰',
  'comfortable': '舒适的；舒服的',
  'comic': '喜剧的；滑稽的',
  'comma': '逗号',
  'command': '命令；指挥',
  'commander': '指挥官；司令官',
  'commemorate': '纪念；庆祝',
  'commemoration': '纪念；庆祝',
  'commencement': '开始；毕业典礼',
  'commend': '称赞；推荐',
  'commendation': '称赞；推荐',
  'comment': '评论；注释',
  'commentary': '评论；解说',
  'commentator': '评论员；解说员',
  'commerce': '商业；贸易',
  'commercial': '商业的；贸易的',
  'commercialize': '商业化；使商业化',
  'commission': '委员会；佣金',
  'commit': '承诺；犯（罪）',
  'commitment': '承诺；献身',
  'committee': '委员会',
  'common': '普通的；共同的',
  'commonplace': '平凡的；陈腐的',
  'commonwealth': '联邦；联合体',
  'communicate': '交流；传达',
  'communication': '交流；通讯',
  'communicative': '健谈的；善于交流的',
  'commune': '公社；社区',
  'communist': '共产主义的；共产主义者',
  'communism': '共产主义',
  'community': '社区；团体',
  'commute': '通勤；交换',
  'commuter': '通勤者',
  'compact': '紧凑的；简洁的',
  'companion': '伴侣；同伴',
  'companionship': '伴侣关系；友谊',
  'company': '公司；陪伴',
  'compare': '比较；相比',
  'comparison': '比较；对比',
  'comparative': '比较的；相对的',
  'comparable': '可比较的；比得上的',
  'compartment': '隔间；车厢',
  'compass': '指南针；范围',
  'compassion': '同情；怜悯',
  'compassionate': '有同情心的；慈悲的',
  'compatibility': '兼容性；相容性',
  'compelling': '吸引人的；强迫的',
  'compensation': '补偿；赔偿',
  'compensatory': '补偿的；赔偿的',
  'compete': '竞争；比赛',
  'competition': '竞争；比赛',
  'competitive': '竞争的；有竞争力的',
  'competitor': '竞争者；对手',
  'competent': '有能力的；胜任的',
  'competence': '能力；胜任',
  'compilation': '汇编；编纂',
  'complacent': '自满的；满足的',
  'complacency': '自满；满足',
  'complain': '抱怨；投诉',
  'complaint': '抱怨；投诉',
  'complementary': '补充的；互补的',
  'complete': '完整的；完成',
  'completion': '完成；结束',
  'complex': '复杂的；复合的',
  'complexion': '面色；肤色',
  'complicate': '使复杂；使恶化',
  'complicated': '复杂的；错综的',
  'complication': '并发症；复杂化',
  'compliment': '赞美；恭维',
  'complimentary': '赞美的；免费的',
  'compliance': '遵从；服从',
  'component': '组成部分；元件',
  'compose': '组成；创作',
  'composition': '作文；成分',
  'composer': '作曲家；创作者',
  'composite': '复合的；混合的',
  'compound': '化合物；复合物',
  'comprehend': '理解；包含',
  'comprehension': '理解力；理解',
  'compress': '压缩；压紧',
  'compression': '压缩；压紧',
  'compromise': '妥协；折衷',
  'compulsory': '强制的；义务的',
  'compute': '计算；估计',
  'computer': '计算机；电脑',
  'computerize': '使计算机化',
  'computation': '计算；估计',
  'comrade': '同志；伙伴',
  'concealment': '隐藏；隐瞒',
  'concession': '让步；特许权',
  'conceit': '自负；狂妄',
  'conceited': '自负的；狂妄的',
  'conception': '概念；观念',
  'concentrate': '集中；浓缩',
  'concentration': '集中；浓度',
  'concept': '概念；观念',
  'conceptual': '概念的；观念的',
  'concern': '关心；关系',
  'concerned': '关心的；相关的',
  'concerning': '关于；涉及',
  'concert': '音乐会；协奏曲',
  'concerted': '协定的；一致的',
  'conclude': '结束；得出结论',
  'conclusion': '结论；结尾',
  'conclusive': '结论性的；决定性的',
  'concrete': '具体的；混凝土的',
  'concurrent': '同时的；并行的',
  'condemnation': '谴责；定罪',
  'condense': '浓缩；凝结',
  'condensation': '浓缩；凝结',
  'condition': '条件；状况',
  'conditional': '条件的；有条件的',
  'conditioner': '调节器；护发素',
  'condolence': '慰问；哀悼',
  'conducive': '有益的；促进的',
  'conduct': '行为；引导',
  'conductor': '导体；指挥',
  'confederation': '同盟；联盟',
  'confederate': '同盟者；联盟者',
  'conference': '会议；协商',
  'confess': '承认；忏悔',
  'confession': '承认；忏悔',
  'confide': '信赖；倾诉',
  'confidence': '信心；信任',
  'confident': '自信的；有信心的',
  'confidential': '机密的；秘密的',
  'configuration': '配置；结构',
  'confinement': '监禁；限制',
  'confirm': '证实；确认',
  'confirmation': '证实；确认',
  'conflict': '冲突；斗争',
  'conformity': '一致；遵守',
  'confront': '面对；对抗',
  'confrontation': '对抗；冲突',
  'confucian': '儒家的；孔子的',
  'confucianism': '儒家思想；孔子学说',
  'confuse': '混淆；使困惑',
  'confusion': '混乱；困惑',
  'congratulate': '祝贺；恭喜',
  'congratulation': '祝贺；恭喜',
  'congratulatory': '祝贺的；庆贺的',
  'congregate': '聚集；集合',
  'congregation': '集合；会众',
  'congress': '国会；大会',
  'congressional': '国会的；大会的',
  'conjunction': '结合；连接',
  'connect': '连接；联系',
  'connotation': '内涵；隐含意义',
  'conquer': '征服；克服',
  'conqueror': '征服者；胜利者',
  'conquest': '征服；胜利',
  'conscience': '良心；道德心',
  'conscientious': '认真的；尽责的',
  'conscious': '有意识的；清醒的',
  'consciousness': '意识；知觉',
  'consecutive': '连续的；连贯的',
  'consent': '同意；赞成',
  'consequence': '结果；后果',
  'consequent': '结果的；随之发生的',
  'consequently': '因此；结果',
  'conservative': '保守的；守旧的',
  'conservation': '保护；保存',
  'consider': '考虑；认为',
  'criticize': '批评；指责',
  'criticise': '批评；指责',
  'criticism': '批评；评论',
  'critic': '评论家；批评者',
  'crocodile': '鳄鱼',
  'crop': '作物；收割',
  'cross': '交叉；十字',
  'crossing': '交叉处；横穿',
  'crouch': '蹲下；蜷缩',
  'crow': '乌鸦；啼叫',
  'crowd': '人群；拥挤',
  'crowded': '拥挤的',
  'crown': '王冠；加冕',
  'crude': '粗鲁的；天然的',
  'cruel': '残忍的；残酷的',
  'cruelty': '残忍；残酷行为',
  'cruise': '巡航；游荡',
  'cruiser': '巡洋舰',
  'crumble': '破碎；崩溃',
  'crunch': '嘎吱声；咬碎',
  'crush': '压碎；拥挤',
  'crust': '外壳；面包皮',
  'cry': '哭泣；喊叫',
  'crystal': '水晶；透明的',
  'cub': '幼崽；小熊',
  'cube': '立方体；立方',
  'cubic': '立方的',
  'cucumber': '黄瓜',
  'cue': '暗示；提示',
  'cuisine': '烹饪；菜肴',
  'culminate': '达到顶点；高潮',
  'culmination': '顶点；高潮',
  'cult': '崇拜；教派',
  'cultivation': '耕作；培养',
  'culture': '文化；教养',
  'cultural': '文化的；教养的',
  'cunning': '狡猾的；巧妙的',
  'cup': '杯子；奖杯',
  'cupboard': '橱柜；壁橱',
  'cure': '治愈；疗法',
  'curable': '可治愈的',
  'curfew': '宵禁',
  'curious': '好奇的；奇怪的',
  'curl': '卷曲；卷发',
  'curiosity': '好奇心；古玩',
  'currency': '货币；流通',
  'current': '电流；潮流',
  'currently': '目前；当前',
  'curriculum': '课程；教学计划',
  'curse': '诅咒；咒骂',
  'curtail': '缩短；削减',
  'curtain': '窗帘；幕布',
  'curve': '曲线；弯曲',
  'cushion': '垫子；缓和',
  'custody': '监护；拘留',
  'custom': '习俗；定制',
  'customary': '习惯的；惯例的',
  'customer': '顾客；客户',
  'customs': '海关；习俗',
  'cut': '切；削减',
  'cute': '可爱的；俏皮的',
  'cyberspace': '网络空间',
  'cycle': '循环；自行车',
  'cycling': '骑自行车；循环',
  'cyclist': '骑自行车者',
  'cylinder': '圆柱；汽缸',
  'cynical': '愤世嫉俗的；怀疑的',
  'dad': '爸爸',
  'daddy': '爸爸',
  'cynicism': '愤世嫉俗；怀疑主义',
  'daily': '每天的；日报',
  'dairy': '乳品店；乳制品',
  'dam': '水坝；障碍',
  'damage': '损害；伤害',
  'damn': '该死的；非常',
  'damp': '潮湿的；潮湿',
  'dance': '跳舞；舞蹈',
  'danger': '危险；威胁',
  'dangerous': '危险的',
  'dare': '敢；挑战',
  'daring': '大胆的；勇敢的',
  'dark': '黑暗的；深色的',
  'darkness': '黑暗；阴暗',
  'darken': '变暗；使变暗',
  'darling': '亲爱的；宝贝',
  'dart': '飞镖；投射',
  'dash': '冲刺；破折号',
  'data': '数据；资料',
  'datum': '数据；事实',
  'database': '数据库',
  'date': '日期；约会',
  'dating': '约会；鉴定',
  'daughter': '女儿',
  'dawn': '黎明；开端',
  'day': '白天；一天',
  'daylight': '日光；白天',
  'dazzle': '耀眼；使眼花缭乱',
  'dead': '死的；无力的',
  'deadline': '截止日期；最后期限',
  'deadlock': '僵局；死胡同',
  'deny': '否认；拒绝',
  'denial': '否认；拒绝',
  'depart': '离开；出发',
  'departure': '离开；出发',
  'department': '部门；系',
  'depend': '依赖；取决于',
  'dependent': '依赖者；从属的',
  'dependence': '依赖；依靠',
  'dependable': '可靠的；可信赖的',
  'depiction': '描绘；描述',
  'deplete': '耗尽；用尽',
  'depletion': '耗尽；枯竭',
  'deplore': '哀悼；谴责',
  'deploy': '部署；配置',
  'deployment': '部署；配置',
  'deport': '驱逐；流放',
  'deportation': '驱逐；流放',
  'deposit': '存款；存放',
  'depot': '仓库；车站',
  'depreciate': '贬值；折旧',
  'depreciation': '贬值；折旧',
  'depress': '使沮丧；使萧条',
  'depression': '抑郁；萧条',
  'deprivation': '剥夺；丧失',
  'deputy': '副职；代理人',
  'derail': '出轨；使脱轨',
  'derailment': '出轨；脱轨',
  'deregulate': '解除管制；放宽管制',
  'deregulation': '解除管制；放宽管制',
  'derivative': '衍生物；派生的',
  'derivation': '起源；由来',
  'descent': '下降；血统',
  'descendant': '后代；子孙',
  'describe': '描述；描绘',
  'description': '描述；说明',
  'descriptive': '描述的；叙述的',
  'desert': '沙漠；抛弃',
  'desertion': '抛弃；遗弃',
  'deserve': '应得；值得',
  'design': '设计；图案',
  'designer': '设计师；设计者',
  'designation': '命名；称号',
  'desire': '愿望；渴望',
  'desk': '桌子；办公桌',
  'desirable': '合意的；值得拥有的',
  'desirability': '值得；吸引力',
  'desirous': '渴望的；想要的',
  'desktop': '桌面；桌面电脑',
  'desolate': '荒凉的；绝望的',
  'despair': '绝望；失望',
  'desperate': '绝望的；危急的',
  'despatch': '派遣；发送',
  'despise': '轻视；蔑视',
  'despite': '尽管；不顾',
  'dessert': '甜点',
  'destination': '目的地；终点',
  'destiny': '命运；天命',
  'destined': '注定；预定',
  'destroy': '摧毁；破坏',
  'destruction': '破坏；毁灭',
  'destructive': '破坏性的；有害的',
  'detach': '分开；分离',
  'detached': '分离的；超然的',
  'detachment': '分离；超然',
  'detail': '细节；详情',
  'detailed': '详细的；详尽的',
  'detain': '拘留；留住',
  'detention': '拘留；扣留',
  'detect': '探测；发现',
  'detection': '探测；侦查',
  'detective': '侦探；侦探小说',
  'deter': '威慑；阻止',
  'deterrent': '威慑物；阻止物',
  'detergent': '洗涤剂；清洁剂',
  'deterioration': '恶化；变坏',
  'determine': '决定；确定',
  'determination': '决心；决定',
  'determined': '坚决的；确定的',
  'detriment': '损害；伤害',
  'detrimental': '有害的；损害的',
  'devastate': '破坏；蹂躏',
  'devastating': '破坏性的；毁灭性的',
  'devastation': '破坏；毁灭',
  'develop': '发展；开发',
  'development': '发展；进展',
  'developmental': '发展的；发育的',
  'developer': '开发者；开发者',
  'deviation': '偏差；偏离',
  'device': '装置；设备',
  'devil': '魔鬼；恶魔',
  'devote': '奉献；致力于',
  'devotion': '奉献；忠诚',
  'devour': '吞食；狼吞虎咽',
  'dew': '露水；露',
  'diabetes': '糖尿病',
  'diagnosis': '诊断；判断',
  'diagram': '图表；图解',
  'dial': '拨号；钟面',
  'dialect': '方言；土语',
  'dialog': '对话；对谈',
  'deadly': '致命的；致死的',
  'deaf': '聋的',
  'deal': '交易；处理',
  'dean': '院长；系主任',
  'dear': '亲爱的；宝贵的',
  'death': '死亡',
  'debate': '辩论',
  'debris': '碎片；残骸',
  'debt': '债务',
  'debut': '初次登场；首演',
  'debtor': '债务人',
  'decade': '十年',
  'decay': '腐烂；衰减',
  'deceit': '欺骗',
  'deception': '欺骗；诡计',
  'deceptive': '欺骗性的',
  'december': '十二月',
  'decent': '体面的；得体的',
  'decide': '决定',
  'decision': '决定；决心',
  'decimal': '小数的',
  'deck': '甲板；一副牌',
  'declare': '宣布；声明',
  'declaration': '宣言；声明',
  'declarative': '陈述的',
  'decorate': '装饰',
  'decoration': '装饰；装饰品',
  'decorative': '装饰性的',
  'decrease': '减少',
  'decree': '法令；命令',
  'dedication': '奉献；献词',
  'deductive': '演绎的',
  'deductible': '可扣除的',
  'deducible': '可演绎的',
  'depth': '深度',
  'deduce': '演绎；推断',
  'deduction': '扣除；演绎',
  'deduct': '扣除',
  'deeply': '深深地',
  'deed': '行为；善行',
  'deep': '深的；深奥的',
  'deer': '鹿',
  'default': '违约；拖欠',
  'defective': '有缺陷的',
  'defensive': '防御的',
  'defendant': '被告',
  'defeat': '击败；失败',
  'defection': '叛变；背叛',
  'defect': '缺陷；缺点',
  'defense': '防御；辩护',
  'defence': '防御；辩护',
  'defend': '防御；辩护',
  'defer': '推迟；延期',
  'deficient': '不足的',
  'deficiency': '不足；缺乏',
  'define': '定义；限定',
  'definition': '定义；清晰度',
  'definite': '明确的；一定的',
  'definitely': '明确地；肯定地',
  'defy': '违抗；藐视',
  'defiance': '违抗；挑战',
  'defiant': '挑战性的；违抗的',
  'degenerate': '衰退；恶化',
  'degeneration': '衰退；恶化',
  'degrade': '降级；退化',
  'degradation': '降级；退化',
  'degree': '程度；学位',
  'delay': '延迟；延误',
  'delegate': '代表；委派',
  'delegation': '代表团；委派',
  'delete': '删除',
  'deletion': '删除',
  'deliberation': '审议；考虑',
  'delicacy': '精致；微妙',
  'delicate': '精致的；微妙的',
  'delicious': '美味的',
  'delight': '高兴；喜悦',
  'delightful': '令人愉快的',
  'deliver': '递送；发表',
  'delivery': '递送；交付',
  'delude': '欺骗；误导',
  'delusion': '错觉；欺骗',
  'demand': '要求；需求',
  'demanding': '要求高的；苛求的',
  'democracy': '民主',
  'democratic': '民主的',
  'democrat': '民主党人',
  'demographic': '人口统计的',
  'demonstrate': '展示；证明',
  'demonstration': '展示；示威',
  'demo': '示范；演示',
  'demonstrative': '表现性的',
  'denotation': '含义；指示',
  'denounce': '谴责；告发',
  'denunciation': '谴责；告发',
  'dense': '密集的；浓密的',
  'dent': '凹痕；咬痕',
  'density': '密度',
  'dental': '牙齿的；牙科的',
  'dentist': '牙医',
  'disorder': '混乱；失调',
  'dispatch': '派遣；发送',
  'dispense': '分配；分发',
  'disperse': '分散；驱散',
  'display': '展示；陈列',
  'displacement': '位移；排挤',
  'disposal': '处理；处置',
  'disposition': '性情；部署',
  'dispute': '争论；争执',
  'disputable': '可疑的；可争论的',
  'disregard': '忽视；漠视',
  'disruptive': '破坏性的；扰乱的',
  'disruption': '扰乱；中断',
  'dissent': '异议；不同意',
  'dissertation': '论文；学位论文',
  'dissident': '持不同政见者',
  'dissolve': '溶解；解散',
  'distant': '遥远的；冷淡的',
  'distinctive': '独特的；有特色的',
  'distance': '距离；间隔',
  'distinction': '区别；荣誉',
  'distil': '蒸馏；提炼',
  'distill': '蒸馏；提取',
  'distinguish': '区分；辨别',
  'distinguishable': '可区分的；明显的',
  'distortion': '扭曲；变形',
  'distract': '分散；打扰',
  'distraction': '分心；娱乐',
  'distress': '痛苦；困扰',
  'distressful': '痛苦的；不安的',
  'distribute': '分配；分发',
  'distribution': '分配；分发',
  'district': '地区；区域',
  'disturb': '打扰；扰乱',
  'disturbance': '扰乱；骚动',
  'ditch': '沟渠；壕沟',
  'dive': '跳水；俯冲',
  'diversify': '多样化；使多样化',
  'diversity': '多样性；差异',
  'divert': '转移；使转向',
  'diversion': '转移；娱乐',
  'divide': '分开；划分',
  'division': '分开；部门',
  'divisive': '分裂的；引起分歧的',
  'dividend': '股息；被除数',
  'divine': '神圣的；神授的',
  'divorce': '离婚；分离',
  'dizzy': '眩晕的；使人头晕的',
  'do': '做；干',
  'dock': '码头；停泊',
  'doctor': '医生；博士',
  'doctorate': '博士学位',
  'doctoral': '博士的；博士学位的',
  'doctrine': '教条；学说',
  'document': '文件；文献',
  'documentary': '纪录片；文件',
  'dodge': '躲避；回避',
  'dog': '狗',
  'dogma': '教条；教义',
  'dole': '救济金；施舍',
  'doll': '娃娃；玩偶',
  'dollar': '美元',
  'dolphin': '海豚',
  'dome': '圆顶；穹顶',
  'domestic': '国内的；家庭的',
  'domination': '统治；控制',
  'dominance': '统治；优势',
  'dominant': '占优势的；支配的',
  'donate': '捐赠；捐献',
  'donation': '捐赠；捐款',
  'donor': '捐赠者；供体',
  'donkey': '驴',
  'doom': '厄运；注定',
  'door': '门',
  'dormitory': '宿舍',
  'dorm': '宿舍',
  'dose': '剂量；一剂',
  'dosage': '剂量；用量',
  'dot': '点；圆点',
  'double': '双重的；两倍的',
  'doubt': '怀疑；疑惑',
  'dough': '面团；生面团',
  'doubtful': '可疑的；不确定的',
  'doubtless': '无疑的；肯定地',
  'dove': '鸽子',
  'down': '向下；楼下',
  'downgrade': '降级；下降',
  'download': '下载',
  'downstairs': '楼下',
  'downtown': '市中心',
  'downward': '向下；向下方的',
  'downwards': '向下；向下方的',
  'doze': '打瞌睡；小睡',
  'dozen': '打；十二个',
  'draft': '草稿；征兵',
  'drag': '拖；拉',
  'dragon': '龙',
  'drainage': '排水；排水系统',
  'drama': '戏剧；戏剧性',
  'dramatic': '戏剧性的；显著的',
  'dialogue': '对话；对谈',
  'diameter': '直径；直径尺寸',
  'diamond': '钻石；金刚石',
  'diary': '日记；日记本',
  'dictate': '口述；命令',
  'dictation': '听写；口述内容',
  'dictator': '独裁者；统治者',
  'dictionary': '词典；字典',
  'die': '死亡；逝去',
  'dying': '垂死；濒临死亡',
  'diesel': '柴油；柴油发动机',
  'diet': '饮食；节食',
  'dietary': '饮食的；饮食疗法',
  'differ': '不同；相异',
  'difference': '差异；区别',
  'different': '不同的；不一样的',
  'differentiation': '分化；区分',
  'difficult': '困难的；艰难的',
  'difficulty': '困难；难题',
  'diffuse': '扩散；传播',
  'diffusion': '扩散；传播',
  'dig': '挖掘；挖掘',
  'digest': '消化；摘要',
  'digestion': '消化；消化过程',
  'digestive': '消化的；消化系统的',
  'digit': '数字；手指',
  'digital': '数字的；数码的',
  'dignity': '尊严；尊贵',
  'dignify': '尊崇；赋予尊严',
  'dilemma': '困境；两难',
  'diligent': '勤奋的；勤勉的',
  'diligence': '勤奋；勤勉',
  'dilute': '稀释；淡化',
  'dilution': '稀释；稀释液',
  'dim': '昏暗的；模糊的',
  'dime': '一角硬币；十美分',
  'dimension': '尺寸；维度',
  'dimensional': '尺寸的；维度的',
  'dine': '用餐；进餐',
  'diner': '餐馆；进餐者',
  'dinner': '晚餐；宴会',
  'dinosaur': '恐龙；史前生物',
  'dioxide': '二氧化物；二氧化碳',
  'dip': '浸；下降',
  'diploma': '文凭；证书',
  'diplomat': '外交官；外交家',
  'diplomatic': '外交的；圆滑的',
  'diplomacy': '外交；外交手段',
  'direct': '直接；指导',
  'direction': '方向；指令',
  'director': '导演；主管',
  'directory': '目录；指南',
  'dirt': '泥土；污垢',
  'dirty': '脏的；污秽的',
  'disable': '使残疾；使失效',
  'disabled': '残疾的；失去能力的',
  'disability': '残疾；无能',
  'disagree': '不同意；争执',
  'disagreement': '不同意；分歧',
  'disappear': '消失；不复存在',
  'disappoint': '使失望；使沮丧',
  'disappointment': '失望；沮丧',
  'disappointing': '令人失望的；令人沮丧的',
  'disapprove': '不赞成；反对',
  'disapproval': '不赞成；反对',
  'disarm': '解除武装；使无效',
  'disarmament': '裁军；解除武装',
  'disaster': '灾难；灾祸',
  'disastrous': '灾难性的；悲惨的',
  'discern': '辨别；识别',
  'discharge': '排放；卸下',
  'discipline': '纪律；学科',
  'disciplined': '守纪律的；有教养的',
  'disciplinary': '纪律的；学科的',
  'disclosure': '揭露；公开',
  'disco': '迪斯科舞厅；迪斯科舞曲',
  'discord': '不一致；争吵',
  'discount': '折扣；贴现',
  'discourage': '阻止；使气馁',
  'discourse': '演讲；论述',
  'discover': '发现；揭示',
  'discovery': '发现；发明',
  'discreet': '谨慎的；小心的',
  'discrimination': '歧视；区别对待',
  'discriminatory': '歧视的；有区别的',
  'discuss': '讨论；辩论',
  'discussion': '讨论；辩论',
  'disease': '疾病；病害',
  'disguise': '伪装；掩饰',
  'disgust': '厌恶；反感',
  'dish': '盘子；菜肴',
  'disgusting': '令人厌恶的；令人作呕的',
  'disintegrate': '分解；崩溃',
  'disintegration': '分解；崩溃',
  'disk': '磁盘；光盘',
  'disc': '圆盘；唱片',
  'dislike': '不喜欢；厌恶',
  'dismantle': '拆除；拆散',
  'dismay': '惊慌；沮丧',
  'dismissal': '解雇；免职',
  'explosion': '爆炸；爆发',
  'explosive': '爆炸物；易爆的',
  'exploitation': '开发；剥削',
  'explore': '探索；勘探',
  'exploration': '探险；探索',
  'exponent': '指数；指数函数',
  'export': '出口；输出',
  'exportation': '出口；输出',
  'exposure': '暴露；曝光',
  'exposition': '展览；博览会',
  'express': '表达；快递',
  'expression': '表达；表情',
  'expressive': '富有表情的；表达性的',
  'expressway': '高速公路',
  'exquisite': '精美的；精致的',
  'extend': '延伸；扩展',
  'extension': '延伸；扩充',
  'extensive': '广泛的；大量的',
  'extended': '扩大的；延长的',
  'extent': '程度；范围',
  'extinction': '灭绝；消亡',
  'exterior': '外部；外表',
  'external': '外部的；外来的',
  'extinct': '灭绝的；耗尽的',
  'extinguish': '熄灭；扑灭',
  'extra': '额外的；特别的',
  'extraction': '提取；摘录',
  'extraordinary': '非凡的；异常的',
  'extravagance': '奢侈；浪费',
  'extreme': '极端的；极度的',
  'extremity': '极端；末端',
  'eye': '眼睛；视野',
  'eyebrow': '眉毛',
  'eyesight': '视力；视野',
  'fable': '寓言；神话',
  'fabric': '织物；构造',
  'fabrication': '制造；伪造',
  'fabulous': '寓言般的；惊人的',
  'face': '脸；面向',
  'facial': '面部的；面容的',
  'facet': '面；方面',
  'facility': '设施；便利',
  'facilitation': '便利；促进',
  'fact': '事实；真相',
  'factual': '事实的；真实的',
  'faction': '派系；党派',
  'failure': '失败；故障',
  'factor': '因素；要素',
  'factory': '工厂；制造厂',
  'fade': '褪色；衰减',
  'fail': '失败；未能',
  'faint': '微弱的；模糊的',
  'fair': '公平的；晴朗的',
  'fairy': '仙女；精灵',
  'faith': '信仰；信任',
  'fake': '假的；伪造的',
  'fall': '落下；下降',
  'false': '假的；错误的',
  'fame': '名声；名誉',
  'familiar': '熟悉的；亲近的',
  'family': '家庭；家族',
  'famine': '饥荒；荒年',
  'fan': '风扇；狂热者',
  'fancy': '爱好；幻想',
  'fantasy': '幻想；空想',
  'far': '远的；遥远的',
  'fantastic': '奇异的；极好的',
  'fare': '票价；费用',
  'farewell': '告别；再见',
  'farm': '农场；耕作',
  'farmer': '农民；农场主',
  'farming': '耕作；农业',
  'farther': '更远；进一步',
  'fascinate': '吸引；迷住',
  'fascinating': '迷人的；吸引人的',
  'fascination': '着迷；魅力',
  'fascist': '法西斯主义的；法西斯分子',
  'fascism': '法西斯主义；独裁主义',
  'fashion': '时尚；流行',
  'fast': '快的；迅速的',
  'fashionable': '时尚的；流行的',
  'fasten': '系紧；固定',
  'fat': '脂肪；肥胖的',
  'fatal': '致命的；决定性的',
  'fatality': '死亡；致命性',
  'fate': '命运；运气',
  'father': '父亲；创始人',
  'fatherly': '父亲的；慈爱的',
  'fatigue': '疲劳；劳累',
  'fault': '错误；缺点',
  'faulty': '有错误的；有缺点的',
  'favor': '喜爱；偏爱',
  'favour': '喜爱；偏爱',
  'fax': '传真',
  'favorable': '有利的；赞成的',
  'favourable': '有利的；赞成的',
  'favorite': '喜爱的；偏爱的',
  'favourite': '喜爱的；偏爱的',
  'fear': '害怕；恐惧',
  'fearful': '可怕的；恐惧的',
  'engine': '发动机；引擎',
  'engineer': '工程师',
  'engineering': '工程学',
  'enhancement': '增强；改进',
  'enjoy': '享受',
  'enjoyable': '愉快的',
  'enjoyment': '享受；乐趣',
  'enlarge': '扩大；放大',
  'enlighten': '启发；照亮',
  'enlightening': '启发性的',
  'enlist': '征募；登记',
  'enormous': '巨大的',
  'enough': '足够的',
  'enquire': '询问；查询',
  'enquiry': '询问；调查',
  'enrich': '丰富；使富裕',
  'enrol': '登记；注册',
  'enroll': '登记；注册',
  'enrolment': '登记；注册',
  'enrollment': '登记；注册',
  'ensue': '接着发生',
  'ensure': '确保；保证',
  'enter': '进入；加入',
  'entrance': '入口；进入',
  'entry': '进入；入口',
  'enterprising': '有事业心的',
  'entertainment': '娱乐；娱乐活动',
  'entertaining': '有趣的',
  'enthusiasm': '热情；热心',
  'enthusiastic': '热情的',
  'enthusiastically': '热情地',
  'enthusiast': '爱好者',
  'entire': '全部的；完整的',
  'entirety': '整体；全部',
  'entity': '实体；单位',
  'entrepreneurial': '企业家的',
  'entrust': '委托；信托',
  'envelop': '包裹；包围',
  'envelope': '信封；封套',
  'environment': '环境',
  'environmental': '环境的',
  'environmentalist': '环境保护主义者',
  'envisage': '想象；展望',
  'envoy': '使者；外交官',
  'envy': '羡慕；嫉妒',
  'envious': '嫉妒的',
  'epic': '史诗；叙事诗',
  'epidemic': '流行病',
  'episode': '插曲；一段',
  'epoch': '时代；时期',
  'equal': '平等的；相等的',
  'equally': '平等地；同样地',
  'equality': '平等；相等',
  'equate': '等同；等于',
  'equation': '等式；方程式',
  'equator': '赤道',
  'equip': '装备；配备',
  'equipment': '设备；装备',
  'equitable': '公平的；公正的',
  'equivalent': '等价物；等效的',
  'equivalence': '等价；等效',
  'era': '时代；时期',
  'eradicate': '根除；消灭',
  'eradication': '根除；消灭',
  'erase': '擦除；抹去',
  'eraser': '橡皮；擦除器',
  'erect': '建立；竖立',
  'erection': '建立；竖立',
  'erosion': '侵蚀；腐蚀',
  'erosive': '侵蚀性的',
  'err': '犯错误；出差错',
  'error': '错误；误差',
  'erroneous': '错误的',
  'errand': '差事；使命',
  'erupt': '爆发；喷发',
  'escalate': '升级；扩大',
  'escalation': '升级；扩大',
  'escalator': '自动扶梯',
  'escape': '逃跑；逃脱',
  'escort': '护送；陪同',
  'especially': '特别；尤其',
  'essay': '散文；论文',
  'essayist': '散文家；论文作者',
  'essential': '基本的；本质的',
  'establish': '建立；设立',
  'establishment': '建立；机构',
  'estate': '地产；财产',
  'esthetic': '美学的；审美的',
  'esthetics': '美学',
  'estimate': '估计；评估',
  'estimation': '估计；评价',
  'eternal': '永恒的；永久的',
  'eternity': '永恒；无限',
  'ethic': '道德；伦理',
  'ethics': '伦理学',
  'ethnic': '民族的；种族的',
  'etiquette': '礼节；礼仪',
  'euro': '欧元',
  'evacuate': '疏散；撤离',
  'evacuation': '疏散；撤离',
  'evade': '躲避；规避',
  'evasive': '规避的；回避的',
  'evasion': '规避；逃避',
  'evaluate': '评估；评价',
  'evaluation': '评估；评价',
  'evaporate': '蒸发；挥发',
  'evaporation': '蒸发；挥发',
  'eve': '前夕；前夜',
  'even': '甚至；即使',
  'evenly': '均匀地；平稳地',
  'evening': '傍晚；晚上',
  'event': '事件；活动',
  'eventful': '多事的；充满事件的',
  'eventually': '最终；终于',
  'eventual': '最终的；结果的',
  'eventuality': '可能发生的事；结果',
  'ever': '曾经；永远',
  'evidence': '证据；证明',
  'every': '每个；每一',
  'everybody': '每个人；人人',
  'everyday': '日常的；每天的',
  'everyone': '每个人；人人',
  'everything': '每件事；一切',
  'everywhere': '到处；处处',
  'evident': '明显的；显然的',
  'evil': '邪恶的；有害的',
  'evolution': '进化；演变',
  'evolutionary': '进化的；演变的',
  'exact': '精确的；准确的',
  'exaggeration': '夸张；夸大',
  'examine': '检查；审查',
  'exam': '考试；检查',
  'examination': '考试；审查',
  'examiner': '主考官；审查者',
  'examinee': '应试者；被审查者',
  'example': '例子；榜样',
  'exemplary': '典范的；模范的',
  'exemplify': '例证；是……的例子',
  'exceedingly': '非常；极其',
  'excel': '优秀；胜过',
  'excellence': '优秀；卓越',
  'excellent': '优秀的；极好的',
  'except': '除了；除……之外',
  'exception': '例外；除外',
  'excerpt': '摘录；摘要',
  'excess': '过量；过度',
  'excessive': '过量的；过度的',
  'exchange': '交换；兑换',
  'excite': '兴奋；激励',
  'exciting': '令人兴奋的；激动人心的',
  'excitement': '兴奋；激动',
  'exclaim': '惊叫；呼喊',
  'exclamation': '感叹；呼喊',
  'exclamatory': '感叹的；呼喊的',
  'exclude': '排除；除外',
  'exclusion': '排除；除外',
  'excursion': '远足；短途旅行',
  'excuse': '借口；理由',
  'execute': '执行；实施',
  'execution': '执行；实施',
  'executive': '执行的；行政的',
  'exempt': '免除；豁免',
  'exercise': '锻炼；练习',
  'exemption': '免除；豁免',
  'exertion': '努力；尽力',
  'exhaustion': '筋疲力尽；耗尽',
  'exhaustive': '详尽的；彻底的',
  'exhibit': '展览；展示',
  'exhibition': '展览；展示',
  'exile': '流放；放逐',
  'exist': '存在；生存',
  'exit': '出口；退出',
  'existence': '存在；生存',
  'existent': '存在的；现存的',
  'existing': '现有的；现存的',
  'exotic': '外来的；异国的',
  'expand': '扩张；膨胀',
  'expansion': '扩张；膨胀',
  'expansive': '扩张的；广阔的',
  'expect': '期待；预期',
  'expectation': '期待；预期',
  'expectancy': '期待；预期',
  'expedition': '远征；探险',
  'expel': '驱逐；排出',
  'expend': '花费；消耗',
  'expenditure': '支出；花费',
  'expense': '费用；开销',
  'expensive': '昂贵的；花钱多的',
  'experience': '经验；体验',
  'experienced': '有经验的；老练的',
  'experiment': '实验；试验',
  'experimental': '实验的；试验的',
  'expert': '专家；熟练的',
  'expertise': '专门知识；专长',
  'expire': '期满；到期',
  'expiration': '期满；到期',
  'explain': '解释；说明',
  'explanation': '解释；说明',
  'explanatory': '解释的；说明的',
  'explode': '爆炸；爆发',
  'dramatically': '戏剧性地；显著地',
  'drastically': '大幅度地；激烈地',
  'draw': '画；吸引',
  'drawing': '绘画；草图',
  'drawback': '缺点；障碍',
  'drawer': '抽屉；提款人',
  'dread': '害怕；畏惧',
  'dreadful': '可怕的；糟糕的',
  'dream': '梦想；梦',
  'dreamy': '梦幻的；空想的',
  'dress': '衣服；穿衣',
  'dressing': '穿衣；装饰',
  'drift': '漂流；趋势',
  'drill': '钻；操练',
  'drink': '喝；饮料',
  'drip': '滴；水滴',
  'drive': '驾驶；推动',
  'driver': '驾驶员；驱动器',
  'drop': '落下；滴下',
  'dropout': '辍学者；退出者',
  'drought': '干旱；缺乏',
  'drown': '溺死；淹没',
  'drug': '药物；毒品',
  'drum': '鼓；鼓声',
  'drunk': '醉酒的；陶醉的',
  'drunken': '醉酒的；酒醉的',
  'drunkard': '酒鬼；醉汉',
  'dry': '干燥的；干',
  'dual': '双的；二重的',
  'dryer': '干燥机；烘干器',
  'dub': '配音；授予称号',
  'duck': '鸭子；躲避',
  'due': '应得的；预期的',
  'duly': '适当地；准时地',
  'dull': '无聊的；迟钝的',
  'dumb': '哑的；无言的',
  'dump': '垃圾场；倾倒',
  'duplicate': '副本；复制',
  'duplication': '复制；副本',
  'durability': '耐久性；持久性',
  'duration': '持续时间；期间',
  'during': '在……期间',
  'dusk': '黄昏；傍晚',
  'dust': '灰尘；尘土',
  'dusty': '灰尘的；多尘的',
  'duty': '责任；税',
  'dwarf': '矮人；使矮小',
  'dwelling': '住宅；居住',
  'dweller': '居民；居住者',
  'dye': '染料；染色',
  'dynamic': '动态的；有活力的',
  'dynamics': '动力学；动态',
  'dynasty': '朝代；王朝',
  'each': '每个；各自',
  'eager': '渴望的；热切的',
  'eagle': '鹰；雄心勃勃的人',
  'ear': '耳朵；倾听',
  'early': '早的；早期的',
  'earn': '赚得；挣',
  'earnings': '收入；盈利',
  'earnest': '认真的；诚挚的',
  'earth': '地球；土地',
  'earthquake': '地震；震动',
  'east': '东方；东部',
  'eastern': '东方的；东部的',
  'easter': '复活节',
  'easily': '容易地；轻易地',
  'easy': '容易的；舒适的',
  'easy-going': '随和的；容易相处的',
  'eat': '吃；食物',
  'echo': '回声；共鸣',
  'eclipse': '日食；月食',
  'ecology': '生态学；生态环境',
  'ecological': '生态的；生态学的',
  'economics': '经济学；经济状况',
  'economic': '经济的；经济学的',
  'economy': '经济；经济体系',
  'economical': '经济的；节约的',
  'economist': '经济学家',
  'ecosystem': '生态系统',
  'edge': '边缘；优势',
  'edible': '可食用的；可吃的',
  'edit': '编辑；修改',
  'editor': '编辑；编者',
  'edition': '版次；版本',
  'educator': '教育家；教育者',
  'editorial': '社论；编辑的',
  'education': '教育；培养',
  'educational': '教育的；有教育意义的',
  'educate': '教育；培养',
  'effective': '有效的；实际的',
  'effect': '效果；影响',
  'efficiency': '效率；效能',
  'efficient': '效率高的；有效的',
  'effort': '努力；尽力',
  'egg': '蛋；卵',
  'eggplant': '茄子；洋茄子',
  'ego': '自我；自尊',
  'eight': '八；八个',
  'eighteen': '十八；十八个',
  'eighth': '第八；八个',
  'eighty': '八十；八十个',
  'either': '两者之一；任一',
  'eject': '喷射；驱逐',
  'ejection': '喷射；驱逐',
  'elaboration': '详尽；精心制作',
  'elapse': '流逝；过去',
  'elastic': '有弹性的；弹性的',
  'elasticity': '弹性；灵活性',
  'elbow': '肘部；弯曲处',
  'elder': '年长的；长辈',
  'elderly': '年老的；老年的',
  'elect': '选举；选择',
  'election': '选举；当选',
  'electoral': '选举的；选民的',
  'electorate': '选民；选举权',
  'electricity': '电；电力',
  'electric': '电的；导电的',
  'electrical': '电的；电气',
  'electron': '电子；电子学',
  'electronic': '电子的；电子设备',
  'elegant': '优雅的；雅致的',
  'elegance': '优雅；雅致',
  'element': '元素；基本部分',
  'elementary': '基本的；初级的',
  'elephant': '大象；象',
  'elevation': '提升；高地',
  'elevator': '电梯；升降机',
  'eleven': '十一；十一个',
  'eligibility': '资格；合格',
  'eligible': '合格的；有资格的',
  'elite': '精英；上层',
  'eloquent': '雄辩的；有力的',
  'eloquence': '雄辩；口才',
  'else': '别的；其他',
  'elsewhere': '别处；其他地方',
  'email': '电子邮件；电子信件',
  'emancipate': '解放；使自由',
  'emancipation': '解放；自由',
  'embargo': '禁运；封锁',
  'embark': '上船；开始',
  'embarrass': '使尴尬；困惑',
  'embarrassment': '尴尬；困惑',
  'embassy': '大使馆；大使馆',
  'embed': '嵌入；使嵌入',
  'embody': '体现；具体化',
  'embodiment': '体现；具体化',
  'embroidery': '刺绣；装饰',
  'emergence': '出现；浮现',
  'emergency': '紧急情况；危机',
  'emigrate': '移民；移居国外',
  'emigration': '移民；移居国外',
  'emigrant': '移民；移居者',
  'eminence': '显赫；卓越',
  'emit': '发出；发射',
  'emission': '排放；发射',
  'emotion': '情感；情绪',
  'emotional': '情感的；情绪的',
  'emperor': '皇帝；帝王',
  'empress': '皇后；女皇',
  'emphasis': '强调；重点',
  'emphasize': '强调；着重',
  'emphasise': '强调；着重',
  'emphatic': '强调的；断言的',
  'empire': '帝国；帝国',
  'employ': '雇佣；使用',
  'employment': '雇佣；就业',
  'employer': '雇主；雇佣者',
  'employee': '雇员；雇工',
  'empty': '空的；使空',
  'emptiness': '空虚；空无',
  'emulate': '模仿；效仿',
  'enable': '使能够；启用',
  'emulation': '模仿；效仿',
  'enact': '制定；颁布',
  'enactment': '制定；颁布',
  'enclose': '围住；附上',
  'enclosure': '围栏；附件',
  'encounter': '遭遇；相遇',
  'encourage': '鼓励；激励',
  'encouragement': '鼓励；激励',
  'encouraging': '鼓舞人心的；令人振奋的',
  'encyclopedia': '百科全书；百科全书',
  'encyclopaedia': '百科全书；百科全书',
  'end': '结束；末端',
  'ending': '结尾；结局',
  'endless': '无尽的；无止境的',
  'endanger': '危及；危害',
  'endeavour': '努力；尽力',
  'endorsement': '背书；赞同',
  'endow': '捐赠；赋予',
  'endowment': '捐赠；天赋',
  'endurance': '忍耐；持久',
  'enemy': '敌人；敌对者',
  'energy': '能量；精力',
  'energetic': '精力充沛的；充满活力的',
  'energetically': '精力充沛地；积极地',
  'enforcement': '执行；实施',
  'engage': '从事；订婚',
  'engagement': '从事；订婚',
  'generosity': '慷慨；大方',
  'genius': '天才；天赋',
  'genre': '类型；流派',
  'gentle': '温和；温柔',
  'gentleman': '绅士；有教养的人',
  'geography': '地理；地理位置',
  'geographic': '地理的；地理学的',
  'geographically': '地理上；地理地',
  'geology': '地质；地质学',
  'geological': '地质的；地质学的',
  'geologically': '地质上；地质地',
  'geometry': '几何；几何学',
  'geometric': '几何的；几何学的',
  'geometrically': '几何上；几何地',
  'germ': '萌芽；细菌',
  'gesture': '手势；姿态',
  'get': '得到；获得',
  'ghost': '鬼魂；幽灵',
  'giant': '巨人；巨大的',
  'gigantic': '巨大的；庞大的',
  'gift': '礼物；天赋',
  'gifted': '有天赋的；有才能的',
  'giggle': '咯咯笑；傻笑',
  'girl': '女孩；女儿',
  'give': '给予；提供',
  'given': '考虑到；鉴于',
  'glacier': '冰川；冰河',
  'glad': '高兴；快乐',
  'glamor': '魅力；魔力',
  'glamour': '魅力；魔力',
  'glamorous': '迷人的；富有魅力的',
  'glance': '一瞥；扫视',
  'gland': '腺体；内分泌腺',
  'glare': '瞪视；刺眼的光线',
  'glass': '玻璃；窗玻璃',
  'gleam': '闪光；微光',
  'glide': '滑行；滑翔',
  'glider': '滑翔机；滑翔板',
  'glimpse': '一瞥；一看',
  'glitter': '闪光；闪耀',
  'globe': '地球；地球仪',
  'global': '全球的；全世界的',
  'globalize': '全球化；使全球化',
  'globalise': '全球化；使全球化',
  'gloom': '忧郁；阴沉',
  'gloomy': '忧郁的；阴沉的',
  'glory': '荣耀；光辉',
  'glorious': '光荣的；辉煌的',
  'glossary': '词汇表；术语表',
  'glove': '手套；手套状物',
  'glow': '发光；炽热',
  'glue': '胶水；粘合',
  'go': '去；进行',
  'goal': '目标；目的',
  'goat': '山羊；绵羊',
  'god': '上帝；神',
  'gold': '金；黄金',
  'golden': '金色的；贵重的',
  'golf': '高尔夫；高尔夫球',
  'good': '好的；优良的',
  'goodbye': '再见；告别',
  'goodness': '善良；美德',
  'goods': '货物；商品',
  'goose': '鹅；雁',
  'gorge': '峡谷；喉咙',
  'gorgeous': '美丽的；华丽的',
  'gospel': '福音；好消息',
  'gossip': '闲话；流言蜚语',
  'govern': '治理；统治',
  'government': '政府；政权',
  'governor': '州长；总督',
  'gown': '长袍；礼服',
  'grab': '抓住；夺取',
  'grace': '优雅；恩典',
  'graceful': '优雅的；优美的',
  'gracious': '亲切的；高尚的',
  'grade': '等级；年级',
  'gradual': '逐渐的；渐进的',
  'gradually': '逐渐地；逐步地',
  'graduate': '毕业生；毕业',
  'graduation': '毕业；毕业典礼',
  'grain': '谷物；颗粒',
  'gram': '克；公克',
  'gramme': '克；公克',
  'grammar': '语法；文法',
  'grammatical': '语法的；文法的',
  'grass': '草地；青草',
  'grassy': '草地的；多草的',
  'grateful': '感激的；感谢的',
  'gratitude': '感激；感谢',
  'gravitation': '引力',
  'gravity': '重力；严重性',
  'gray': '灰色；苍白的',
  'grey': '灰色；苍白的',
  'graze': '放牧；擦过',
  'grease': '油脂；涂油',
  'great': '伟大的；极好的',
  'greasy': '油腻的；滑的',
  'greed': '贪婪；贪欲',
  'green': '绿色；青的',
  'greedy': '贪婪的；贪心的',
  'greenhouse': '温室；暖房',
  'greeting': '问候；招呼',
  'grid': '网格；电网',
  'grief': '悲伤；悲痛',
  'grieve': '悲伤；哀悼',
  'grievous': '悲惨的；严重的',
  'grill': '烤架；审问',
  'grim': '严厉的；阴森的',
  'grin': '露齿笑；咧嘴',
  'grind': '磨碎；折磨',
  'grip': '握紧；控制',
  'groan': '呻吟；抱怨',
  'grocer': '杂货商；食品店',
  'grocery': '杂货店；食品',
  'groove': '沟槽；流行',
  'grope': '摸索；探索',
  'gross': '总共的；粗俗的',
  'ground': '地面；土地',
  'group': '团体；群',
  'grow': '生长；种植',
  'growth': '生长；增长',
  'guarantee': '保证；担保',
  'guard': '守卫；保护',
  'guardian': '监护人；保护者',
  'guess': '猜测；推测',
  'guest': '客人；来宾',
  'guide': '指南；导游',
  'guidance': '指导；引导',
  'guideline': '指导方针；准则',
  'guilt': '罪恶；内疚',
  'guilty': '有罪的；内疚的',
  'guitar': '吉他；六弦琴',
  'gulf': '海湾；鸿沟',
  'guitarist': '吉他手',
  'gum': '口香糖；树胶',
  'gun': '枪；炮',
  'gut': '肠道；勇气',
  'guy': '家伙；男子',
  'gym': '健身房；体育馆',
  'gymnasium': '体育馆；健身房',
  'habit': '习惯；习性',
  'habitual': '习惯的；日常的',
  'habitat': '栖息地；住处',
  'hack': '非法入侵；剪裁',
  'hacker': '黑客；篡改者',
  'hail': '冰雹；欢呼',
  'hair': '头发；毛发',
  'hairy': '多毛的；毛茸茸的',
  'half': '一半；不完整的',
  'halfway': '一半；中途',
  'hall': '大厅；礼堂',
  'ham': '火腿；夸张',
  'hamburger': '汉堡包；牛肉饼',
  'burger': '汉堡包；牛肉饼',
  'hammer': '锤子；敲打',
  'hand': '手；指导',
  'handful': '一把；少数',
  'handbook': '手册；指南',
  'handicap': '障碍；不利条件',
  'handicapped': '有障碍的；残疾的',
  'handicraft': '手工艺；手工艺品',
  'handle': '处理；把手',
  'handsome': '英俊的；大方的',
  'handwriting': '书法；笔迹',
  'handy': '方便的；手边的',
  'hang': '悬挂；吊死',
  'happen': '发生；碰巧',
  'happy': '快乐的；幸福的',
  'happiness': '快乐；幸福',
  'happily': '快乐地；幸福地',
  'harass': '骚扰；困扰',
  'harassment': '骚扰；困扰',
  'harbor': '港口；窝藏',
  'harbour': '港口；窝藏',
  'hard': '硬的；困难的',
  'harden': '硬化；使坚强',
  'hardly': '几乎不；勉强',
  'hardship': '困难；艰辛',
  'hardware': '硬件；五金',
  'hardy': '坚韧的；耐寒的',
  'harm': '伤害；损害',
  'harmful': '有害的；伤害的',
  'harmless': '无害的；安全的',
  'harmony': '和谐；协调',
  'harmonious': '和谐的；协调的',
  'flock': '羊群；人群',
  'flood': '洪水；涌动',
  'floor': '地板；楼层',
  'flour': '面粉；粉状物',
  'flourish': '繁荣；茂盛',
  'flow': '流动；流程',
  'flower': '花朵；开花',
  'fluctuation': '波动；起伏',
  'fluent': '流利；流畅',
  'fluency': '流利；流畅',
  'fluid': '流体；流动',
  'flush': '脸红；冲洗',
  'flutter': '飘动；摆动',
  'fly': '飞行；苍蝇',
  'foam': '泡沫；起泡',
  'flight': '飞行；航班',
  'focus': '焦点；集中',
  'foe': '敌人；对手',
  'fog': '雾；烟雾',
  'foggy': '雾蒙蒙的；模糊的',
  'foil': '箔；衬托',
  'fold': '折叠；褶皱',
  'folk': '民间；人民',
  'folklore': '民间传说；风俗',
  'follow': '跟随；遵循',
  'following': '跟随；后续',
  'fond': '喜爱；深厚',
  'food': '食物；食品',
  'fool': '傻瓜；愚人',
  'foot': '脚；英尺',
  'football': '足球；足球运动',
  'footprint': '脚印；足迹',
  'for': '为了；对于',
  'forbid': '禁止；不允许',
  'force': '力量；强迫',
  'forceful': '有力的；强迫的',
  'forecast': '预测；预报',
  'forehead': '额头；前部',
  'foreign': '外国的；外来的',
  'foreigner': '外国人；外乡人',
  'foremost': '首要的；最前面的',
  'foresee': '预见；预知',
  'foreseeable': '可预见的；可预知的',
  'foresight': '远见；先见',
  'forest': '森林；树林',
  'forestry': '林业；森林学',
  'foretell': '预言；预测',
  'forever': '永远；长久',
  'forfeit': '没收；丧失',
  'forge': '锻造；伪造',
  'forgery': '伪造；赝品',
  'forget': '忘记；遗忘',
  'forgetful': '健忘的；疏忽的',
  'forgettable': '易忘的；值得忘记的',
  'forgive': '原谅；宽恕',
  'forgiving': '宽容的；原谅的',
  'fork': '叉；分支',
  'form': '形式；构成',
  'formation': '形成；编队',
  'formal': '正式的；形式上的',
  'formality': '形式；礼节',
  'format': '格式；安排',
  'former': '以前的；前任的',
  'formidable': '强大的；可怕的',
  'formula': '公式；规则',
  'formulate': '制定；表达',
  'formulation': '制定；公式化',
  'fort': '堡垒；要塞',
  'forth': '向前；从此',
  'forthcoming': '即将到来的；露面的',
  'fortify': '加强；巩固',
  'fortification': '防御；堡垒',
  'fortnight': '两周；十四天',
  'fortune': '财富；运气',
  'fortunate': '幸运的；吉利的',
  'forty': '四十；四十个',
  'forum': '论坛；讨论会',
  'forward': '向前；前进',
  'fossil': '化石；古生物',
  'foul': '污秽的；犯规的',
  'found': '建立；基础',
  'founding': '建立；创立',
  'founder': '创始人；奠基人',
  'foundation': '基础；基金会',
  'fountain': '喷泉；源泉',
  'four': '四；四个',
  'fourteen': '十四；十四个',
  'fox': '狐狸；狡猾的',
  'fragility': '脆弱；易碎',
  'fragmentary': '零碎的；片段的',
  'fraction': '分数；小部分',
  'fragmentation': '破碎；分裂',
  'fracture': '断裂；骨折',
  'fragment': '碎片；片段',
  'fragrant': '芬芳的；香味的',
  'fragrance': '芬芳；香气',
  'frame': '框架；构架',
  'franchise': '特许权；特权',
  'frank': '坦率的；真诚的',
  'frantically': '疯狂地；狂热地',
  'fraud': '欺诈；诈骗',
  'fraudulent': '欺诈的；诈骗的',
  'free': '自由的；免费的',
  'freedom': '自由；解放',
  'freeway': '高速公路',
  'freeze': '冻结；凝固',
  'freight': '货运；货物',
  'frequent': '频繁的；常发生的',
  'frequency': '频率；频度',
  'fresh': '新鲜的；清新的',
  'freshman': '大一新生',
  'friday': '星期五',
  'friend': '朋友；友人',
  'friendly': '友好的；亲切的',
  'friendship': '友谊；友情',
  'fright': '惊吓；恐惧',
  'frighten': '惊吓；使害怕',
  'fringe': '边缘；外围',
  'frog': '青蛙',
  'from': '从；来自',
  'front': '前面；前方',
  'frontier': '边境；前沿',
  'frost': '霜；霜冻',
  'frosty': '寒冷的；冰冷的',
  'frown': '皱眉；不悦',
  'fruit': '水果；果实',
  'fruitful': '多产的；富有成效的',
  'frustrate': '挫败；使沮丧',
  'fry': '油炸；煎',
  'frustration': '挫败；挫折',
  'frustrating': '令人沮丧的；使人受挫的',
  'fuck': '他妈的；干',
  'fuel': '燃料；燃料剂',
  'fulfil': '履行；实现',
  'fulfill': '履行；实现',
  'full': '满的；完全的',
  'fulfilment': '履行；实现',
  'fulfillment': '履行；实现',
  'fun': '乐趣；娱乐',
  'funny': '有趣的；滑稽的',
  'function': '功能；作用',
  'functional': '功能的；实用的',
  'fund': '基金；资金',
  'funding': '资助；投资',
  'funeral': '葬礼；丧礼',
  'fur': '毛皮；皮毛',
  'furnace': '熔炉；炉子',
  'furnish': '提供；布置',
  'furniture': '家具；家具用品',
  'further': '进一步的；更远的',
  'furthermore': '此外；而且',
  'fury': '狂怒；愤怒',
  'furious': '狂怒的；愤怒的',
  'fuse': '保险丝；熔合',
  'fusion': '融合；熔合',
  'fuss': '小题大做；忙乱',
  'futile': '徒劳的；无用的',
  'futility': '无益；徒劳',
  'future': '未来；前途',
  'gadget': '小发明；小玩意儿',
  'gadgetry': '小发明；小玩意儿',
  'gain': '获得；收益',
  'galaxy': '银河；星系',
  'gallery': '画廊；展览馆',
  'gallon': '加仑（容量单位）',
  'gamble': '赌博；投机',
  'game': '游戏；比赛',
  'gang': '一伙人；帮派',
  'gaol': '监狱；牢房',
  'gap': '缺口；差距',
  'garage': '车库；汽车修理厂',
  'garbage': '垃圾；废物',
  'garden': '花园；菜园',
  'gangster': '黑帮分子；匪徒',
  'gardener': '园丁；园艺师',
  'gardening': '园艺；园艺活动',
  'garlic': '大蒜',
  'garment': '服装；衣服',
  'gas': '气体；煤气',
  'gasoline': '汽油',
  'petrol': '汽油',
  'gasp': '喘息；喘气',
  'gate': '大门；入口',
  'gather': '聚集；收集',
  'gathering': '聚会；集会',
  'gay': '快乐的；同性恋的',
  'gaze': '凝视；注视',
  'gear': '齿轮；设备',
  'gender': '性别；性别角色',
  'gene': '基因',
  'general': '一般的；大体的',
  'generate': '产生；生成',
  'generation': '一代；产生',
  'generous': '慷慨的；大方的',
  'genetic': '遗传的；基因的',
  'genetically': '遗传地；基因地',
  'generally': '一般地；通常',
  'generalize': '概括；推广',
  'generalise': '概括；推广',
  'generator': '发电机；发生器',
  'feasibility': '可行性；可实施性',
  'feast': '盛宴；宴会',
  'feat': '功绩；壮举',
  'feather': '羽毛；翎毛',
  'feature': '特征；特色',
  'february': '二月',
  'federal': '联邦的；联邦制的',
  'federation': '联邦；联盟',
  'fee': '费用；手续费',
  'feeble': '微弱的；虚弱的',
  'feed': '喂养；饲养',
  'feedback': '反馈；回应',
  'feel': '感觉；感触',
  'feeling': '感觉；感情',
  'fellow': '伙伴；同行',
  'fellowship': '伙伴关系；联谊会',
  'female': '女性的；雌性的',
  'feminism': '女权主义',
  'feminist': '女权主义者',
  'fence': '栅栏；篱笆',
  'ferry': '渡船；渡轮',
  'fertile': '肥沃的；多产的',
  'fertility': '肥力；生育能力',
  'fertilizer': '肥料',
  'fertiliser': '肥料',
  'festival': '节日；庆典',
  'fetch': '取来；接来',
  'fever': '发烧；热度',
  'feverish': '发烧的；兴奋的',
  'few': '少数；不多',
  'fiber': '纤维；纤维质',
  'fibre': '纤维；纤维质',
  'fiction': '小说；虚构',
  'fictional': '虚构的；小说的',
  'field': '田野；领域',
  'fierce': '猛烈的；凶猛的',
  'fifteen': '十五',
  'fifth': '第五',
  'fifty': '五十',
  'fight': '战斗；斗争',
  'figure': '数字；人物',
  'file': '文件；档案',
  'figurative': '比喻的；象征的',
  'fill': '填充；装满',
  'filling': '填充物；馅料',
  'film': '电影；胶片',
  'filter': '过滤器；筛选',
  'final': '最终的；决定性的',
  'finally': '最后；终于',
  'finalize': '使最终确定；完成',
  'finalise': '使最终确定；完成',
  'finance': '金融；财政',
  'financial': '金融的；财政的',
  'find': '找到；发现',
  'finding': '发现；研究结果',
  'fine': '好的；美好的',
  'finger': '手指；指',
  'fingerprint': '指纹',
  'finish': '完成；结束',
  'finite': '有限的；有限制的',
  'fire': '火；火灾',
  'fireman': '消防员',
  'fireplace': '壁炉',
  'fireworks': '烟花；爆竹',
  'firm': '公司；坚固的',
  'first': '第一；首先',
  'fiscal': '财政的；会计的',
  'fish': '鱼；捕鱼',
  'fishing': '钓鱼；捕鱼',
  'fisherman': '渔民',
  'fist': '拳头',
  'fit': '适合；合身',
  'five': '五',
  'fix': '固定；修理',
  'fixed': '固定的；确定的',
  'fixture': '固定装置；常备设备',
  'fixation': '固定；着迷',
  'flag': '旗帜；标志',
  'flame': '火焰；光辉',
  'flank': '侧翼；侧面',
  'flap': '拍打；飘动',
  'flare': '火焰；闪耀',
  'flash': '闪光；瞬间',
  'flat': '平坦的；扁平的',
  'flatter': '奉承；使高兴',
  'flattery': '奉承；恭维',
  'flavor': '风味；味道',
  'flavour': '风味；味道',
  'flaw': '瑕疵；缺点',
  'flawless': '无瑕疵的；完美的',
  'flee': '逃跑；逃避',
  'fleet': '舰队；船队',
  'flesh': '肉体；肉',
  'flexible': '灵活的；柔韧的',
  'flexibility': '灵活性；柔韧性',
  'fling': '猛投；猛掷',
  'flip': '翻动；轻抛',
  'flirt': '调情；轻浮',
  'flirtation': '调情；轻浮的行为',
  'float': '浮动；飘浮',
  'hip': '时髦的；臀部',
  'hire': '雇佣；租用',
  'his': '他的',
  'history': '历史',
  'hit': '击中；流行',
  'historic': '历史性的',
  'historical': '历史的',
  'historian': '历史学家',
  'hitherto': '迄今',
  'hive': '蜂箱；蜂群',
  'hobby': '爱好',
  'hockey': '曲棍球',
  'hoist': '提升；举起',
  'hold': '持有；举办',
  'hole': '洞；孔',
  'holiday': '假日；假期',
  'hollow': '空心的；空洞的',
  'holy': '神圣的',
  'holiness': '神圣',
  'home': '家；家乡',
  'homeless': '无家可归的',
  'homely': '家常的；朴实的',
  'homeland': '祖国',
  'homework': '家庭作业',
  'homogeneous': '同质的；均匀的',
  'homosexual': '同性恋的',
  'homo': '人；人类',
  'honest': '诚实的',
  'honesty': '诚实',
  'honey': '蜂蜜',
  'honeymoon': '蜜月',
  'honor': '荣誉；尊敬',
  'honour': '荣誉；尊敬',
  'hook': '钩；钩住',
  'honorable': '光荣的；值得尊敬的',
  'honourable': '光荣的；值得尊敬的',
  'honorary': '荣誉的；名誉的',
  'hop': '跳跃；希望',
  'hope': '希望',
  'hopeful': '充满希望的',
  'hopeless': '无望的',
  'horizon': '地平线；视野',
  'horn': '角；喇叭',
  'horizontal': '水平的',
  'horror': '恐怖；惊骇',
  'horrible': '可怕的',
  'horrify': '使惊骇',
  'horse': '马',
  'horsepower': '马力',
  'hose': '软管；水龙带',
  'hospital': '医院',
  'hospitalize': '使住院',
  'hospitable': '好客的',
  'hospitality': '好客；款待',
  'host': '主人；节目主持人',
  'hostess': '女主人；节目女主持人',
  'hostage': '人质',
  'hostile': '敌对的',
  'hostility': '敌意',
  'hot': '热的；辣的',
  'hotdog': '热狗',
  'hotel': '酒店；旅馆',
  'hound': '猎犬；猎犬般的人',
  'hour': '小时',
  'hourly': '每小时的',
  'house': '房子；住宅',
  'housing': '住房；住宅区',
  'household': '家庭；家务',
  'housewife': '家庭主妇',
  'housework': '家务',
  'hover': '盘旋；犹豫',
  'how': '怎样；如何',
  'however': '然而；尽管如此',
  'howl': '嚎叫；怒吼',
  'huddle': '挤在一起；聚集',
  'hug': '拥抱',
  'huge': '巨大的',
  'hum': '嗡嗡声；低沉的声音',
  'human': '人的；人类的',
  'humanity': '人性；人类',
  'humane': '人道的；仁慈的',
  'humanism': '人文主义',
  'humanist': '人文主义者',
  'humanitarian': '人道主义者',
  'humble': '谦卑的；简陋的',
  'humbly': '谦卑地',
  'humid': '潮湿的',
  'humidity': '湿度',
  'humiliate': '羞辱；使丢脸',
  'humiliation': '羞辱',
  'humor': '幽默；幽默感',
  'humour': '幽默；幽默感',
  'humorous': '幽默的',
  'humourous': '幽默的',
  'hundred': '一百',
  'hunger': '饥饿',
  'hungry': '饿的',
  'hunt': '狩猎；搜寻',
  'hunting': '狩猎；打猎',
  'hunter': '猎人',
  'harsh': '严厉；粗糙',
  'harvest': '收获；收割',
  'haste': '匆忙；急忙',
  'hat': '帽子；头饰',
  'hasty': '急速的；仓促的',
  'hasten': '加快；催促',
  'hatch': '孵化；策划',
  'hate': '憎恨；讨厌',
  'hatred': '仇恨；憎恶',
  'hateful': '可恨的；令人讨厌的',
  'haul': '拖曳；运输',
  'haunt': '常去；困扰',
  'have': '有；持有',
  'haven': '避难所；乐土',
  'havoc': '破坏；混乱',
  'hawk': '鹰；兜售',
  'hay': '干草；牧草',
  'hazardous': '危险的；冒险的',
  'haze': '烟雾；模糊',
  'he': '他',
  'hazy': '模糊的；朦胧的',
  'head': '头；领导',
  'headache': '头痛；烦恼',
  'heading': '标题；方向',
  'headline': '大字标题；新闻头条',
  'headmaster': '校长；院长',
  'headmistress': '女校长',
  'headquarters': '总部；司令部',
  'heal': '治愈；愈合',
  'health': '健康；卫生',
  'heap': '堆；大量',
  'healthy': '健康的；有益的',
  'healthful': '有益健康的',
  'hear': '听见；听说',
  'hearing': '听力；听觉',
  'heart': '心；核心',
  'hearty': '热情的；丰盛的',
  'heartfelt': '衷心的；深情的',
  'heat': '热；热度',
  'heated': '热烈的；激动的',
  'heating': '加热；供暖',
  'heave': '举起；呕吐',
  'heaven': '天堂；天空',
  'heavy': '重的；严重的',
  'hectare': '公顷；英亩',
  'hectic': '忙碌的；紧张的',
  'hedge': '树篱；障碍',
  'heel': '脚跟；鞋跟',
  'height': '高度；身高',
  'heighten': '提高；升高',
  'heir': '继承人；后裔',
  'heiress': '女继承人',
  'helicopter': '直升机；旋翼机',
  'hell': '地狱；极坏的地方',
  'hello': '你好；喂',
  'helmet': '头盔；帽子',
  'help': '帮助；援助',
  'helpful': '有帮助的；有用的',
  'helplessly': '无助地；无法控制地',
  'hemisphere': '半球；半球体',
  'hen': '母鸡；雌鸟',
  'hence': '因此；从此',
  'henceforth': '从此以后；今后',
  'her': '她的',
  'herald': '先驱；使者',
  'herb': '药草；香草',
  'herd': '牧群；放牧',
  'here': '这里；在此',
  'herbal': '草药的；草本植物',
  'hereby': '特此；据此',
  'hero': '英雄；勇士',
  'heroine': '女英雄；女主角',
  'heroic': '英勇的；英雄的',
  'heroism': '英雄主义；英勇行为',
  'heroin': '海洛因；吗啡',
  'hers': '她的',
  'herself': '她自己；亲自',
  'hesitate': '犹豫；迟疑',
  'hi': '嗨；你好',
  'hesitation': '犹豫；迟疑',
  'hesitant': '犹豫的；迟疑的',
  'hibernate': '冬眠；休眠',
  'hibernation': '冬眠；休眠期',
  'hide': '隐藏；躲藏',
  'hiding': '隐藏；躲藏',
  'hierarchical': '等级的；层级的',
  'high': '高的；高级的',
  'highly': '高度地；非常',
  'highlight': '突出；强调',
  'high-tech': '高科技的',
  'highway': '公路；高速公路',
  'hijack': '劫持；夺取',
  'hike': '远足；提高',
  'hill': '小山；丘陵',
  'hilly': '多山的；丘陵的',
  'him': '他',
  'himself': '他自己；亲自',
  'hindrance': '阻碍；妨碍',
  'hinge': '铰链；关键',
  'hint': '暗示；线索',
  'injure': '伤害；损害',
  'ink': '墨水；油墨',
  'injury': '伤害；损害',
  'injurious': '有害的；伤害的',
  'inland': '内陆的；国内的',
  'inmate': '囚犯；同住者',
  'inn': '旅馆；客栈',
  'inner': '内部的；里面的',
  'innocent': '无辜的；天真的',
  'innocence': '无辜；天真',
  'innovate': '创新；改革',
  'innovation': '创新；革新',
  'innovative': '创新的；革新的',
  'innumerable': '无数的；数不清的',
  'input': '输入；投入',
  'inquire': '询问；调查',
  'inquiry': '询问；调查',
  'inquisitive': '好奇的；好问的',
  'insane': '精神错乱的；荒唐的',
  'insanity': '疯狂；精神错乱',
  'insect': '昆虫；虫子',
  'insert': '插入；嵌入',
  'insertion': '插入；嵌入',
  'inside': '里面；内部',
  'insider': '内部人士；知情者',
  'insightful': '有洞察力的；深刻的',
  'insist': '坚持；坚决要求',
  'insistent': '坚持的；执着的',
  'insistence': '坚持；坚决要求',
  'inspect': '检查；视察',
  'inspection': '检查；视察',
  'install': '安装；安置',
  'instal': '安装；安置',
  'installation': '安装；设施',
  'instant': '立即的；瞬间的',
  'instantaneous': '瞬间的；即刻的',
  'instinct': '本能；直觉',
  'instinctive': '本能的；直觉的',
  'institute': '建立；创立',
  'institution': '机构；制度',
  'institutional': '机构的；制度的',
  'instruct': '指导；命令',
  'instruction': '指导；命令',
  'instrument': '工具；仪器',
  'instrumental': '工具的；仪器的',
  'insulate': '绝缘；隔离',
  'insulation': '绝缘；隔离',
  'insulator': '绝缘体；隔离器',
  'insult': '侮辱；凌辱',
  'insure': '保险；保证',
  'intact': '完整的；未受损的',
  'intake': '吸入；引入',
  'intangible': '无形的；难以捉摸的',
  'integration': '整合；一体化',
  'intellect': '智力；智慧',
  'intellectual': '智力的；知识分子的',
  'intelligence': '智力；情报',
  'intelligent': '聪明的；有智力的',
  'intelligible': '可理解的；清晰的',
  'intend': '打算；意图',
  'intention': '意图；目的',
  'intent': '意图；专心',
  'intentional': '故意的；有意的',
  'intense': '强烈的；紧张的',
  'intensity': '强度；紧张',
  'intensive': '加强的；密集的',
  'interact': '互动；交往',
  'interaction': '互动；交往',
  'interactive': '交互的；相互作用的',
  'intercourse': '交流；性交',
  'interest': '兴趣；利益',
  'interesting': '有趣的；引起兴趣的',
  'interested': '感兴趣的；关心的',
  'interfere': '干涉；干预',
  'interference': '干涉；干预',
  'interim': '临时的；过渡的',
  'interior': '内部的；内地的',
  'intermediate': '中间的；中级的',
  'intermediary': '中间人；调解者',
  'intermittent': '间歇的；断断续续的',
  'internal': '内部的；国内的',
  'interpret': '解释；翻译',
  'interpretation': '解释；翻译',
  'interpreter': '翻译；口译员',
  'international': '国际的；外国的',
  'internet': '互联网；国际互联网',
  'interrogate': '审问；质问',
  'interrogation': '审问；质问',
  'interrupt': '打断；中断',
  'interruption': '打断；中断',
  'interval': '间隔；间歇',
  'intervention': '干预；介入',
  'interview': '面试；采访',
  'interviewer': '采访者；面试官',
  'interviewee': '被采访者；被面试者',
  'intimate': '亲密的；私人的',
  'intimacy': '亲密；密切',
  'intimidate': '恐吓；威胁',
  'intimidation': '恐吓；威胁',
  'into': '进入；到…里面',
  'impress': '给人留下深刻印象；使信服',
  'impression': '印象；感想',
  'impressive': '给人留下深刻印象的；感人的',
  'imprison': '监禁；关押',
  'imprisonment': '监禁；关押状态',
  'impromptu': '即兴的；未经准备的',
  'improvement': '改进；改善',
  'improve': '改善；提高',
  'impulse': '冲动；推动力',
  'impulsive': '冲动的；易冲动的',
  'in': '在…里面；进入',
  'inauguration': '就职典礼；开幕典礼',
  'inaugurate': '就职；启用',
  'inborn': '天生的；固有的',
  'incidental': '偶然的；非主要的',
  'incidentally': '顺便提一下；偶然地',
  'inch': '英寸',
  'incidence': '发生率；影响范围',
  'incident': '事件；小事',
  'inclined': '倾向；倾斜的',
  'inclination': '倾向；爱好',
  'include': '包括；包含',
  'inclusion': '包含；包括',
  'inclusive': '包括在内的；广泛的',
  'including': '包括；包含',
  'income': '收入；所得',
  'incorporation': '合并；公司成立',
  'increase': '增加；增长',
  'increasingly': '越来越多地；日益',
  'incredible': '难以置信的；惊人的',
  'incredibly': '难以置信地；惊人地',
  'incumbent': '在职的；有责任的',
  'incur': '招致；引起',
  'indebted': '感激的；负债的',
  'indeed': '确实；真正地',
  'indefinite': '不确定的；无期限的',
  'independent': '独立的；自主的',
  'independence': '独立；自主',
  'index': '索引；指数',
  'indicate': '表明；指示',
  'indication': '迹象；暗示',
  'indicative': '指示的；暗示的',
  'indicator': '指示器；标志',
  'indict': '控告；起诉',
  'indictment': '起诉书；控告',
  'indifferent': '冷漠的；不关心的',
  'indifference': '冷漠；不关心',
  'indignant': '愤怒的；愤慨的',
  'indignation': '愤怒；愤慨',
  'indispensable': '必不可少的；必需的',
  'individual': '个人的；个体的',
  'individualism': '个人主义；个性',
  'indoor': '室内的',
  'indoors': '在室内',
  'inducement': '诱因；动机',
  'indulgence': '纵容；沉溺',
  'indulgent': '纵容的；宽容的',
  'industry': '工业；行业',
  'industrial': '工业的；产业的',
  'industrialize': '工业化',
  'inertia': '惯性；惰性',
  'infant': '婴儿；幼儿',
  'infect': '感染；传染',
  'infection': '感染；传染病',
  'infectious': '传染性的；有感染力的',
  'inference': '推理；推断',
  'inferior': '下等的；劣等的',
  'inferiority': '下等；劣等',
  'infinite': '无限的；无穷的',
  'infinity': '无限；无穷大',
  'infinitive': '不定式',
  'inflate': '膨胀；充气',
  'inflation': '通货膨胀；膨胀',
  'inflict': '施加；使遭受',
  'infliction': '施加；伤害',
  'influence': '影响；作用',
  'influential': '有影响的；有权势的',
  'influenza': '流感',
  'flu': '流感',
  'inform': '通知；告诉',
  'information': '信息；消息',
  'informative': '提供信息的；有教育意义的',
  'infrastructure': '基础设施',
  'infringe': '侵犯；违反',
  'infringement': '侵犯；违反',
  'ingenious': '机灵的；有独创性的',
  'ingenuity': '独创性；机智',
  'ingredient': '成分；因素',
  'inhabit': '居住；栖息',
  'inhabitant': '居民；居住者',
  'inherit': '继承；遗传',
  'inheritance': '继承；遗产',
  'inhibition': '抑制；禁止',
  'initial': '最初的；开始的',
  'initially': '最初；开始时',
  'initiation': '开始；入门',
  'initiative': '主动性；倡议',
  'inject': '注射；注入',
  'injection': '注射；注入物',
  'hurdle': '障碍；跨栏',
  'hurl': '猛投；猛掷',
  'hurricane': '飓风；旋风',
  'hurry': '匆忙；急忙',
  'hurriedly': '匆忙地',
  'hurt': '伤害；受伤',
  'hurtful': '伤害人的；痛苦的',
  'husband': '丈夫；节约',
  'hut': '小屋；棚屋',
  'hybrid': '杂交种；混合物',
  'hydrogen': '氢',
  'hygiene': '卫生；卫生学',
  'hygienic': '卫生的；清洁的',
  'hyphen': '连字符',
  'hypocrisy': '虚伪；伪善',
  'hypocritical': '伪善的；做作的',
  'hypocrite': '伪善者；骗子',
  'hypothetical': '假设的；假定的',
  'hysterical': '歇斯底里的；荒唐的',
  'hysteria': '歇斯底里；狂热',
  'i': '我；一',
  'ice': '冰；冰块',
  'icy': '冰冷的；冰似的',
  'iceberg': '冰山；大问题',
  'icon': '图标；象征',
  'idea': '想法；观念',
  'ideal': '理想；完美的',
  'idealistic': '理想主义的；不切实际的',
  'idealism': '理想主义；唯心主义',
  'identify': '识别；确认',
  'identification': '识别；鉴定',
  'identity': '身份；同一性',
  'ideological': '意识形态的；思想上的',
  'idiom': '成语；惯用语',
  'idiomatic': '惯用的；成语的',
  'idiot': '白痴；傻瓜',
  'idiotic': '愚蠢的；白痴的',
  'idly': '懒散地；无聊地',
  'idle': '空闲的；懒散的',
  'idol': '偶像；神像',
  'if': '如果；是否',
  'ignite': '点燃；激发',
  'ignition': '点火；点燃',
  'ignorant': '无知的；愚昧的',
  'ignorance': '无知；愚昧',
  'ignore': '忽视；忽略',
  'ill': '生病的；不健康的',
  'illness': '疾病；病态',
  'illegal': '非法的；违法的',
  'illicit': '非法的；私下的',
  'illiterate': '文盲的；不识字的',
  'illiteracy': '文盲；无知',
  'illuminate': '照亮；阐明',
  'illumination': '照明；启发',
  'illusion': '错觉；幻想',
  'illusory': '错觉的；幻想的',
  'illustration': '插图；例证',
  'illustrative': '说明的；例证的',
  'image': '形象；图像',
  'imaging': '成像；图像化',
  'imagine': '想象；设想',
  'imagination': '想象力；想象',
  'imaginative': '富有想象力的；创新的',
  'imaginary': '想象的；虚构的',
  'imitate': '模仿；仿效',
  'imitation': '模仿；仿制品',
  'imitative': '模仿的；仿造的',
  'immediate': '立即的；直接的',
  'immediately': '立即；马上',
  'immense': '巨大的；庞大的',
  'immensely': '极大地；非常',
  'immensity': '巨大；无限',
  'immerse': '沉浸；使陷入',
  'immersion': '沉浸；浸入',
  'immigrate': '移民；移居',
  'immigration': '移民；移入',
  'immigrant': '移民；新来者',
  'immunity': '免疫力；豁免权',
  'immunize': '免疫；接种疫苗',
  'immunise': '免疫；接种疫苗',
  'immune': '免疫的；免除的',
  'impact': '影响；冲击',
  'impatience': '不耐烦；急躁',
  'impart': '传授；告知',
  'impatient': '不耐烦的；急躁的',
  'imperative': '必要的；命令的',
  'imperialism': '帝国主义；殖民主义',
  'imperialist': '帝国主义者；殖民主义者',
  'imperial': '帝国的；皇帝的',
  'impetus': '推动力；动力',
  'implementation': '实施；执行',
  'imply': '暗示；意味着',
  'import': '进口；重要性',
  'importation': '进口；输入',
  'important': '重要的；重大的',
  'importance': '重要性；价值',
  'imposition': '征收；强加',
  'imposing': '壮观的；威严的',
  'impossible': '不可能的；难以置信的',
  'impossibility': '不可能；无法实现',
  'lawsuit': '诉讼；案件',
  'lawyer': '律师；法律工作者',
  'lay': '放置；铺设',
  'layer': '层；涂层',
  'layman': '外行；门外汉',
  'layoff': '裁员；解雇',
  'layout': '布局；安排',
  'lazy': '懒惰；懒散',
  'laziness': '懒惰；懒散',
  'lead': '领导；引导',
  'leader': '领导者；领导人',
  'leadership': '领导；领导力',
  'leading': '领先的；主要的',
  'leaf': '叶子；叶片',
  'leaflet': '传单；小册子',
  'league': '联盟；同盟',
  'leak': '泄露；漏出',
  'lean': '倾斜；依靠',
  'leap': '跳跃；跃进',
  'learn': '学习；了解',
  'lease': '租赁；租约',
  'least': '最少；最小',
  'leather': '皮革；皮料',
  'leave': '离开；剩下',
  'lecture': '讲座；演讲',
  'left': '左；左边',
  'leftist': '左翼；左派',
  'leg': '腿；腿部',
  'legal': '合法的；法律的',
  'legalize': '使合法；合法化',
  'legalise': '使合法；合法化',
  'legend': '传说；传奇',
  'legendary': '传说的；传奇的',
  'legislate': '立法；制定法律',
  'legislation': '立法；法律',
  'legislative': '立法的；立法机关的',
  'legislator': '立法者；立法机关成员',
  'legitimacy': '合法性；正当性',
  'leisure': '闲暇；空闲',
  'leisurely': '悠闲的；从容的',
  'lemon': '柠檬；酸橙',
  'lemonade': '柠檬水；汽水',
  'lend': '借出；提供',
  'lenient': '宽容的；仁慈的',
  'leniency': '宽容；仁慈',
  'lens': '透镜；镜头',
  'lesbian': '女同性恋者',
  'less': '较少；更少',
  'lesson': '课程；教训',
  'lest': '以免；唯恐',
  'let': '让；允许',
  'letter': '信；字母',
  'level': '水平；等级',
  'lever': '杠杆；操纵杆',
  'leverage': '杠杆作用；影响力',
  'levy': '征税；征收',
  'liability': '责任；债务',
  'liberal': '自由的；宽容的',
  'liberate': '解放；释放',
  'liberation': '解放；释放',
  'liberty': '自由；解放',
  'librarian': '图书管理员',
  'library': '图书馆；藏书',
  'license': '执照；许可证',
  'licence': '执照；许可证',
  'lick': '舔；舔食',
  'lid': '盖子；顶盖',
  'lie': '躺；说谎',
  'lieutenant': '中尉；副官',
  'life': '生命；生活',
  'lift': '举起；电梯',
  'light': '光；轻的',
  'lightning': '闪电；雷',
  'like': '喜欢；像',
  'likewise': '同样地；照样',
  'lily': '百合；百合花',
  'limb': '肢体；树枝',
  'lime': '石灰；白垩',
  'limelight': '聚光灯；公众注意的中心',
  'limit': '限制；限度',
  'limitation': '限制；局限性',
  'limited': '有限的；限制的',
  'limp': '跛行；柔软的',
  'line': '线；行列',
  'linear': '线性的；直线的',
  'linen': '亚麻布；亚麻',
  'liner': '班轮；衬里',
  'linger': '逗留；拖延',
  'linguistic': '语言的；语言学上的',
  'linguistics': '语言学；语言研究',
  'link': '联系；纽带',
  'linkage': '联系；连接',
  'lion': '狮子',
  'lioness': '雌狮',
  'lip': '嘴唇',
  'lipstick': '口红；唇膏',
  'liquid': '液体；流体的',
  'liquor': '酒；饮料',
  'list': '名单；列表',
  'listen': '听；倾听',
  'magnify': '放大；增强',
  'maintenance': '维护；保养',
  'maid': '女仆；女佣',
  'maiden': '少女；处女',
  'mail': '邮件；邮政',
  'main': '主要；主要部分',
  'mainland': '大陆；本土',
  'mainstream': '主流；主潮',
  'majesty': '威严；庄严',
  'majestic': '雄伟；庄严',
  'major': '主要；重要',
  'majority': '多数；大多数',
  'make': '制造；做',
  'makeup': '化妆；化妆品',
  'male': '男性；雄性',
  'malice': '恶意；怨恨',
  'malicious': '恶意的；有害的',
  'malignant': '恶性的；有害的',
  'mall': '购物中心；商场',
  'man': '男人；人类',
  'manly': '男子气概的；勇敢的',
  'malpractice': '不当行为；失职',
  'mammal': '哺乳动物',
  'manage': '管理；经营',
  'management': '管理；经营',
  'manager': '经理；管理者',
  'managerial': '管理的；经理的',
  'mandatory': '强制性的；必须的',
  'maneuver': '机动；策略',
  'manoeuvre': '机动；策略',
  'manifestation': '表现；显现',
  'manipulation': '操纵；操作',
  'manipulative': '操纵的；控制的',
  'mankind': '人类',
  'manner': '方式；态度',
  'mansion': '大厦；宅邸',
  'manual': '手册；手工的',
  'manufacture': '制造；工业生产',
  'manufacturer': '制造商；生产者',
  'manuscript': '手稿；原稿',
  'many': '许多；众多',
  'map': '地图；图',
  'mar': '海；婚姻',
  'marathon': '马拉松；长跑',
  'marble': '大理石；弹珠',
  'march': '行军；前进',
  'margin': '边缘；余地',
  'marine': '海洋的；海产的',
  'maritime': '海上的；海运的',
  'mark': '标记；痕迹',
  'market': '市场；买卖',
  'marketing': '市场营销；营销',
  'marry': '结婚；结合',
  'marriage': '婚姻；结婚',
  'marital': '婚姻的；夫妻的',
  'marsh': '沼泽；湿地',
  'marshal': '元帅；指挥',
  'martyr': '烈士；殉道者',
  'martyrdom': '殉道；牺牲',
  'marvel': '奇迹；惊奇',
  'marvelous': '奇妙的；惊人的',
  'marvellous': '奇妙的；惊人的',
  'marxism': '马克思主义',
  'marxist': '马克思主义者',
  'masculine': '男性的；阳性的',
  'masculinity': '男子气概；阳刚',
  'mask': '面具；掩饰',
  'mass': '群众；大量',
  'massive': '大量的；大块的',
  'massacre': '大屠杀；残杀',
  'massage': '按摩；推拿',
  'master': '主人；大师',
  'mastery': '精通；掌握',
  'masterpiece': '杰作；名作',
  'mat': '垫子；席子',
  'match': '比赛；匹配',
  'mate': '配偶；伙伴',
  'material': '材料；物质',
  'materialism': '唯物主义',
  'materialist': '唯物主义者',
  'materialize': '实现；显现',
  'materialise': '实现；显现',
  'maternal': '母亲的；母性的',
  'maternity': '母性；产科',
  'math': '数学',
  'mathematics': '数学',
  'maths': '数学',
  'mathematical': '数学的；数学上的',
  'matter': '物质；问题',
  'mature': '成熟；成年',
  'maturity': '成熟；老练',
  'maximum': '最大；最大限度',
  'maximize': '最大化；增加',
  'maximise': '最大化；增加',
  'maximal': '最大的；最大限度的',
  'may': '可能；可以',
  'maybe': '也许；可能',
  'mayor': '市长',
  'me': '我',
  'meadow': '草地；牧场',
  'judgement': '判断；裁决',
  'judicial': '司法的；法庭的',
  'judiciary': '司法机构；法院系统',
  'juice': '果汁；液汁',
  'juicy': '多汁的；有趣的',
  'july': '七月',
  'jump': '跳跃；跳过',
  'junction': '交叉点；汇合处',
  'june': '六月',
  'jungle': '丛林；密林',
  'junior': '年少的；初级',
  'junk': '垃圾；废物',
  'jurisdiction': '司法权；管辖权',
  'jury': '陪审团；陪审员',
  'juror': '陪审员',
  'just': '公正的；仅仅',
  'justice': '正义；司法',
  'justification': '正当化；理由',
  'keen': '敏锐的；热切的',
  'keep': '保持；保留',
  'kettle': '水壶；壶',
  'key': '钥匙；关键',
  'keyboard': '键盘',
  'kick': '踢；踢球',
  'kid': '孩子；顽皮',
  'kidnap': '绑架',
  'kidney': '肾脏',
  'kill': '杀死；消灭',
  'kilogram': '千克',
  'kilogramme': '千克',
  'kilo': '千克',
  'kilometer': '千米',
  'kilometre': '千米',
  'kin': '亲戚；家族',
  'kind': '种类；善良的',
  'kindness': '善良；仁慈',
  'kindergarten': '幼儿园',
  'king': '国王；君主',
  'kingdom': '王国；领域',
  'kiss': '吻；亲吻',
  'kit': '工具包；套装',
  'kitchen': '厨房',
  'kite': '风筝',
  'knee': '膝盖',
  'kneel': '跪下',
  'knife': '刀；小刀',
  'knight': '骑士；爵士',
  'knit': '编织；针织',
  'knob': '旋钮；把手',
  'knock': '敲；击打',
  'knot': '结；纽带',
  'knotty': '复杂的；纠葛的',
  'know': '知道；了解',
  'knowledge': '知识；学问',
  'knowledgeable': '有知识的；博学的',
  'knowhow': '知识；技能',
  'label': '标签；标记',
  'labor': '劳动；劳力',
  'labour': '劳动；劳工',
  'laborious': '辛勤的；费力的',
  'laboratory': '实验室',
  'lad': '少年；小伙子',
  'lace': '花边；鞋带',
  'lack': '缺乏；缺少',
  'ladder': '梯子',
  'lady': '女士；夫人',
  'lag': '落后；滞后',
  'lake': '湖；湖泊',
  'lamb': '羔羊；小羊',
  'lame': '跛的；无力的',
  'lamp': '灯；灯笼',
  'land': '土地；国土',
  'landlord': '房东',
  'landlady': '女房东',
  'landmark': '地标；里程碑',
  'landscape': '风景；景色',
  'lane': '小巷；车道',
  'language': '语言；言语',
  'lap': '膝盖；圈',
  'laptop': '笔记本电脑',
  'large': '大的；大量的',
  'largely': '主要地；很大程度上',
  'laser': '激光',
  'lash': '鞭打；睫毛',
  'lass': '少女；姑娘',
  'last': '最后的；最近',
  'late': '晚的；迟到',
  'lately': '最近；不久前',
  'latitude': '纬度',
  'latter': '后者；较晚的',
  'laugh': '笑；笑声',
  'laughter': '笑声；笑',
  'launch': '发射；发动',
  'laundry': '洗衣店；洗衣服',
  'lavatory': '洗手间；厕所',
  'lavish': '浪费的；慷慨的',
  'law': '法律；法则',
  'lawful': '合法的；法定的',
  'lawn': '草坪；草地',
  'intricacy': '复杂；错综',
  'intricate': '复杂的；错综的',
  'intrigue': '阴谋；引起兴趣',
  'intrinsically': '本质上；固有地',
  'introduce': '介绍；引入',
  'introduction': '介绍；引入',
  'introductory': '介绍的；入门的',
  'intrude': '侵扰；打扰',
  'intrusion': '侵扰；闯入',
  'intruder': '入侵者；闯入者',
  'intuition': '直觉；直觉力',
  'intuitive': '直觉的；直观的',
  'invade': '入侵；侵犯',
  'invasion': '入侵；侵犯',
  'invader': '入侵者；侵犯者',
  'invasive': '侵入的；侵略的',
  'invalid': '无效的；病弱的',
  'invention': '发明；创造',
  'inventor': '发明者；创造者',
  'invaluable': '无价的；宝贵的',
  'invariably': '始终如一地；不变地',
  'invent': '发明；创造',
  'inventory': '存货；清单',
  'inversion': '颠倒；倒置',
  'invert': '颠倒；倒置',
  'invest': '投资；投入',
  'investment': '投资；投入',
  'investor': '投资者；投资人',
  'investigate': '调查；研究',
  'investigation': '调查；研究',
  'investigator': '调查者；研究者',
  'invisible': '看不见的；无形的',
  'invitation': '邀请；请柬',
  'invite': '邀请；请求',
  'inviting': '吸引人的；诱人的',
  'involve': '涉及；包含',
  'involvement': '涉及；卷入',
  'involved': '涉及的；复杂的',
  'inward': '向内的；内心的',
  'iron': '铁；铁器',
  'ironic': '讽刺的；反语的',
  'ironical': '讽刺的；反语的',
  'ironically': '讽刺地；讽刺性地',
  'irony': '讽刺；反语',
  'irrational': '不合理的；无理性的',
  'irrigation': '灌溉；冲洗',
  'irregular': '不规则的；不经常的',
  'irrespective': '不考虑的；不顾的',
  'irrigate': '灌溉；冲洗',
  'irritate': '激怒；刺激',
  'irritation': '激怒；刺激',
  'irritating': '激怒的；刺激的',
  'irritable': '易怒的；烦躁的',
  'island': '岛屿；岛',
  'isle': '岛屿；岛',
  'isolation': '隔离；孤立',
  'issue': '问题；发行',
  'it': '它；那个',
  'item': '项目；条款',
  'its': '它的；她们的；它们的',
  'itself': '它自己；本身',
  'ivory': '象牙；乳白色',
  'jack': '杰克；提升',
  'jacket': '夹克；外衣',
  'jail': '监狱；关押',
  'jam': '堵塞；果酱',
  'january': '一月',
  'jar': '罐子；震动',
  'jargon': '行话；术语',
  'jaw': '下巴；咬',
  'jazz': '爵士乐',
  'jealous': '嫉妒的；猜疑的',
  'jealousy': '嫉妒；猜疑',
  'jeans': '牛仔裤',
  'jeep': '吉普车',
  'jelly': '果冻；胶状物',
  'jeopardy': '危险；危害',
  'jeopardise': '危害；使处于危险',
  'jerk': '猛拉；突然移动',
  'jet': '喷气式飞机；喷射',
  'jetlag': '时差反应',
  'jewel': '宝石；珠宝',
  'jewelry': '珠宝；首饰',
  'jewellery': '珠宝；首饰',
  'job': '工作；职业',
  'jockey': '骑师；赛马师',
  'jog': '慢跑；轻推',
  'join': '加入；联合',
  'joint': '关节；联合',
  'joke': '玩笑；幽默',
  'jolly': '愉快的；欢乐的',
  'journal': '杂志；日志',
  'journalism': '新闻业；新闻学',
  'journalist': '记者；新闻工作者',
  'journey': '旅行；旅程',
  'joy': '欢乐；快乐',
  'joyous': '欢乐的；快乐的',
  'joyful': '欢乐的；快乐的',
  'judge': '法官；审判',
  'judgment': '判断；判决',
  'listener': '听众；收听者',
  'liter': '公升',
  'litre': '公升',
  'literal': '字面的；逐字的',
  'literally': '实际上；真正地',
  'literary': '文学的；文学上的',
  'literate': '有文化的；受过教育的',
  'literacy': '读写能力；文化水平',
  'literature': '文学；文献',
  'litter': '垃圾；废物',
  'little': '小的；少许的',
  'live': '活的；实况转播的',
  'livelihood': '生计；生活来源',
  'lively': '活泼的；生动的',
  'liver': '肝脏',
  'livestock': '牲畜；家畜',
  'living-room': '客厅',
  'load': '负荷；装载',
  'loaf': '一条面包',
  'loan': '贷款；借',
  'lobby': '大厅；游说',
  'lobbyist': '说客；游说者',
  'local': '当地的；地方的',
  'locate': '定位；位于',
  'locality': '地点；地区',
  'location': '位置；地点',
  'lock': '锁；锁定',
  'locker': '储物柜',
  'locomotive': '机车；火车头',
  'lodge': '小屋；寄宿',
  'lodging': '住宿；寄宿处',
  'lofty': '高耸的；崇高的',
  'log': '原木；记录',
  'logic': '逻辑；逻辑学',
  'logical': '逻辑的；合逻辑的',
  'logistics': '后勤；物流',
  'logo': '标志；标识',
  'logistic': '后勤的；物流的',
  'logistical': '后勤学的；物流学的',
  'lonely': '孤独的；荒凉的',
  'loneliness': '孤独；寂寞',
  'length': '长度；时间',
  'lengthy': '漫长的；冗长的',
  'long': '长的；长时间的',
  'longevity': '长寿；寿命',
  'longitude': '经度',
  'longitudinal': '经度的；纵向的',
  'look': '看；外表',
  'loom': '织布机；隐约出现',
  'loop': '环；循环',
  'loophole': '漏洞；空子',
  'loose': '松的；自由的',
  'loosen': '放松；解开',
  'loot': '掠夺；抢劫',
  'lord': '贵族；领主',
  'lorry': '卡车；货车',
  'lose': '丢失；输',
  'loss': '损失；亏损',
  'lot': '许多；一块地',
  'lotion': '乳液；药膏',
  'lottery': '彩票；抽签',
  'loud': '响亮的；大声的',
  'loudly': '大声地',
  'lounge': '休息室；闲逛',
  'love': '爱；爱好',
  'lover': '情人；爱好者',
  'lovely': '可爱的；美好的',
  'low': '低的；低声的',
  'lower': '降低；下级',
  'loyal': '忠诚的；忠实的',
  'loyalty': '忠诚；忠实',
  'lubricate': '润滑；涂油',
  'lubrication': '润滑；涂油',
  'luck': '运气；幸运',
  'lucky': '幸运的；侥幸的',
  'luggage': '行李；包裹',
  'luminous': '发光的；明亮的',
  'lump': '块；团',
  'luncheon': '午餐',
  'lunar': '月亮的；阴历的',
  'lunch': '午餐',
  'lung': '肺',
  'lure': '诱惑；引诱',
  'luxurious': '奢侈的；豪华的',
  'luxury': '奢侈；豪华',
  'lyric': '歌词；抒情的',
  'lyrical': '抒情的；诗意的',
  'machine': '机器；机械',
  'machinery': '机器；机械',
  'mad': '疯狂的；着迷的',
  'madden': '使发狂；使着迷',
  'madam': '女士；夫人',
  'magazine': '杂志；期刊',
  'magic': '魔法；魔术',
  'magical': '魔法的；神奇的',
  'magistrate': '地方官；治安法官',
  'magnet': '磁铁；有吸引力的人或物',
  'magnetic': '磁性的；有吸引力的',
  'magnificent': '壮丽的；宏伟的',
  'magnificence': '壮丽；宏伟',
  'mileage': '里程；行驶里程',
  'milestone': '里程碑；重要事件',
  'militant': '好战的；激进的',
  'military': '军事的；军队的',
  'militancy': '好战性；激进性',
  'militia': '民兵；地方武装',
  'milk': '牛奶；哺乳',
  'milky': '乳白色的；牛奶似的',
  'mill': '工厂；磨坊',
  'millimeter': '毫米；公丝',
  'millimetre': '毫米；公丝',
  'million': '百万；许多',
  'mind': '心智；想法',
  'millionaire': '百万富翁',
  'mindset': '心态；思维方式',
  'mine': '矿山；地雷',
  'mineral': '矿物；矿石',
  'mining': '采矿；矿业',
  'minimal': '最小的；最小限度的',
  'minimize': '最小化；使减少',
  'minimise': '最小化；使减少',
  'mingle': '混合；交往',
  'miniature': '微型；缩影',
  'minimum': '最小值；最低限度',
  'minister': '部长；大臣',
  'ministry': '部；部门',
  'ministerial': '部长的；部门的',
  'minor': '较小的；次要的',
  'minority': '少数；少数民族',
  'mint': '薄荷；造币厂',
  'minus': '减号；负数',
  'minute': '分钟；细微的',
  'miracle': '奇迹；令人惊异的事',
  'miraculous': '奇迹般的；惊人的',
  'mirror': '镜子；反映',
  'misery': '痛苦；悲惨',
  'miserable': '痛苦的；悲惨的',
  'misfortune': '不幸；灾祸',
  'mislead': '误导；使误入歧途',
  'misleading': '误导的；使人误解的',
  'miss': '错过；思念',
  'missile': '导弹；发射物',
  'missing': '失踪的；缺少的',
  'mission': '使命；任务',
  'missionary': '传教士；使者',
  'mist': '雾；薄雾',
  'misty': '雾蒙蒙的；模糊的',
  'mistake': '错误；误会',
  'mistaken': '错误的；误解的',
  'mister': '先生；先生们',
  'mistress': '夫人；女主人',
  'misunderstand': '误解；误会',
  'misunderstanding': '误解；误会',
  'mix': '混合；混淆',
  'mixture': '混合物；混合',
  'mixer': '混合器；搅拌器',
  'moan': '呻吟；抱怨',
  'mobile': '移动的；流动的',
  'mobilise': '动员；调动',
  'mock': '嘲笑；模拟',
  'mode': '模式；方式',
  'model': '模型；模范',
  'moderate': '适度的；温和的',
  'moderation': '适度；节制',
  'moderator': '调解者；主持人',
  'modern': '现代的；新式的',
  'modernize': '现代化；使现代化',
  'modernise': '现代化；使现代化',
  'modernization': '现代化；现代化过程',
  'modernisation': '现代化；现代化过程',
  'modest': '谦虚的；适度的',
  'modesty': '谦虚；端庄',
  'modify': '修改；更改',
  'modification': '修改；变更',
  'modifier': '修饰语；修饰者',
  'moist': '潮湿的；湿润的',
  'moisture': '湿度；水分',
  'mold': '模具；发霉',
  'mould': '模具；发霉',
  'moldy': '发霉的；陈旧的',
  'mouldy': '发霉的；陈旧的',
  'molecule': '分子；微粒',
  'molecular': '分子的；分子学的',
  'mom': '妈妈',
  'mommy': '妈妈',
  'moment': '时刻；瞬间',
  'momentary': '瞬间的；短暂的',
  'momentarily': '暂时地；一会儿',
  'momentous': '重大的；重要的',
  'monarchy': '君主制；君主国',
  'monarch': '君主；国王',
  'monday': '星期一',
  'monetary': '货币的；金融的',
  'money': '钱；货币',
  'monitor': '监控；监视器',
  'monkey': '猴子',
  'monopolize': '垄断；独占',
  'monopolise': '垄断；独占',
  'monotonous': '单调的；无变化的',
  'monotony': '单调；无变化',
  'monster': '怪物；妖怪',
  'monstrous': '怪物般的；可怕的',
  'month': '月；月份',
  'monthly': '每月的；每月一次的',
  'monument': '纪念碑；纪念馆',
  'monumental': '纪念碑般的；重大的',
  'mood': '心情；情绪',
  'moody': '情绪化的；多变的',
  'moon': '月亮',
  'mop': '拖把；擦拭',
  'moral': '道德；品行',
  'morale': '士气；精神',
  'more': '更多；更加',
  'moreover': '而且；此外',
  'morning': '早晨；早上',
  'mortal': '凡人；必死的',
  'mortality': '死亡率；必死性',
  'mortgage': '抵押；按揭',
  'mosquito': '蚊子',
  'most': '大多数；最多',
  'mostly': '主要地；大部分',
  'motel': '汽车旅馆',
  'mother': '母亲；妈妈',
  'motherly': '慈母般的；母性的',
  'motion': '动作；移动',
  'motivate': '激励；激发',
  'motivation': '动机；动力',
  'motive': '动机；原因',
  'motor': '发动机；马达',
  'motorway': '高速公路',
  'mount': '登山；安装',
  'mountain': '山；山脉',
  'mounting': '上升的；增加的',
  'mountainous': '多山的；崎岖的',
  'mourn': '哀悼；悲伤',
  'mourning': '哀悼；丧服',
  'mouse': '老鼠',
  'mouth': '嘴；口',
  'mouthful': '一口；满口',
  'move': '移动；搬家',
  'movie': '电影；影片',
  'movement': '运动；活动',
  'mow': '割草；修剪',
  'much': '许多；大量',
  'mud': '泥；泥浆',
  'mug': '大杯；啤酒杯',
  'mule': '骡子',
  'multilateral': '多边的；多角的',
  'multiple': '多重；多样的',
  'multiply': '乘；增加',
  'multiplication': '乘法；增加',
  'multitude': '众多；大量',
  'municipal': '市的；市政的',
  'municipality': '市；自治市',
  'murder': '谋杀；凶杀',
  'murderous': '凶杀的；残暴的',
  'murmur': '低语；咕哝',
  'muscle': '肌肉；肌群',
  'muscular': '肌肉发达的；强健的',
  'museum': '博物馆；展览馆',
  'mushroom': '蘑菇；菌类',
  'music': '音乐；乐曲',
  'musical': '音乐的；悦耳的',
  'musician': '音乐家；乐师',
  'must': '必须；一定',
  'mute': '哑的；无声的',
  'mutter': '咕哝；低语',
  'mutual': '相互的；共有的',
  'my': '我的',
  'myself': '我自己',
  'mystery': '神秘；谜团',
  'mysterious': '神秘的；难以理解的',
  'myth': '神话；传说',
  'mythical': '神话般的；虚构的',
  'mythology': '神话学；神话体系',
  'nail': '指甲；钉子',
  'naive': '天真的；无知的',
  'naivety': '天真；幼稚',
  'naked': '裸体的；无遮蔽的',
  'name': '名字；名称',
  'namely': '即；也就是',
  'nap': '小睡；打盹',
  'napkin': '餐巾；纸巾',
  'narrate': '叙述；讲述',
  'narration': '叙述；讲述',
  'narrative': '叙述；故事',
  'narrator': '叙述者；讲述者',
  'narrow': '狭窄的；狭隘的',
  'narrowly': '狭窄地；严格地',
  'nasty': '令人讨厌的；污秽的',
  'nation': '国家；民族',
  'nationwide': '全国性的；全国范围的',
  'native': '本地的；土著的',
  'nature': '自然；性质',
  'naughty': '顽皮的；淘气的',
  'navigation': '导航；航行',
  'navy': '海军',
  'naval': '海军的；船舶的',
  'near': '近的；接近的',
  'nearby': '附近的；近处的',
  'neat': '整洁；干净',
  'necessary': '必要的；必需的',
  'necessarily': '必然地；必定地',
  'necessitate': '使成为必要；需要',
  'necessity': '必要性；需要',
  'neck': '脖子；颈',
  'necklace': '项链',
  'need': '需要；必需',
  'needy': '贫穷的；需要的',
  'needle': '针',
  'negate': '否定；取消',
  'negation': '否定；否认',
  'negative': '负面的；消极的',
  'neglect': '忽视；疏忽',
  'neglectful': '疏忽的；粗心的',
  'negligent': '疏忽的；粗心的',
  'negligence': '疏忽；疏漏',
  'negligible': '微不足道的；可以忽略的',
  'negotiate': '谈判；协商',
  'negotiation': '谈判；协商',
  'negotiable': '可协商的；可转让的',
  'neighbor': '邻居',
  'neighbour': '邻居',
  'neighborhood': '邻里；地区',
  'neighbourhood': '邻里；地区',
  'neither': '两者都不',
  'nephew': '侄子；甥',
  'nerve': '神经；勇气',
  'nervous': '紧张的；不安的',
  'nest': '巢；窝',
  'net': '网；网络',
  'network': '网络；网状物',
  'networking': '网络；社交',
  'neutrality': '中立；平衡',
  'neutralize': '中和；使中立',
  'neutralise': '中和；使中立',
  'never': '从不；永不',
  'nevertheless': '尽管如此；然而',
  'new': '新的',
  'news': '新闻；消息',
  'newspaper': '报纸',
  'next': '下一个；接着',
  'nice': '好的；美好的',
  'nicety': '精致；优雅',
  'nickel': '镍；五分镍币',
  'nickname': '昵称；绰号',
  'niece': '侄女；甥女',
  'night': '夜晚；夜',
  'nightly': '晚上的；夜间的',
  'nightmare': '噩梦；可怕的事情',
  'nil': '无；零',
  'nine': '九',
  'nineteen': '十九',
  'ninety': '九十',
  'ninth': '第九',
  'nitrogen': '氮',
  'no': '不；没有',
  'noble': '贵族的；高尚的',
  'nobility': '贵族；高贵',
  'nobody': '没有人',
  'nod': '点头；点头表示',
  'noise': '噪音；响声',
  'noisy': '嘈杂的；喧闹的',
  'nominal': '名义上的；微不足道的',
  'nominate': '提名；任命',
  'nomination': '提名；任命',
  'nominee': '被提名者；候选人',
  'none': '没有任何东西或人',
  'nonetheless': '尽管如此；然而',
  'nonsense': '胡说；废话',
  'noodle': '面条；面条状物',
  'noon': '中午',
  'nor': '也不',
  'norm': '规范；标准',
  'normal': '正常的；正规的',
  'normally': '正常地；通常地',
  'normalize': '使正常化；标准化',
  'normalise': '使正常化；标准化',
  'normalization': '正常化；标准化',
  'normalisation': '正常化；标准化',
  'north': '北方；北部',
  'northeast': '东北；东北部',
  'northwest': '西北；西北部',
  'northern': '北方的；北部的',
  'northeastern': '东北的；东北部的',
  'northwestern': '西北的；西北部的',
  'nose': '鼻子',
  'nosy': '好奇的；爱管闲事的',
  'not': '不；不是',
  'note': '笔记；注释',
  'notebook': '笔记本',
  'noteworthy': '值得注意的；显著的',
  'nothing': '没有什么；无',
  'notice': '注意；通知',
  'noticeable': '显著的；显而易见的',
  'notify': '通知；告知',
  'notification': '通知；通告',
  'notional': '观念上的；名义上的',
  'notorious': '臭名昭著的；声名狼藉的',
  'notoriety': '臭名昭著；声名狼藉',
  'meal': '餐食；一餐',
  'mean': '意味着；平均',
  'meaning': '意义；含义',
  'meaningful': '有意义的',
  'means': '方式；手段',
  'meantime': '同时；其间',
  'meanwhile': '与此同时',
  'measure': '度量；措施',
  'measurement': '测量；量度',
  'measurable': '可测量的',
  'meat': '肉；肉类',
  'meaty': '多肉的；丰盛的',
  'mechanic': '机械师；技师',
  'mechanical': '机械的；机械般的',
  'mechanics': '力学；机械学',
  'mechanism': '机制；机理',
  'mechanize': '机械化',
  'mechanise': '机械化',
  'mechanization': '机械化',
  'mechanisation': '机械化',
  'medal': '奖牌；勋章',
  'mediation': '调解；斡旋',
  'mediator': '调解人；斡旋者',
  'medical': '医学的；医疗的',
  'medicare': '医疗保险',
  'medication': '药物；药物治疗',
  'medicine': '药物；医学',
  'medicinal': '药用的；药性的',
  'medieval': '中世纪的；古老的',
  'medium': '媒体；媒介',
  'media': '媒体；媒介',
  'meet': '遇见；满足',
  'meeting': '会议；集会',
  'melody': '旋律；曲调',
  'melodious': '悦耳的；和谐的',
  'melon': '瓜；甜瓜',
  'melt': '融化；溶解',
  'member': '成员；会员',
  'membership': '会员资格；成员身份',
  'memorandum': '备忘录；记录',
  'memo': '备忘录；便条',
  'memorial': '纪念碑；纪念物',
  'memory': '记忆；记忆力',
  'memorize': '记住；记忆',
  'memorise': '记住；记忆',
  'menace': '威胁；恐吓',
  'mend': '修补；改正',
  'mental': '心理的；精神的',
  'mentality': '心态；心理状态',
  'mention': '提及；提到',
  'mentor': '导师；指导者',
  'menu': '菜单；目录',
  'merchandise': '商品；货物',
  'merchant': '商人；商家',
  'mercury': '水银；汞',
  'mercy': '仁慈；慈悲',
  'merciful': '仁慈的；慈悲的',
  'mere': '仅仅；只不过',
  'merely': '仅仅；只不过',
  'merge': '合并；融合',
  'merger': '合并；兼并',
  'meritorious': '有功绩的；值得赞扬的',
  'merry': '快乐的；愉快的',
  'merriment': '欢乐；快乐',
  'mess': '混乱；杂乱',
  'messy': '凌乱的；杂乱的',
  'message': '消息；信息',
  'messenger': '信使；使者',
  'metabolism': '新陈代谢；代谢',
  'metabolic': '代谢的；新陈代的',
  'metal': '金属；金属制品',
  'metallic': '金属的；像金属的',
  'metaphor': '隐喻；比喻',
  'metaphorical': '隐喻的；比喻的',
  'meter': '计量器；计费器',
  'metre': '米；公尺',
  'metric': '公制的；米制的',
  'method': '方法；办法',
  'methodical': '有条理的；方法的',
  'methodology': '方法论；方法学',
  'meticulous': '细致的；严谨的',
  'metro': '地铁；地铁系统',
  'metropolitan': '大都市的；大城市的',
  'microphone': '麦克风；话筒',
  'microscope': '显微镜',
  'microscopic': '微观的；显微镜下的',
  'microwave': '微波；微波炉',
  'microwavable': '微波炉可加热的',
  'midday': '正午；中午',
  'middle': '中间；中央',
  'middle-class': '中产阶级',
  'midnight': '午夜；半夜',
  'midst': '中间；当中',
  'midwife': '助产士',
  'might': '力量；可能',
  'mighty': '强大的；有力的',
  'mild': '温和的；温柔的',
  'migration': '迁移；迁徙',
  'migrant': '移民；移居者',
  'mile': '英里；哩',
  'notwithstanding': '尽管如此；不顾',
  'noun': '名词',
  'nourishment': '滋养；营养',
  'novel': '小说；新颖',
  'novelist': '小说家',
  'novelty': '新奇；新颖事物',
  'november': '十一月',
  'now': '现在',
  'nowadays': '如今；现在',
  'nowhere': '无处；哪里都不',
  'nuclear': '核的；核心的',
  'nude': '裸体的；无装饰的',
  'nudity': '裸露；裸体',
  'nuisance': '麻烦；骚扰',
  'numb': '麻木的；失去感觉的',
  'number': '数字；数目',
  'numerical': '数字的；数值的',
  'numerous': '许多的；众多的',
  'nurse': '护士；护理',
  'nursery': '托儿所；苗圃',
  'nurture': '养育；培养',
  'nut': '坚果；螺母',
  'nutrition': '营养；滋养',
  'nutrient': '营养物；滋养品',
  'oak': '橡树',
  'oar': '桨；橹',
  'oath': '誓言；宣誓',
  'obese': '肥胖的',
  'obesity': '肥胖；肥胖症',
  'obey': '服从；遵守',
  'object': '物体；目标',
  'obedient': '服从的；顺从的',
  'obedience': '服从；顺从',
  'objection': '反对；异议',
  'oblige': '迫使；使感激',
  'obliged': '感激的；有义务的',
  'obligatory': '义务的；必须的',
  'obscene': '淫秽的；下流的',
  'obscenity': '淫秽；下流',
  'obscurity': '模糊；隐晦',
  'observatory': '天文台；观察站',
  'observation': '观察；监视',
  'observer': '观察者；监视者',
  'observant': '警觉的；注意的',
  'observe': '观察；遵守',
  'obsess': '困扰；使着迷',
  'obsession': '着迷；困扰',
  'obsessive': '强迫性的；着迷的',
  'obstruct': '阻塞；妨碍',
  'obstruction': '阻塞；障碍',
  'obtain': '获得；得到',
  'obtainment': '获得；得到',
  'obvious': '明显的；显而易见的',
  'obviously': '明显地；显而易见地',
  'occasion': '场合；时机',
  'occasional': '偶尔的；临时的',
  'occasionally': '偶尔；间或',
  'occupation': '职业；占有',
  'occupational': '职业的；占领的',
  'occupancy': '占用；占有',
  'occupy': '占据；占用',
  'occur': '发生；出现',
  'occurrence': '发生；事件',
  'ocean': '海洋',
  'oceanic': '海洋的；海似的',
  'o\'clock': '点钟',
  'october': '十月',
  'odd': '奇怪的；单数的',
  'oddity': '奇怪；古怪',
  'odds': '机会；可能性',
  'odor': '气味；臭味',
  'odour': '气味；臭味',
  'odorous': '有气味的；臭的',
  'of': '的；关于',
  'off': '离开；脱落',
  'offend': '冒犯；伤害',
  'offender': '犯罪者；冒犯者',
  'offer': '提供；提议',
  'offering': '提供；祭品',
  'office': '办公室；职务',
  'officer': '官员；军官',
  'official': '官方的；官员',
  'offspring': '后代；子女',
  'often': '经常；常常',
  'oftentimes': '经常；屡次',
  'oil': '油；石油',
  'oily': '油的；油滑的',
  'okay': '好的；行',
  'old': '旧的；老年的',
  'old-fashioned': '过时的；老式的',
  'olive': '橄榄；橄榄树',
  'olympic': '奥运的；奥林匹克的',
  'omit': '省略；遗漏',
  'olympics': '奥运会',
  'olympiad': '奥林匹克运动会',
  'on': '在…上；关于',
  'omission': '省略；遗漏',
  'once': '一次；曾经',
  'one': '一个；一人',
  'oneself': '自己；本身',
  'persistent': '持久；坚持',
  'persistence': '坚持；持久性',
  'person': '人；个人',
  'personal': '个人的；私人的',
  'personally': '亲自；个别地',
  'personality': '人格；个性',
  'personnel': '人员；人事',
  'persuade': '说服；劝说',
  'persuasion': '说服；劝说',
  'persuasive': '有说服力的；劝诱的',
  'pessimism': '悲观主义；悲观情绪',
  'pessimistic': '悲观的；悲观主义的',
  'pessimist': '悲观主义者',
  'pest': '害虫；麻烦',
  'pesticide': '杀虫剂',
  'pet': '宠物；爱好',
  'petition': '请愿；请愿书',
  'petitioner': '请愿者',
  'petrochemical': '石油化工',
  'petroleum': '石油',
  'petty': '琐碎的；小气的',
  'pharmacy': '药店；药剂学',
  'pharmaceutical': '药品的；制药的',
  'phase': '阶段；方面',
  'philosophy': '哲学；哲理',
  'philosophical': '哲学的；哲理的',
  'philosopher': '哲学家',
  'photo': '照片；摄影',
  'photograph': '照片；摄影',
  'photographic': '摄影的；照片的',
  'photographer': '摄影师',
  'photography': '摄影术；摄影',
  'phrase': '短语；词组',
  'phrasal': '短语构成的；词组的',
  'physical': '物理的；身体的',
  'physicist': '物理学家',
  'physician': '医生',
  'physics': '物理学',
  'physiological': '生理的；生理学的',
  'pianist': '钢琴家',
  'piano': '钢琴',
  'pick': '挑选；采摘',
  'picky': '挑剔的；爱挑剔的',
  'picnic': '野餐',
  'picturesque': '如画的；风景如画的',
  'picture': '图画；照片',
  'pie': '派；馅饼',
  'pilgrimage': '朝圣；朝圣之旅',
  'piece': '片；块',
  'pierce': '刺穿；穿透',
  'pig': '猪',
  'pigeon': '鸽子',
  'pile': '堆；堆积',
  'pilgrim': '朝圣者',
  'pill': '药丸；丸',
  'piracy': '海盗行为；剽窃',
  'pillar': '柱子；支柱',
  'pillow': '枕头',
  'pilot': '飞行员；领航员',
  'pin': '别针；销子',
  'pinch': '捏；夹',
  'pine': '松树；渴望',
  'pink': '粉红色；桃花心木',
  'pint': '品脱',
  'pioneer': '先驱；开拓者',
  'pipe': '管子；烟斗',
  'pirate': '海盗；盗版',
  'pistol': '手枪',
  'pit': '坑；煤矿',
  'placement': '安置；位置',
  'pitch': '投掷；沥青',
  'pity': '同情；遗憾',
  'pizza': '比萨饼',
  'place': '地方；地点',
  'plague': '瘟疫；困扰',
  'planning': '计划；规划',
  'planner': '规划者；计划者',
  'plain': '平原；简单',
  'plaintiff': '原告',
  'plan': '计划；平面图',
  'plane': '飞机；平面',
  'planetary': '行星的；宇宙的',
  'planet': '行星',
  'plant': '植物；工厂',
  'plantation': '种植园',
  'plastic': '塑料；可塑的',
  'plate': '盘子；平板',
  'plateau': '高原',
  'platform': '平台；站台',
  'play': '玩耍；戏剧',
  'player': '玩家；演员',
  'playground': '操场；游乐场',
  'plaza': '广场',
  'plea': '请求；恳求',
  'plead': '恳求；辩护',
  'please': '请；使高兴',
  'pleasure': '快乐；乐趣',
  'pleasant': '令人愉快的；舒适的',
  'pleasing': '令人愉快的；讨人喜欢的',
  'pledge': '誓言；保证',
  'plenty': '充足；丰富',
  'plentiful': '丰富的；大量的',
  'plight': '困境；苦境',
  'plot': '情节；阴谋',
  'plough': '犁；耕',
  'plow': '犁；耕',
  'plug': '塞子；插座',
  'plumber': '水管工',
  'plumbing': '管道；水暖',
  'plunge': '投入；陷入',
  'plural': '复数',
  'plus': '加；加上',
  'pocket': '口袋；钱',
  'podcast': '播客',
  'poem': '诗',
  'poetry': '诗歌',
  'poet': '诗人',
  'poetic': '诗意的',
  'point': '点；要点',
  'pointless': '无意义的',
  'poise': '平衡；沉着',
  'poised': '平衡的；沉着的',
  'poison': '毒药；毒害',
  'poisonous': '有毒的',
  'poke': '戳；捅',
  'pole': '柱；杆',
  'polar': '极地的；两极的',
  'police': '警察',
  'policeman': '警察',
  'policy': '政策；方针',
  'polish': '抛光；擦亮',
  'polite': '礼貌的',
  'politeness': '礼貌',
  'politics': '政治',
  'political': '政治的',
  'politician': '政治家',
  'poll': '投票；民意调查',
  'pollster': '民意调查员',
  'pollute': '污染',
  'pollution': '污染',
  'pollutant': '污染物',
  'polytechnic': '理工学院',
  'pond': '池塘',
  'ponder': '沉思；思考',
  'pool': '池；资金',
  'poor': '贫穷的；可怜的',
  'poverty': '贫穷',
  'pop': '流行；人口',
  'popular': '流行的；受欢迎的',
  'popularity': '流行；受欢迎',
  'population': '人口',
  'populous': '人口众多的',
  'populate': '居住；居住于',
  'porcelain': '瓷器',
  'porch': '门廊',
  'pork': '猪肉',
  'porridge': '粥',
  'port': '港口；口岸',
  'portable': '便携的',
  'porter': '搬运工',
  'portfolio': '投资组合',
  'portion': '部分；份额',
  'portrayal': '描绘；描述',
  'portrait': '肖像；画像',
  'posture': '姿态；姿势',
  'position': '位置；职位',
  'positive': '积极的；正面的',
  'possess': '拥有；占有',
  'possession': '拥有；财产',
  'possessive': '占有的；所有格的',
  'possible': '可能的',
  'possibility': '可能性',
  'possibly': '可能地',
  'post': '邮件；帖子',
  'postage': '邮资',
  'postman': '邮递员',
  'postcard': '明信片',
  'poster': '海报',
  'postpone': '推迟；延期',
  'postponement': '推迟；延期',
  'pot': '锅；壶',
  'potato': '土豆',
  'potent': '强有力的；有效的',
  'potential': '潜在的；可能的',
  'potentiality': '潜力',
  'pottery': '陶器',
  'poultry': '家禽',
  'pound': '磅；重击',
  'pour': '倒；灌',
  'powder': '粉末；药粉',
  'power': '力量；权力',
  'powerful': '强大的；有力的',
  'practise': '练习；实践',
  'practice': '实践；惯例',
  'practicable': '可行的',
  'practical': '实际的；实用的',
  'practicality': '实用性',
  'practitioner': '从业者',
  'praise': '赞扬；赞美',
  'pray': '祈祷；祈求',
  'passport': '护照；旅行证',
  'password': '密码；口令',
  'past': '过去；往事',
  'pasta': '意大利面；面食',
  'paste': '糊状物；粘贴物',
  'pastime': '消遣；娱乐',
  'pastry': '糕点；面包',
  'pasture': '牧场；草地',
  'pat': '轻拍；抚摸',
  'patch': '补丁；小块地',
  'patent': '专利；执照',
  'path': '道路；途径',
  'pathetic': '可怜的；悲哀的',
  'patient': '耐心的；病人',
  'patience': '耐心；忍耐',
  'patriot': '爱国者；爱国心',
  'patriotic': '爱国的；爱国主义的',
  'patriotism': '爱国主义；爱国情操',
  'patrol': '巡逻；巡查',
  'patron': '赞助人；顾客',
  'pattern': '图案；模式',
  'patronize': '光顾；赞助',
  'patronise': '光顾；赞助',
  'patronage': '赞助；庇护',
  'pause': '暂停；停顿',
  'pave': '铺路；准备',
  'pavement': '人行道；铺路',
  'paw': '爪子；抓',
  'pay': '支付；报酬',
  'payment': '支付；款项',
  'payroll': '工资单；员工名单',
  'pea': '豌豆；豆类',
  'peace': '和平；平静',
  'peaceful': '和平的；平静的',
  'peach': '桃子；桃花',
  'peak': '山峰；顶峰',
  'peanut': '花生；果仁',
  'pear': '梨；梨树',
  'pearl': '珍珠；珍珠状物',
  'peasant': '农民；乡下人',
  'peck': '啄食；轻击',
  'peculiarity': '特性；怪癖',
  'pedal': '踏板；踩踏',
  'peddle': '叫卖；兜售',
  'pedestrian': '行人；步行者',
  'peel': '剥皮；剥落',
  'peep': '偷看；窥视',
  'peer': '同等的人；仔细看',
  'peg': '钉子；桩',
  'pen': '钢笔；监狱',
  'penalty': '惩罚；罚金',
  'penalize': '惩罚；处罚',
  'penalise': '惩罚；处罚',
  'pencil': '铅笔；粉笔',
  'pending': '悬而未决；待定',
  'pendulum': '钟摆；摇摆',
  'penetrate': '穿透；洞察',
  'penetration': '穿透；渗透',
  'penguin': '企鹅；企鹅类',
  'peninsula': '半岛；半岛状地',
  'penny': '便士；小钱',
  'pension': '养老金；退休金',
  'pensioner': '退休者；养老金领取者',
  'people': '人们；民族',
  'pepper': '胡椒；辣椒',
  'per': '每；经过',
  'perception': '感知；认识',
  'perceptive': '有感知的；有洞察力的',
  'percent': '百分比；百分数',
  'percentage': '百分比；比例',
  'perch': '栖息；垂钓',
  'perfect': '完美的；完成',
  'perfection': '完美；完善',
  'perform': '执行；表演',
  'performance': '表演；表现',
  'performer': '表演者；执行者',
  'perfume': '香水；香气',
  'perhaps': '也许；可能',
  'peril': '危险；风险',
  'perilous': '危险的；险恶的',
  'period': '时期；周期',
  'periodic': '周期的；定期的',
  'periodical': '期刊；周期的',
  'perish': '死亡；腐烂',
  'permanent': '永久的；不变的',
  'permanence': '永久；持久',
  'permeate': '渗透；弥漫',
  'permeation': '渗透；弥漫',
  'permit': '允许；执照',
  'permission': '允许；许可',
  'permissible': '可允许的；许可的',
  'permissive': '宽容的；许可的',
  'perpetual': '永久的；不断的',
  'perpetuate': '使永久；延续',
  'perplex': '使困惑；使复杂',
  'perplexity': '困惑；复杂',
  'persecute': '迫害；困扰',
  'persecution': '迫害；困扰',
  'persevere': '坚持；毅力',
  'perseverance': '坚持；毅力',
  'overcome': '克服；战胜',
  'overdue': '过期；迟交',
  'overflow': '溢出；泛滥',
  'overhaul': '检修；彻底检查',
  'overhear': '无意中听到',
  'overlap': '重叠；交叉',
  'overlook': '忽视；俯瞰',
  'overnight': '一夜之间；突然',
  'override': '无视；不顾',
  'overseas': '海外；国外的',
  'oversee': '监督；管理',
  'oversight': '疏忽；监管不严',
  'overstate': '夸张；夸大',
  'overt': '公然的；明显的',
  'overtake': '赶上；超过',
  'overthrow': '推翻；颠覆',
  'overtime': '加班；超时',
  'overturn': '倾覆；颠覆',
  'overwhelm': '压倒；淹没',
  'owe': '欠债；归功于',
  'owl': '猫头鹰',
  'own': '拥有；自己的',
  'owner': '所有者；主人',
  'ownership': '所有权；所有制',
  'ox': '牛',
  'oxide': '氧化物',
  'oxygen': '氧气',
  'ozone': '臭氧',
  'pace': '步伐；速度',
  'pack': '包装；打包',
  'package': '包裹；包装',
  'packet': '小包；包裹',
  'pact': '条约；协定',
  'pad': '垫；便笺',
  'painful': '痛苦的；困难的',
  'paddy': '稻田；稻谷',
  'page': '页面；书页',
  'pain': '痛苦；疼痛',
  'paint': '油漆；绘画',
  'painting': '绘画；油画',
  'painter': '画家',
  'pair': '一对；一双',
  'palace': '宫殿；皇宫',
  'pale': '苍白的；浅色的',
  'palm': '手掌；棕榈',
  'pamphlet': '小册子；宣传册',
  'pan': '平底锅；盘子',
  'panda': '熊猫',
  'panel': '面板；仪表板',
  'panic': '恐慌；惊慌',
  'panorama': '全景；全景画',
  'pant': '喘气；喘息',
  'panoramic': '全景的；广阔的',
  'pants': '裤子；短裤',
  'paperback': '平装书',
  'parachute': '降落伞',
  'parade': '游行；检阅',
  'paradigm': '范例；典范',
  'paradise': '天堂；乐园',
  'paragraph': '段落；节',
  'paralyze': '使瘫痪；使麻痹',
  'paralyse': '使瘫痪；使麻痹',
  'parameter': '参数；变量',
  'parental': '父母的；家长式的',
  'parenting': '养育；教养',
  'parasite': '寄生虫',
  'parcel': '包裹；包裹',
  'pardon': '原谅；赦免',
  'parent': '父母；家长',
  'parish': '教区；教区居民',
  'park': '公园；停车场',
  'parking': '停车；停车场',
  'parliament': '议会；国会',
  'parliamentary': '议会的；国会的',
  'parole': '假释；特许',
  'partial': '部分的；偏袒的',
  'partially': '部分地；偏袒地',
  'parrot': '鹦鹉',
  'part': '部分；角色',
  'participate': '参加；参与',
  'participation': '参与；参加',
  'participant': '参与者；参赛者',
  'particle': '粒子；微粒',
  'particular': '特别的；具体的',
  'particularly': '特别地；尤其',
  'partisan': '党派的；偏袒的',
  'partnership': '伙伴关系；合股',
  'partition': '分割；划分',
  'partly': '部分地；在一定程度上',
  'partner': '伙伴；配偶',
  'party': '党派；聚会',
  'passionate': '热情的；激动的',
  'pass': '通过；传递',
  'passage': '通道；段落',
  'passenger': '乘客；旅客',
  'passerby': '过路人；行人',
  'passion': '激情；热情',
  'passive': '被动的；消极的',
  'onion': '洋葱；葱蒜类植物',
  'online': '在线；联网',
  'only': '只有；仅',
  'onset': '开始；发作',
  'onto': '到...上；进入',
  'onward': '向前；以后',
  'opaque': '不透明；模糊',
  'open': '开放；公开',
  'opener': '开启者；开启器',
  'opening': '开始；开口',
  'openly': '公开地；坦率地',
  'opera': '歌剧；歌剧院',
  'operation': '操作；手术',
  'operational': '操作的；运行的',
  'operator': '操作员；运营商',
  'operate': '操作；经营',
  'operative': '有效的；操作的',
  'opinion': '意见；观点',
  'opportunity': '机会；机遇',
  'oppose': '反对；对抗',
  'opposition': '反对；对立',
  'opponent': '对手；反对者',
  'opposite': '相反；对立面',
  'oppress': '压迫；压制',
  'oppression': '压迫；压制',
  'oppressive': '压迫的；压抑的',
  'opt': '选择；挑选',
  'option': '选项；选择权',
  'optional': '可选的；任意的',
  'optic': '光学的；视觉的',
  'optical': '光学的；视觉的',
  'optimism': '乐观；乐观主义',
  'optimistic': '乐观的；乐观主义者',
  'optimist': '乐观者；乐天派',
  'optimum': '最佳；最适宜',
  'or': '或者；还是',
  'orbital': '轨道的；轨道上的',
  'oral': '口头的；口腔的',
  'orange': '橙子；橙色',
  'orbit': '轨道；环绕',
  'orchestra': '管弦乐队；乐队',
  'ordeal': '考验；磨难',
  'order': '命令；顺序',
  'orderly': '有序的；整齐的',
  'organization': '组织；机构',
  'organisation': '组织；机构',
  'organizational': '组织的；机构的',
  'organisational': '组织的；机构的',
  'orientation': '方向；定位',
  'ordinary': '普通的；平凡的',
  'oriental': '东方的；东方人的',
  'ore': '矿石；矿',
  'organ': '器官；机构',
  'organic': '有机的；器官的',
  'organism': '生物体；有机体',
  'organize': '组织；安排',
  'organise': '组织；安排',
  'orient': '定向；使朝向',
  'origin': '起源；出身',
  'original': '原始的；独创的',
  'originality': '独创性；新颖',
  'originate': '起源；发起',
  'ornament': '装饰；装饰品',
  'ornamental': '装饰的；装饰性的',
  'orphan': '孤儿；被遗弃的',
  'orphanage': '孤儿院；孤儿收容所',
  'orthodox': '正统的；传统的',
  'other': '其他的；另外的',
  'otherwise': '否则；另外',
  'ounce': '盎司；重量单位',
  'our': '我们的；属于我们的',
  'ours': '我们的；属于我们的',
  'ourselves': '我们自己；我们亲自',
  'out': '外面；出去',
  'outbreak': '爆发；发作',
  'outdated': '过时的；陈旧的',
  'outdoor': '户外的；露天的',
  'outdoors': '户外；露天',
  'outer': '外部的；外层的',
  'outfit': '全套装备；服装',
  'outgoing': '外出的；友好的',
  'outing': '远足；郊游',
  'outlaw': '非法的；被剥夺公民权的人',
  'outlet': '出口；出口处',
  'outline': '轮廓；大纲',
  'outlook': '景色；前景',
  'output': '输出；产量',
  'outrage': '暴行；愤怒',
  'outrageous': '令人愤慨的；过分的',
  'outside': '外面；外部',
  'outsider': '局外人；外人',
  'outskirts': '郊外；外围',
  'outstanding': '杰出的；突出的',
  'outward': '外部的；向外的',
  'outwards': '向外；向外方',
  'oval': '椭圆形；卵形',
  'oven': '烤箱；炉子',
  'over': '在...上方；超过',
  'overall': '全部的；全面的',
  'overcoat': '大衣；外套',
  'procession': '队伍；行列',
  'proclamation': '宣言；公告',
  'produce': '生产；产品',
  'production': '生产；制作',
  'productivity': '生产力；生产率',
  'product': '产品；产物',
  'profession': '职业；专业',
  'professional': '专业的；职业的',
  'professor': '教授',
  'proficient': '熟练的；精通的',
  'proficiency': '熟练；精通',
  'profile': '轮廓；简介',
  'profit': '利润；得益',
  'profitable': '有利可图的；赚钱的',
  'profound': '深刻的；深奥的',
  'program': '节目；计划',
  'programme': '节目；计划',
  'progress': '进步；进展',
  'progressive': '进步的；先进的',
  'progression': '进展；进步',
  'prohibition': '禁止；禁令',
  'prohibitive': '禁止的；过高的',
  'project': '项目；计划',
  'projector': '投影仪；放映机',
  'projection': '投影；预测',
  'prominence': '突出；显赫',
  'promise': '承诺；许诺',
  'promising': '有希望的；有前途的',
  'promote': '促进；提升',
  'promotion': '提升；晋升',
  'prompt': '提示；敏捷的',
  'pronoun': '代词',
  'pronounce': '发音；宣布',
  'pronunciation': '发音；发音方式',
  'proof': '证据；校对',
  'proofread': '校对',
  'prop': '支撑物；把戏',
  'propaganda': '宣传；宣传品',
  'propagate': '传播；繁殖',
  'propagation': '传播；繁殖',
  'propel': '推进；驱使',
  'propeller': '螺旋桨；推进器',
  'proper': '适当的；正派的',
  'property': '财产；所有权',
  'proportional': '成比例的；相称的',
  'propose': '提议；求婚',
  'proposal': '提议；求婚',
  'proposition': '命题；建议',
  'prose': '散文；散文体',
  'prosecute': '起诉；执行',
  'prosecution': '起诉；执行',
  'prospective': '预期的；未来的',
  'prosper': '繁荣；兴旺',
  'prosperity': '繁荣；兴旺',
  'prosperous': '繁荣的；兴旺的',
  'protect': '保护；防护',
  'protection': '保护；防护',
  'protective': '保护的；防护的',
  'protein': '蛋白质',
  'protest': '抗议；反对',
  'protocol': '协议；程序',
  'prototype': '原型；典型',
  'prove': '证明；证实',
  'proverb': '谚语；格言',
  'proverbial': '谚语的；格言的',
  'provide': '提供；供应',
  'provision': '供应；条款',
  'provided': '如果；鉴于',
  'province': '省；领域',
  'provincial': '省的；地方的',
  'provocation': '挑衅；激怒',
  'provocative': '挑衅的；刺激的',
  'proximate': '近的；近似的',
  'proximity': '接近；亲近',
  'psychiatry': '精神病学',
  'psychiatric': '精神病的；精神病学上的',
  'psychiatrist': '精神病学家',
  'psychology': '心理学',
  'psychological': '心理的；心理学的',
  'psychologist': '心理学家',
  'pub': '酒吧；公共屋',
  'public': '公共的；公众的',
  'publicize': '宣传；公布',
  'publicise': '宣传；公布',
  'publicity': '宣传；知名度',
  'publicly': '公开地；公众地',
  'publish': '出版；发行',
  'publication': '出版；出版物',
  'pudding': '布丁；甜食',
  'pull': '拉；拖',
  'pulse': '脉搏；脉冲',
  'pump': '泵；抽水机',
  'pumpkin': '南瓜',
  'punch': '拳击；猛击',
  'punctual': '守时的；准时的',
  'punctuality': '准时；守时',
  'punish': '惩罚；处罚',
  'punishment': '惩罚；处罚',
  'pupil': '学生；瞳孔',
  'purchase': '购买；采购',
  'real': '真实的；现实的',
  'really': '真正地；确实地',
  'reality': '现实；真实',
  'realistic': '现实的；逼真的',
  'realism': '现实主义；逼真',
  'realize': '实现；认识到',
  'realise': '实现；认识到',
  'realization': '实现；认识',
  'realisation': '实现；认识',
  'realm': '领域；王国',
  'reap': '收获；得到',
  'rear': '饲养；养育',
  'reason': '理由；原因',
  'reasonable': '合理的；有道理的',
  'reassure': '使安心；保证',
  'reassurance': '安心；保证',
  'rebel': '造反；反抗',
  'rebellious': '造反的；反抗的',
  'recall': '回忆；召回',
  'receipt': '收据；收条',
  'recipient': '接受者；收件人',
  'receptive': '接受的；愿意接受的',
  'receiver': '接收者；收音机',
  'recede': '后退；减少',
  'receive': '收到；接受',
  'recent': '最近的；近来的',
  'recently': '最近；不久前',
  'reception': '接待；招待会',
  'receptionist': '接待员；前台',
  'recession': '衰退；不景气',
  'recipe': '食谱；方法',
  'reciprocal': '相互的；互惠的',
  'recitation': '背诵；朗诵',
  'recite': '背诵；朗诵',
  'reckless': '鲁莽的；不顾一切的',
  'recognition': '认识；认可',
  'reckon': '认为；估计',
  'recognize': '认识；认可',
  'recognise': '认识；认可',
  'recommend': '推荐；建议',
  'recommendation': '推荐；建议',
  'reconciliation': '和解；协调',
  'reconciliatory': '和解的；调和的',
  'record': '记录；唱片',
  'recorder': '录音机；记录者',
  'recording': '录音；记录',
  'recover': '恢复；找回',
  'recovery': '恢复；痊愈',
  'recreation': '娱乐；消遣',
  'recreational': '娱乐的；消遣的',
  'recruit': '招募；吸收',
  'recruitment': '招募；招聘',
  'rectify': '纠正；改正',
  'rectification': '纠正；改正',
  'recur': '再发生；复发',
  'recurrence': '再发生；复发',
  'recycle': '回收；再利用',
  'recyclable': '可回收的',
  'red': '红色；赤字',
  'reduce': '减少；降低',
  'reduction': '减少；降低',
  'redundant': '多余的；冗余的',
  'redundancy': '冗余；裁员',
  'reel': '卷；眩晕',
  'refer': '提到；参考',
  'reference': '参考；提及',
  'referee': '裁判；仲裁人',
  'refinery': '炼油厂；精炼厂',
  'refinement': '精炼；优雅',
  'referendum': '全民公决；投票',
  'reflect': '反映；反射',
  'reflection': '反映；反射',
  'reflective': '反射的；沉思的',
  'reform': '改革；改造',
  'reformation': '改革；改造',
  'reformist': '改革者；改良主义者',
  'refrain': '抑制；避免',
  'refrigeration': '冷藏；冷却',
  'refresh': '使清新；使精神振作',
  'refreshment': '提神；饮料',
  'refrigerator': '冰箱；冷藏库',
  'fridge': '冰箱；冷藏柜',
  'refuge': '避难所；庇护',
  'refugee': '难民；流亡者',
  'refund': '退款；偿还',
  'refuse': '拒绝；废物',
  'refusal': '拒绝；否认',
  'refute': '反驳；驳斥',
  'refutation': '反驳；驳斥',
  'regard': '看作；考虑',
  'regarding': '关于；至于',
  'regardless': '不顾；不管',
  'regime': '政权；政体',
  'regiment': '团；军团',
  'regimental': '军团的；军规的',
  'region': '地区；区域',
  'regional': '地区的；区域的',
  'register': '登记；注册',
  'registration': '登记；注册',
  'registrar': '注册官；登记员',
  'regret': '后悔；遗憾',
  'regrettable': '遗憾的；应受责备的',
  'regretful': '后悔的；遗憾的',
  'regular': '规则的；经常的',
  'regularity': '规则性；规律性',
  'regulate': '调节；管理',
  'regulation': '规则；管理',
  'regulatory': '管理的；调节的',
  'regulator': '调节器；管理者',
  'rehabilitate': '康复；使改过自新',
  'rehabilitation': '康复；改造',
  'rehearse': '排练；预演',
  'rehearsal': '排练；预演',
  'reign': '统治；当政',
  'rein': '控制；驾驭',
  'reinforcement': '加强；加固',
  'reject': '拒绝；抵制',
  'rejection': '拒绝；排斥',
  'rejoice': '高兴；庆祝',
  'rejoicing': '高兴；庆祝',
  'relate': '关联；讲述',
  'relation': '关系；联系',
  'relationship': '关系；关联',
  'relative': '相对的；亲戚',
  'relativity': '相对性；相关性',
  'relax': '放松；减轻',
  'relaxation': '放松；休闲',
  'relay': '接力；转播',
  'release': '释放；发布',
  'relentless': '不懈的；无情的',
  'relevance': '相关性；关联性',
  'relic': '遗物；遗迹',
  'relieve': '减轻；缓解',
  'relief': '减轻；救济',
  'religion': '宗教；信仰',
  'religious': '宗教的；虔诚的',
  'relish': '喜爱；享受',
  'reluctance': '不愿意；勉强',
  'rely': '依赖；依靠',
  'reliance': '依赖；信任',
  'reliable': '可靠的；可信赖的',
  'remain': '剩下；保持',
  'remainder': '剩余；余下',
  'remark': '评论；注意',
  'remarkable': '显著的；非凡的',
  'remedial': '治疗的；补救的',
  'remember': '记住；纪念',
  'remembrance': '记忆；纪念',
  'remind': '提醒；使想起',
  'reminder': '提醒物；备忘录',
  'reminiscent': '使人回忆的；怀旧的',
  'reminiscence': '回忆；怀旧',
  'remnant': '残余；剩余',
  'remote': '遥远的；偏僻的',
  'remove': '移除；去除',
  'removal': '移除；迁移',
  'renaissance': '文艺复兴；复兴',
  'rendering': '表现；履行',
  'renew': '更新；续借',
  'renewal': '更新；续借',
  'renewable': '可更新的；可再生的',
  'renovate': '翻新；改造',
  'renovation': '翻新；改造',
  'renown': '著名；闻名',
  'renowned': '著名的；知名的',
  'rent': '租金；出租',
  'rental': '租金；租赁',
  'repair': '修理；修补',
  'reparable': '可修复的；可纠正的',
  'repay': '偿还；报答',
  'repayment': '偿还；回报',
  'repeat': '重复；重说',
  'repetition': '重复；反复',
  'repetitive': '重复的；反复的',
  'repeatedly': '反复地；再三地',
  'repel': '排斥；抵制',
  'repertoire': '全部作品；全部节目',
  'replace': '代替；替换',
  'replacement': '代替；替换',
  'reply': '回答；回复',
  'report': '报告；报道',
  'reporter': '记者；报告人',
  'represent': '代表；表现',
  'representation': '代表；表现',
  'representative': '代表；典型的',
  'repress': '镇压；抑制',
  'repression': '镇压；抑制',
  'repressive': '镇压的；压抑的',
  'reproach': '责备；指责',
  'reproduce': '繁殖；复制',
  'reproduction': '繁殖；复制',
  'reproductive': '繁殖的；生殖的',
  'republic': '共和国；共和政体',
  'republican': '共和的；共和主义者',
  'reputation': '名誉；名声',
  'repute': '名誉；声誉',
  'reputable': '名誉好的；值得信赖的',
  'request': '请求；要求',
  'require': '需要；要求',
  'requirement': '需要；要求',
  'pure': '纯净；纯洁',
  'purity': '纯净；纯洁度',
  'purify': '净化；使纯净',
  'purple': '紫色；紫罗兰色',
  'purpose': '目的；用途',
  'purposeful': '有目的的；有意图的',
  'purse': '钱包；钱袋',
  'pursue': '追求；从事',
  'pursuit': '追求；追求物',
  'push': '推；推动',
  'pushy': '好管闲事的；强制的',
  'put': '放置；安置',
  'puzzlement': '困惑；迷惑',
  'puzzle': '谜题；使困惑',
  'pyramid': '金字塔；棱锥',
  'quake': '地震；震动',
  'qualification': '资格；条件',
  'quality': '质量；品质',
  'qualitative': '定性的；性质的',
  'quantify': '量化；确定数量',
  'quantification': '量化；数量化',
  'quantity': '数量；大量',
  'quantitative': '定量的；数量的',
  'quarrel': '争吵；争论',
  'quarrelsome': '好争吵的；爱争吵的',
  'quart': '夸脱；四分之一加仑',
  'quarter': '四分之一；季度',
  'quarterly': '季度的；每季一次的',
  'queen': '女王；王后',
  'questionnaire': '问卷；调查表',
  'query': '询问；疑问',
  'quest': '探索；寻求',
  'question': '问题；询问',
  'queue': '队列；行列',
  'quotation': '引语；报价',
  'quick': '快的；迅速的',
  'quiet': '安静的；宁静的',
  'quit': '辞职；放弃',
  'quite': '相当；非常',
  'quiver': '颤抖；发抖',
  'quiz': '小测验；问答',
  'quote': '引用；报价',
  'rabbit': '兔子',
  'racial': '种族的；人种的',
  'racism': '种族主义；偏见',
  'racist': '种族主义者；种族主义者',
  'race': '种族；比赛',
  'rack': '架子；折磨',
  'radar': '雷达；无线电探测',
  'radiation': '辐射；放射线',
  'radiator': '散热器；辐射器',
  'radiant': '发光的；容光焕发的',
  'radiate': '辐射；发光',
  'radioactivity': '放射性；辐射性',
  'radio': '无线电；收音机',
  'radioactive': '放射性的；有辐射的',
  'rag': '破布；破烂',
  'ragged': '破烂的；衣衫褴褛的',
  'raggedly': '破烂地；衣衫褴褛地',
  'rage': '愤怒；狂怒',
  'raging': '狂怒的；激怒的',
  'raid': '突袭；袭击',
  'rainy': '下雨的；多雨的',
  'rail': '铁轨；轨道',
  'railway': '铁路；铁道',
  'railroad': '铁路；铁道',
  'rain': '雨；降雨',
  'rainbow': '彩虹；虹',
  'raincoat': '雨衣；雨披',
  'raise': '举起；提高',
  'rally': '集会；团结',
  'ranch': '大牧场；农场',
  'random': '随机的；任意的',
  'range': '范围；山脉',
  'rank': '等级；军衔',
  'rap': '说唱；击打',
  'rape': '强奸；劫掠',
  'rapid': '快速的；急速的',
  'rare': '稀有的；罕见的',
  'rarely': '很少；难得',
  'rarity': '稀有；珍品',
  'rash': '皮疹；轻率',
  'rat': '老鼠',
  'rate': '比率；速度',
  'rating': '等级；评价',
  'rather': '相当；宁愿',
  'ratification': '批准；认可',
  'ratify': '批准；认可',
  'ratio': '比率；比例',
  'ration': '定量；配给',
  'rattle': '发出嘎吱声；唠叨',
  'raw': '生的；未加工的',
  'ray': '光线；射线',
  'reach': '到达；达到',
  'react': '反应；起作用',
  'read': '阅读；读数',
  'reading': '阅读；读物',
  'reader': '读者；阅读器',
  'ready': '准备好的；愿意的',
  'readily': '乐意地；容易地',
  'prayer': '祈祷；祷告',
  'preach': '宣讲；布道',
  'preacher': '传教士；布道者',
  'precaution': '预防；防备',
  'precautionary': '预防的；防备的',
  'preceding': '在前的；前述的',
  'precedent': '先例；前例',
  'precious': '宝贵的；珍贵的',
  'precise': '精确的；准确的',
  'precision': '精确；精确度',
  'precisely': '精确地；确切地',
  'predator': '捕食者；掠夺者',
  'predatory': '掠夺性的；捕食性的',
  'predecessor': '前辈；前任',
  'predict': '预测；预言',
  'prediction': '预测；预言',
  'predictable': '可预测的；可预见的',
  'predominate': '占主导地位；支配',
  'predominance': '主导地位；优势',
  'preface': '序言；前言',
  'prefer': '更喜欢；宁愿',
  'preferable': '更可取的；更好的',
  'preference': '偏好；优先选择',
  'preferential': '优先的；优惠的',
  'pregnant': '怀孕的；充满的',
  'pregnancy': '怀孕；妊娠',
  'prejudice': '偏见；损害',
  'premature': '早熟的；过早的',
  'premier': '总理；首相',
  'premium': '奖金；优质品',
  'preoccupy': '全神贯注；占据',
  'preoccupied': '全神贯注的；入神的',
  'prepare': '准备；预备',
  'preparation': '准备；预备',
  'preparatory': '预备的；准备的',
  'preposition': '介词',
  'prerequisite': '先决条件；前提',
  'prescription': '处方；药方',
  'present': '现在；礼物',
  'presence': '出席；存在',
  'presentation': '展示；介绍',
  'presently': '不久；目前',
  'preservation': '保存；保护',
  'preservative': '防腐剂；保存剂',
  'preside': '主持；掌管',
  'president': '总统；会长',
  'presidency': '总统职位；任期',
  'presidential': '总统的；会长的',
  'press': '压；出版社',
  'pressure': '压力；压迫',
  'pressing': '紧迫的；迫切的',
  'prestigious': '有声望的；著名的',
  'presumption': '假定；推测',
  'presumably': '大概；可能',
  'pretend': '假装；伪装',
  'pretense': '假装；伪饰',
  'pretext': '借口；托辞',
  'pretty': '相当；漂亮的',
  'prevalence': '流行；普遍',
  'prevalent': '流行的；普遍的',
  'prevent': '预防；阻止',
  'prevention': '预防；防止',
  'preventive': '预防的；防止的',
  'preview': '预览；预演',
  'previous': '以前的；前述的',
  'prey': '猎物；牺牲品',
  'price': '价格；代价',
  'priceless': '无价的；贵重的',
  'pride': '骄傲；自豪',
  'proud': '骄傲的；自豪的',
  'priest': '牧师；神父',
  'primary': '主要的；初级的',
  'primarily': '主要地；起初',
  'prime': '首要的；青春的',
  'prince': '王子；亲王',
  'princess': '公主；王妃',
  'principle': '原则；原理',
  'print': '印刷；打印',
  'printer': '打印机；印刷者',
  'printing': '印刷；打印',
  'priority': '优先权；优先',
  'prison': '监狱；牢房',
  'prisoner': '囚犯；被监禁者',
  'private': '私人的；私有的',
  'privacy': '隐私；秘密',
  'privatization': '私有化；民营化',
  'privatisation': '私有化；民营化',
  'privileged': '有特权的；特许的',
  'prize': '奖品；奖金',
  'probable': '可能的；大概的',
  'probability': '可能性；概率',
  'probably': '大概；或许',
  'problem': '问题；难题',
  'problematic': '有问题的；成问题的',
  'procedure': '程序；手续',
  'proceed': '进行；继续',
  'proceedings': '程序；会议记录',
  'process': '过程；工序',
  'processor': '处理器；加工者',
  'seemingly': '表面上；看似',
  'segmental': '分段的；节段的',
  'segregate': '隔离；分开',
  'segregation': '隔离；分开',
  'seize': '夺取；抓住',
  'seizure': '夺取；逮捕',
  'seldom': '很少；难得',
  'select': '选择；挑选',
  'selection': '选择；挑选',
  'selective': '选择的；有选择的',
  'self': '自己；自我',
  'selfish': '自私的；利己的',
  'selfless': '无私的；无私心的',
  'sell': '卖；出售',
  'semester': '学期',
  'seminar': '研讨会；讲座',
  'senate': '参议院；上议院',
  'senator': '参议员；上议院议员',
  'send': '发送；派遣',
  'seniority': '资历；资深',
  'senior': '高级的；年长的',
  'sensation': '感觉；轰动',
  'sensational': '轰动的；感觉的',
  'sense': '感觉；意义',
  'sensible': '明智的；可感觉的',
  'sensitive': '敏感的；易受影响的',
  'sensitivity': '敏感；灵敏度',
  'sentence': '句子；判决',
  'sentiment': '情感；情绪',
  'sentimental': '感伤的；多情的',
  'separate': '分开；分离',
  'separation': '分开；分离',
  'separatist': '分离主义者',
  'september': '九月',
  'sequential': '连续的；顺序的',
  'sergeant': '军士；警官',
  'service': '服务；服役',
  'serving': '服务；在服役',
  'serial': '连续的；连载的',
  'series': '系列；连续',
  'serious': '严重的；认真的',
  'servant': '仆人；服务员',
  'serve': '服务；供应',
  'session': '会议；会期',
  'set': '设置；一套',
  'setback': '挫折；倒退',
  'setting': '环境；背景',
  'settle': '解决；定居',
  'settlement': '解决；定居点',
  'seven': '七',
  'seventeen': '十七',
  'seventy': '七十',
  'several': '几个；若干',
  'severity': '严重性；严重',
  'sew': '缝纫；缝合',
  'sex': '性别；性',
  'sexual': '性的；性别的',
  'sexy': '性感的；吸引人的',
  'shabby': '破旧的；破烂的',
  'shade': '阴影；遮光物',
  'shadow': '影子；阴影',
  'shaft': '轴；柱',
  'shake': '摇动；颤抖',
  'shaky': '摇晃的；不稳定的',
  'shall': '将要；应该',
  'shallow': '浅的；肤浅的',
  'shame': '羞耻；耻辱',
  'shameful': '可耻的；丢脸的',
  'shameless': '厚颜无耻的；不知羞耻的',
  'shape': '形状；塑造',
  'share': '分享；股份',
  'shark': '鲨鱼',
  'sharp': '尖锐的；敏锐的',
  'sharpen': '使尖锐；使敏锐',
  'shatter': '打碎；破坏',
  'shave': '刮脸；剃',
  'shaver': '剃刀；理发师',
  'she': '她；它',
  'shed': '小屋；脱落',
  'sheep': '羊',
  'sheer': '纯粹的；陡峭的',
  'sheet': '床单；纸张',
  'shelf': '架子；搁板',
  'shell': '壳；炮弹',
  'shelter': '庇护；避难所',
  'shepherd': '牧羊人；引导者',
  'shield': '盾牌；保护',
  'shift': '班次；改变',
  'shine': '发光；照耀',
  'shiny': '发光的；闪亮的',
  'ship': '船；运送',
  'shipping': '航运；运输',
  'shipment': '装运；货物',
  'shipyard': '造船厂',
  'shirt': '衬衫',
  'shit': '粪便；糟糕',
  'shiver': '颤抖；发抖',
  'shock': '震惊；震动',
  'shoe': '鞋',
  'shoot': '射击；拍摄',
  'salvage': '打捞；救助',
  'salvation': '拯救；救助',
  'same': '相同；一样',
  'sample': '样本；样品',
  'sanctuary': '圣地；避难所',
  'sand': '沙子；沙滩',
  'sandwich': '三明治；夹心面包',
  'sanitation': '卫生；清洁',
  'sanitary': '卫生的；清洁的',
  'sarcasm': '讽刺；挖苦',
  'sarcastic': '讽刺的；挖苦的',
  'satellite': '卫星；附属物',
  'satire': '讽刺；讽刺文学',
  'satirical': '讽刺的；讽刺文学的',
  'satirist': '讽刺家；挖苦者',
  'satisfy': '满足；使满意',
  'satisfaction': '满意；满足',
  'satisfactory': '令人满意的；合适的',
  'saturate': '使饱和；充满',
  'saturation': '饱和；充满',
  'saturday': '星期六',
  'sauce': '酱汁；调味汁',
  'sausage': '香肠；腊肠',
  'savage': '野蛮人；野蛮的',
  'save': '救；节省',
  'saving': '节省；储蓄',
  'say': '说；告诉',
  'saying': '谚语；说法',
  'scale': '刻度；比例',
  'scan': '扫描；审视',
  'scanner': '扫描仪；探测器',
  'scandal': '丑闻；丑事',
  'scandalous': '丑恶的；丑闻的',
  'scar': '疤痕；创伤',
  'scarcity': '稀缺；缺乏',
  'scarcely': '几乎不；勉强',
  'scare': '惊吓；恐慌',
  'scary': '可怕的；令人害怕的',
  'scatter': '散布；分散',
  'scene': '场景；现场',
  'scenery': '风景；景色',
  'scenic': '风景的；美丽的',
  'scent': '气味；香味',
  'schedule': '时间表；日程',
  'scheme': '计划；阴谋',
  'scholar': '学者；学者',
  'scholarly': '学术的；博学的',
  'scholarship': '奖学金；学问',
  'scholastic': '学术的；学校的',
  'school': '学校；学派',
  'schooling': '教育；学校教育',
  'science': '科学；学科',
  'scientific': '科学的；科学性的',
  'scientist': '科学家；学者',
  'scissors': '剪刀；剪子',
  'scold': '责骂；斥责',
  'scope': '范围；视野',
  'score': '得分；分数',
  'scorn': '轻蔑；嘲笑',
  'scout': '侦察兵；侦察',
  'scornful': '轻蔑的；嘲笑的',
  'scramble': '攀登；争夺',
  'scrap': '碎片；废料',
  'scrape': '刮；擦',
  'scratch': '抓；刮',
  'scream': '尖叫；喊叫',
  'screen': '屏幕；银幕',
  'screw': '螺丝；拧',
  'script': '剧本；手稿',
  'scripture': '经典；圣经',
  'scrub': '擦洗；刷洗',
  'scrutinize': '细看；仔细检查',
  'sculpture': '雕塑；雕刻',
  'sea': '海洋；大海',
  'seal': '封条；印章',
  'season': '季节；调味',
  'seat': '座位；坐',
  'seasonal': '季节的；时令的',
  'second': '第二；秒',
  'secondary': '第二的；中等的',
  'second-hand': '二手的；旧的',
  'secret': '秘密；机密',
  'secrecy': '秘密；保密',
  'secretive': '秘密的；隐秘的',
  'secretary': '秘书；书记',
  'secretarial': '秘书的；书写的',
  'section': '部分；章节',
  'sector': '部门；区域',
  'secular': '世俗的；现世的',
  'secure': '安全的；可靠的',
  'security': '安全；保障',
  'seduce': '诱惑；诱骗',
  'seduction': '诱惑；诱骗',
  'seductive': '诱惑的；诱人的',
  'see': '看见；理解',
  'seed': '种子；发芽',
  'seedling': '幼苗；嫩芽',
  'seek': '寻找；寻求',
  'seem': '似乎；看起来',
  'seeming': '似乎；外观',
  'shop': '商店；店铺',
  'shopping': '购物',
  'shore': '海岸；岸边',
  'short': '短；矮',
  'shortage': '短缺；不足',
  'shorts': '短裤',
  'shortcoming': '缺点；不足',
  'shorthand': '速记',
  'shortly': '不久；简短地',
  'shot': '射击；照片',
  'should': '应该；应当',
  'shoulder': '肩膀；承担',
  'shout': '呼喊；叫喊',
  'shove': '推；挤',
  'show': '展示；表演',
  'showy': '华丽；显眼',
  'showcase': '陈列柜；展示',
  'shower': '淋浴；阵雨',
  'shred': '撕碎；碎片',
  'shrewd': '精明的；狡猾的',
  'shrimp': '虾',
  'shrub': '灌木',
  'shrubbery': '灌木丛',
  'shrug': '耸肩',
  'shut': '关闭；闭',
  'shuttle': '穿梭；穿梭机',
  'shy': '害羞；胆怯',
  'shyness': '害羞；胆怯',
  'shyly': '害羞地；胆怯地',
  'sick': '生病；恶心',
  'sicken': '使生病；使恶心',
  'side': '边；侧面',
  'sideways': '侧着；横着',
  'sigh': '叹息；叹气',
  'sight': '视力；景象',
  'sightseeing': '观光；游览',
  'sign': '标志；迹象',
  'signature': '签名；署名',
  'signal': '信号；标志',
  'significance': '意义；重要性',
  'signify': '表示；意味',
  'silent': '沉默；寂静',
  'silence': '沉默；寂静',
  'silicon': '硅',
  'silk': '丝绸；丝',
  'silky': '丝质；光滑的',
  'silver': '银；银色',
  'silvery': '银色；闪亮的',
  'similar': '相似；类似',
  'similarity': '相似；类似',
  'simple': '简单；单纯的',
  'simplicity': '简单；单纯',
  'simplify': '简化；使简单',
  'simply': '简单地；仅仅',
  'simulation': '模拟；仿真',
  'simultaneous': '同时的；同步的',
  'sin': '罪；罪恶',
  'since': '自从；因为',
  'sincere': '真诚的；诚挚的',
  'sincerity': '真诚；诚挚',
  'sing': '唱歌；鸣唱',
  'singer': '歌手',
  'single': '单个；单身的',
  'singular': '非凡的；单数的',
  'singularity': '独特；单数',
  'sinister': '邪恶的；不吉利的',
  'sink': '下沉；使下沉',
  'sip': '啜饮；小口喝',
  'sir': '先生；爵士',
  'sister': '姐妹；妹妹',
  'sit': '坐；位于',
  'sitting': '坐着；就座',
  'site': '地点；场所',
  'situation': '情况；形势',
  'situate': '位于；安置',
  'six': '六',
  'sixteen': '十六',
  'sixty': '六十',
  'size': '大小；尺寸',
  'sizable': '相当大的；相当多的',
  'skate': '滑冰；溜冰',
  'skating': '滑冰；溜冰',
  'skeleton': '骨骼；骨架',
  'sceptical': '怀疑的；可疑的',
  'skeptic': '怀疑论者',
  'sceptic': '怀疑论者',
  'skepticism': '怀疑论；怀疑主义',
  'scepticism': '怀疑论；怀疑主义',
  'sketch': '素描；草图',
  'sketchy': '草率的；粗略的',
  'ski': '滑雪',
  'skiing': '滑雪',
  'skill': '技能；技巧',
  'skilful': '熟练的；灵巧的',
  'skillful': '熟练的；灵巧的',
  'skilled': '熟练的；有技能的',
  'skim': '撇去；略读',
  'skin': '皮肤；剥皮',
  'skinny': '瘦的；皮包骨的',
  'skip': '跳过；遗漏',
  'rescue': '营救；救助',
  'research': '研究',
  'researcher': '研究者',
  'resemblance': '相似；类似',
  'resent': '怨恨',
  'resentment': '怨恨；愤恨',
  'reserve': '储备；保留',
  'reservation': '预订；保留',
  'reserved': '保留的；谨慎的',
  'reservoir': '水库；储藏所',
  'reshuffle': '改组；重新排列',
  'residence': '居住；住宅',
  'resident': '居民；居住者',
  'residential': '住宅的；居住的',
  'resign': '辞职',
  'resignation': '辞职；放弃',
  'resist': '抵抗；抵制',
  'resistance': '抵抗；阻力',
  'resistant': '抵抗的；耐...的',
  'resolution': '决心；解决',
  'resolute': '坚决的；决断的',
  'resort': '度假胜地；求助',
  'resource': '资源；办法',
  'resourceful': '资源丰富的；机智的',
  'respect': '尊重；敬意',
  'respectable': '值得尊敬的；体面的',
  'respectful': '恭敬的；有礼貌的',
  'respective': '各自的；分别的',
  'respectively': '分别地；各自地',
  'respond': '回答；响应',
  'response': '回答；响应',
  'responsive': '响应的；敏感的',
  'respondent': '回答者；被告',
  'responsible': '负责的；有责任的',
  'responsibility': '责任；职责',
  'rest': '休息；休息处',
  'restaurant': '餐馆；餐厅',
  'restless': '不安的；焦躁的',
  'restoration': '恢复；修复',
  'restraint': '抑制；限制',
  'restrict': '限制；约束',
  'restriction': '限制；约束',
  'restrictive': '限制的；约束的',
  'result': '结果；成果',
  'resultant': '结果的；由此产生的',
  'resume': '简历；恢复',
  'resumption': '恢复；重新开始',
  'retail': '零售',
  'retailer': '零售商',
  'retention': '保留；保持',
  'retaliate': '报复；反击',
  'retaliation': '报复；反击',
  'retarded': '发育迟缓的；落后的',
  'retell': '复述；重讲',
  'retelling': '复述；重讲',
  'retire': '退休；离开',
  'retirement': '退休；离职',
  'retired': '退休的；离职的',
  'retort': '反驳；回嘴',
  'retrieve': '恢复；找回',
  'retrieval': '恢复；找回',
  'retrospect': '回顾；追溯',
  'retrospective': '回顾的；追溯的',
  'return': '返回；归还',
  'reunite': '重聚；团聚',
  'reunification': '统一；重聚',
  'reunion': '团聚；重聚',
  'revelation': '揭露；启示',
  'revenge': '复仇；报复',
  'revengeful': '复仇的；报复的',
  'reversal': '反转；颠倒',
  'reversible': '可逆的；可颠倒的',
  'review': '回顾；评论',
  'reviewer': '评论家；审查者',
  'revision': '修订；校订',
  'revive': '复兴；复活',
  'revival': '复兴；复活',
  'revolt': '起义；造反',
  'revolution': '革命；变革',
  'revolutionary': '革命的；变革的',
  'revolve': '旋转；周转',
  'reward': '奖励；报酬',
  'rewarding': '有益的；值得的',
  'rhetoric': '修辞；辞藻',
  'rhetorical': '修辞的；辞藻的',
  'rhythm': '节奏；韵律',
  'rib': '肋骨；排骨',
  'rhythmic': '有节奏的；韵律的',
  'ribbon': '丝带；带子',
  'rice': '稻；米饭',
  'rich': '富有的；丰富的',
  'rid': '摆脱；骑',
  'riddle': '谜语；难题',
  'ride': '骑；乘坐',
  'rider': '骑手；乘客',
  'ridge': '脊梁；山脊',
  'ridicule': '嘲笑；讽刺',
  'ridiculous': '可笑的；荒谬的',
  'rifle': '步枪',
  'rig': '装备；操纵',
  'right': '正确；权利',
  'rigidity': '刚性；僵硬',
  'rigor': '严格；严谨',
  'rigour': '严格；严谨',
  'rigorous': '严格的；严谨的',
  'rim': '边缘；轮缘',
  'ring': '戒指；圆环',
  'riot': '暴乱；骚乱',
  'riotous': '暴乱的；喧闹的',
  'rip': '撕裂；裂口',
  'ripe': '成熟的；熟透的',
  'ripen': '成熟；熟透',
  'rise': '上升；升起',
  'risk': '风险；危险',
  'risky': '危险的；冒险的',
  'ritual': '仪式；礼节',
  'rivalry': '竞争；对抗',
  'river': '河流；江河',
  'road': '道路；公路',
  'roar': '咆哮；吼叫',
  'roast': '烤；烤肉',
  'rob': '抢劫；盗取',
  'robbery': '抢劫；盗窃',
  'robot': '机器人；机械人',
  'robotic': '机器人的；机械的',
  'rock': '岩石；摇滚',
  'rocky': '多岩石的；崎岖的',
  'rocket': '火箭；飞快地上升',
  'rod': '棒；杆',
  'role': '角色；作用',
  'roll': '滚动；卷',
  'roller': '滚筒；滚轮',
  'romance': '浪漫；爱情故事',
  'romantic': '浪漫的；爱情的',
  'roof': '屋顶；顶棚',
  'room': '房间；空间',
  'root': '根；根本',
  'rope': '绳索；绳子',
  'rose': '玫瑰；蔷薇',
  'rosy': '玫瑰色的；乐观的',
  'rot': '腐烂；朽烂',
  'rotten': '腐烂的；恶臭的',
  'rotate': '旋转；转动',
  'rotation': '旋转；循环',
  'rough': '粗糙的；粗野的',
  'roughly': '粗略地；粗暴地',
  'round': '圆的；圆周',
  'rouse': '唤醒；激怒',
  'route': '路线；航线',
  'routine': '常规；惯例',
  'row': '行列；划船',
  'royal': '王室的；皇家的',
  'royalty': '皇室；版税',
  'rub': '摩擦；擦',
  'rubber': '橡胶；橡皮',
  'rubbish': '垃圾；废物',
  'rude': '粗鲁的；无礼的',
  'rug': '地毯；绒毯',
  'ruin': '毁灭；废墟',
  'ruinous': '毁灭性的；破坏的',
  'rule': '规则；统治',
  'ruler': '尺；统治者',
  'ruling': '统治；裁决',
  'rumor': '谣言；传闻',
  'rumour': '谣言；传闻',
  'run': '跑；运行',
  'runner': '跑步者；奔跑者',
  'running': '跑；奔跑',
  'runway': '跑道；滑行道',
  'rural': '乡村的；农村的',
  'rush': '冲；匆忙',
  'rust': '生锈；铁锈',
  'rusty': '生锈的；陈旧的',
  'ruthless': '无情的；冷酷的',
  'sack': '口袋；解雇',
  'sacred': '神圣的；宗教的',
  'sacrifice': '牺牲；祭品',
  'sacrificial': '祭品的；牺牲的',
  'sad': '悲伤的；悲哀的',
  'sadden': '使悲伤；使悲哀',
  'saddle': '马鞍；使负担',
  'sadness': '悲伤；悲哀',
  'safe': '安全的；保险的',
  'safety': '安全；保险',
  'sailor': '水手；海员',
  'safeguard': '保护；保卫',
  'sail': '航行；帆',
  'sailing': '航行；航海',
  'saint': '圣人；圣徒',
  'sake': '理由；原因',
  'salad': '沙拉；凉拌菜',
  'salary': '薪水；工资',
  'sale': '销售；出售',
  'salesman': '推销员；售货员',
  'salmon': '鲑鱼；三文鱼',
  'salon': '沙龙；客厅',
  'salt': '盐；盐分',
  'salty': '咸的；含盐的',
  'salute': '敬礼；致敬',
  'salutation': '问候；致敬',
  'stoppage': '停工；中断',
  'store': '商店；储存',
  'storage': '储存；仓库',
  'storm': '风暴；暴风雨',
  'stormy': '暴风雨的；狂怒的',
  'story': '故事；楼层',
  'storey': '楼层',
  'stout': '结实的；浓啤酒',
  'stove': '炉子；火炉',
  'straight': '直的；正直的',
  'straighten': '弄直；整顿',
  'strait': '海峡；困境',
  'strand': '海滩；细绳',
  'strange': '奇怪的；陌生的',
  'stranger': '陌生人',
  'strangle': '勒死；抑制',
  'strap': '皮带；束缚',
  'strategy': '策略；计谋',
  'straw': '稻草；吸管',
  'stray': '迷路；偏离',
  'streak': '条纹；一阵',
  'stream': '小溪；流',
  'streamline': '使流线化；简化',
  'street': '街道；马路',
  'stress': '压力；强调',
  'stressful': '有压力的；紧张的',
  'stretch': '伸展；一段时间',
  'strict': '严格的；严谨的',
  'stride': '大步；步幅',
  'strike': '打击；罢工',
  'string': '线；一串',
  'strip': '条；带状物',
  'stripe': '条纹',
  'strive': '努力；奋斗',
  'stroke': '打击；中风',
  'stroll': '散步；漫步',
  'strong': '强壮的；强烈的',
  'strengthen': '加强；巩固',
  'structure': '结构；构造',
  'structural': '结构的；构造的',
  'struggle': '斗争；奋斗',
  'stubborn': '固执的；顽强的',
  'student': '学生',
  'studio': '工作室；画室',
  'study': '学习；研究',
  'stuff': '东西；填充',
  'stuffy': '闷热的；不通风的',
  'stuffing': '填充物；填塞',
  'stumble': '绊倒；结巴',
  'stump': '树桩；使困惑',
  'stun': '使晕倒；使震惊',
  'stunning': '惊人的；漂亮的',
  'stupid': '愚蠢的；笨拙的',
  'stupidity': '愚蠢；愚笨',
  'sturdy': '结实的；健壮的',
  'style': '风格；式样',
  'stylish': '时髦的；有风格的',
  'subject': '主题；科目',
  'submarine': '潜艇；水下的',
  'submerge': '浸没；淹没',
  'submission': '服从；提交',
  'submissive': '服从的；谦卑的',
  'subordination': '从属；服从',
  'subscribe': '订阅；同意',
  'subscription': '订阅；捐助',
  'subscriber': '订阅者；捐助者',
  'subsidize': '补贴；资助',
  'supply': '供应；供给',
  'supplier': '供应商；供应者',
  'support': '支持；扶持',
  'supportive': '支持的；支持的',
  'supporter': '支持者；拥护者',
  'suppose': '假设；认为',
  'supposition': '假设；猜想',
  'supposedly': '据称；似乎',
  'suppression': '压制；镇压',
  'suppressive': '压制的；抑制的',
  'supreme': '至高的；最高的',
  'sure': '确信的；无疑的',
  'supremacy': '至高无上；霸权',
  'surf': '冲浪；海浪',
  'surfing': '冲浪；冲浪运动',
  'surface': '表面；出现',
  'surgery': '外科；手术',
  'surgical': '外科的；手术的',
  'surgeon': '外科医生',
  'surname': '姓',
  'surroundings': '环境；周围',
  'surplus': '剩余；过剩',
  'surprise': '惊讶；惊喜',
  'surrender': '投降；放弃',
  'surround': '围绕；包围',
  'surveillance': '监视；监督',
  'survey': '调查；测量',
  'survive': '幸存；生存',
  'survival': '生存；幸存',
  'survivor': '幸存者；幸存物',
  'suspect': '怀疑；嫌疑犯',
  'suspend': '悬挂；暂停',
  'suspension': '悬挂；暂停；悬浮',
  'somehow': '不知怎的；以某种方式',
  'someone': '某人；有人',
  'something': '某物；某事',
  'sometime': '某个时间',
  'sometimes': '有时',
  'somewhat': '稍微；有点',
  'somewhere': '某处',
  'son': '儿子；子孙',
  'song': '歌曲；歌',
  'soon': '不久；很快',
  'soothe': '安慰；使平静',
  'sophistication': '复杂；世故',
  'sore': '疼痛；痛处',
  'sorrow': '悲伤；悲哀',
  'sorrowful': '悲伤的；悲哀的',
  'sorry': '抱歉；遗憾',
  'sort': '种类；类别',
  'soul': '灵魂；精神',
  'sound': '声音；听起来',
  'soup': '汤；羹',
  'sour': '酸的；酸味的',
  'source': '来源；源头',
  'south': '南方；南部',
  'southern': '南方的；南部的',
  'southeast': '东南；东南部',
  'southeastern': '东南的；东南部的',
  'southwest': '西南；西南部',
  'southwestern': '西南的；西南部的',
  'souvenir': '纪念品；纪念物',
  'sovereign': '君主；主权',
  'sovereignty': '主权；统治权',
  'sow': '播种；散布',
  'space': '空间；太空',
  'spacious': '宽敞的；广阔的',
  'spatial': '空间的；空间性的',
  'spaceship': '宇宙飞船',
  'spacecraft': '航天器；宇宙飞船',
  'spade': '铲子；铁锹',
  'spaghetti': '意大利面',
  'span': '跨度；一段时间',
  'spare': '多余的；节省的',
  'sparingly': '节约地；谨慎地',
  'spark': '火花；激发',
  'sparkle': '闪耀；闪光',
  'speak': '说话；讲',
  'speaker': '说话者；扬声器',
  'spear': '矛；枪',
  'special': '特别的；特殊的',
  'specialize': '专门研究；专攻',
  'specialization': '专门化；专业',
  'specialist': '专家；专科医生',
  'specialty': '专业；专长',
  'specially': '特别地；专门地',
  'species': '物种；种类',
  'specific': '具体的；特定的',
  'specifically': '具体地；特别地',
  'specify': '指定；详细说明',
  'specification': '规格；说明书',
  'specimen': '样本；标本',
  'spectacle': '景象；奇观',
  'spectacular': '壮观的；引人注目的',
  'spectator': '观众；旁观者',
  'speech': '演讲；说话',
  'speechless': '无言的；哑口无言的',
  'speed': '速度；迅速',
  'speeding': '超速；加速',
  'spell': '拼写；咒语',
  'spend': '花费；度过',
  'sphere': '球体；领域',
  'spice': '香料；调味品',
  'spider': '蜘蛛；网',
  'spill': '溢出；洒落',
  'spin': '旋转；纺纱',
  'spine': '脊柱；书脊',
  'spinal': '脊柱的；脊椎的',
  'spiral': '螺旋；螺旋形的',
  'spirit': '精神；灵魂',
  'spiritual': '精神的；宗教的',
  'spit': '吐痰；喷出',
  'spite': '恶意；怨恨',
  'splash': '溅泼；水花',
  'splendid': '壮丽的；辉煌的',
  'splendor': '光辉；壮丽',
  'splendour': '光辉；壮丽',
  'split': '分裂；分开',
  'spoil': '损坏；溺爱',
  'spokesman': '发言人；代言人',
  'spokeswoman': '女发言人；女代言人',
  'spokesperson': '发言人；代言人',
  'sponge': '海绵；海绵状物',
  'spongy': '海绵状的；松软的',
  'sponsor': '赞助人；发起人',
  'sponsorship': '赞助；发起',
  'spontaneity': '自发性；自然',
  'spoon': '勺子；一勺',
  'spoonful': '一勺的量；一勺',
  'sport': '运动；体育',
  'sportsman': '运动员；运动家',
  'sportswoman': '女运动员；女运动家',
  'spot': '地点；斑点',
  'skirt': '裙子；边缘',
  'skull': '头骨；颅骨',
  'sky': '天空；苍穹',
  'skyline': '天际线；轮廓线',
  'skyscraper': '摩天大楼；高楼',
  'slack': '松懈；松弛',
  'slam': '砰地关上；猛击',
  'slap': '拍打；掌掴',
  'slash': '砍；斜线',
  'slaughter': '屠杀；屠宰',
  'slave': '奴隶；仆人',
  'slavery': '奴隶制；奴役',
  'sleep': '睡眠；睡觉',
  'sleepy': '困倦的；欲睡的',
  'sleepiness': '困倦；睡意',
  'sleeve': '袖子；套筒',
  'slender': '苗条的；细长的',
  'slice': '切片；部分',
  'slide': '滑动；滑落',
  'slight': '轻微的；纤细的',
  'slim': '苗条的；细长的',
  'slip': '滑倒；滑动',
  'slippery': '滑的；光滑的',
  'slipper': '拖鞋；便鞋',
  'slogan': '口号；标语',
  'slope': '斜坡；倾斜',
  'slot': '槽；狭缝',
  'slow': '慢的；缓慢的',
  'slum': '贫民窟；贫民区',
  'slump': '暴跌；萧条',
  'small': '小的；微小的',
  'smart': '聪明的；时髦的',
  'smartphone': '智能手机',
  'smash': '打碎；猛击',
  'smelly': '有臭味的；难闻的',
  'smuggler': '走私者；偷运者',
  'smell': '气味；嗅',
  'smoggy': '烟雾的；烟雾弥漫的',
  'smile': '微笑；笑容',
  'smoky': '烟熏的；烟雾的',
  'smog': '烟雾；烟雾污染',
  'smoke': '烟；吸烟',
  'smuggling': '走私；偷运',
  'smooth': '光滑的；顺利的',
  'smuggle': '走私；偷运',
  'snack': '小吃；点心',
  'snail': '蜗牛；缓慢的',
  'snake': '蛇；蜿蜒的',
  'snap': '快照；猛咬',
  'snobbish': '势利的；傲慢的',
  'snatch': '夺取；抢夺',
  'snowy': '雪的；多雪的',
  'sneak': '偷偷摸摸；潜行',
  'sniff': '嗅；闻',
  'snob': '势利鬼；自命不凡的人',
  'snow': '雪；下雪',
  'so': '如此；那么',
  'soak': '浸泡；湿透',
  'soap': '肥皂；香皂',
  'soar': '高飞；猛增',
  'sob': '啜泣；抽泣',
  'so-called': '所谓的；号称的',
  'soccer': '足球',
  'social': '社会的；社交的',
  'socialize': '社交；交际',
  'sociable': '好交际的；友好的',
  'society': '社会；社团',
  'socialist': '社会主义的；社会主义者',
  'socialism': '社会主义',
  'sociologist': '社会学家',
  'sociology': '社会学',
  'sock': '短袜；袜子',
  'socket': '插座；孔',
  'soda': '苏打水；碳酸饮料',
  'sodium': '钠；苏打',
  'sofa': '沙发',
  'soft': '软的；柔和的',
  'soften': '软化；使柔和',
  'software': '软件',
  'soil': '土壤；土地',
  'solar': '太阳的；日光的',
  'soldier': '士兵；军人',
  'sole': '脚底；单的',
  'solely': '单独地；唯一地',
  'solemn': '庄重的；严肃的',
  'solemnity': '庄重；严肃',
  'solicit': '请求；征求',
  'solicitor': '律师；代理人',
  'solid': '坚固的；实心的',
  'solidity': '坚固；密度',
  'solidify': '凝固；使坚固',
  'solidarity': '团结；团结一致',
  'solitude': '孤独；独处',
  'solo': '独奏；单独的',
  'solve': '解决；解答',
  'solution': '解决方案；解决法',
  'solvent': '溶剂；有溶解力的',
  'soluble': '可溶解的；可解决的',
  'some': '一些；某个',
  'somebody': '某人；任何人',
  'suspense': '悬念；紧张',
  'suspicion': '怀疑；嫌疑',
  'suspicious': '可疑的；怀疑的',
  'sustainable': '可持续的；可维持的',
  'sustainability': '可持续性；持续性',
  'swallow': '吞咽；燕子',
  'swamp': '沼泽；湿地',
  'sweater': '毛衣；绒衣',
  'swap': '交换；调换',
  'sway': '摇摆；影响',
  'swear': '发誓；诅咒',
  'sweat': '出汗；汗水',
  'sweep': '扫除；席卷',
  'sweet': '甜的；美好的',
  'swell': '膨胀；增长',
  'swift': '快的；敏捷的',
  'swim': '游泳；游动',
  'swimming': '游泳；游水',
  'swimmer': '游泳者；游泳运动员',
  'swing': '摆动；秋千',
  'swipe': '轻扫；擦过',
  'switch': '开关；转换',
  'sword': '剑；刀',
  'symbol': '象征；符号',
  'symbolic': '象征性的；标志性的',
  'symmetry': '对称；匀称',
  'symmetric': '对称的；匀称的',
  'symmetrical': '对称的；匀称的',
  'sympathy': '同情；同情心',
  'sympathetic': '同情的；共鸣的',
  'sympathize': '同情；共鸣',
  'symphony': '交响乐；交响曲',
  'symposium': '座谈会；讨论会',
  'symptom': '症状；征兆',
  'synthetic': '合成的；人造的',
  'synthesize': '合成；综合',
  'syndicate': '辛迪加；垄断组织',
  'systematic': '系统的；有计划的',
  'systematically': '系统地；有计划地',
  'syndrome': '综合症；症状群',
  'synonym': '同义词；同义词',
  'synthesis': '综合；合成',
  'system': '系统；体制',
  'table': '桌子；表格',
  'tablet': '药片；平板',
  'taboo': '禁忌；忌讳',
  'tack': '平头钉；把柄',
  'tact': '机智；圆滑',
  'tactful': '机智的；圆滑的',
  'tactic': '策略；战术',
  'tag': '标签；标记',
  'tail': '尾巴；尾部',
  'tailor': '裁缝；裁剪',
  'take': '拿；取',
  'takeoff': '起飞；脱衣',
  'tale': '故事；传说',
  'talent': '才能；天才',
  'talk': '谈话；谈论',
  'tall': '高的；长',
  'tame': '驯服的；驯化的',
  'tan': '晒黑；皮革',
  'tangle': '纠缠；混乱',
  'tank': '坦克；油罐',
  'tanker': '油轮；油罐车',
  'tap': '水龙头；轻触',
  'tape': '胶带；录音带',
  'target': '目标；靶子',
  'tariff': '关税；税率',
  'task': '任务；工作',
  'taste': '味道；品味',
  'tax': '税；征税',
  'taxi': '出租车；计程车',
  'tea': '茶；茶叶',
  'teach': '教；教导',
  'team': '团队；队伍',
  'tear': '眼泪；撕裂',
  'tease': '戏弄；挑逗',
  'technical': '技术的；专业的',
  'technique': '技术；技巧',
  'technology': '技术；工艺',
  'teen': '青少年；十几岁',
  'teenager': '青少年；十几岁的人',
  'telecommunications': '电信；通信',
  'telephone': '电话；打电话',
  'phone': '电话；打电话',
  'telescope': '望远镜；望远镜',
  'television': '电视；电视机',
  'tv': '电视；电视机',
  'tell': '告诉；讲述',
  'teller': '出纳员；讲述者',
  'temperament': '气质；性情',
  'temperature': '温度；气温',
  'temple': '庙宇；寺院',
  'tempo': '节奏；速度',
  'temporal': '时间的；暂时的',
  'temporarily': '暂时地；临时地',
  'ten': '十；十个',
  'temptation': '诱惑；引诱',
  'tenant': '房客；承租人',
  'tendency': '倾向；趋势',
  'spotlight': '聚光灯；焦点',
  'spouse': '配偶；夫妻',
  'sprawl': '蔓延；伸展',
  'spray': '喷雾；喷洒',
  'spread': '传播；展开',
  'spring': '春天；弹簧',
  'sprinkle': '撒；点缀',
  'spur': '刺激；马刺',
  'spy': '间谍；监视',
  'squad': '小队；班',
  'square': '广场；平方',
  'squeeze': '挤压；紧握',
  'stab': '刺；戳',
  'stable': '稳定的；马厩',
  'stabilize': '稳定；使稳固',
  'stack': '堆叠；垛',
  'stadium': '体育场；运动场',
  'staff': '职员；全体员工',
  'stage': '舞台；阶段',
  'stagger': '蹒跚；交错',
  'stagnate': '停滞；不发展',
  'stagnation': '停滞；不景气',
  'stain': '污点；染色',
  'stainless': '不锈钢；无瑕疵',
  'stair': '楼梯；台阶',
  'staircase': '楼梯；楼梯间',
  'stake': '桩；赌注',
  'stale': '陈旧的；不新鲜的',
  'stalk': '茎',
  'stall': '货摊；拖延',
  'stammer': '口吃；结巴',
  'stamp': '邮票；盖章',
  'stance': '立场；姿态',
  'stand': '站立；摊位',
  'standard': '标准；水准',
  'standardize': '标准化；使标准化',
  'standardization': '标准化；规范化',
  'standby': '备用；待命',
  'standpoint': '立场；观点',
  'staple': '主要产品',
  'stapler': '订书机',
  'star': '星星；明星',
  'starry': '星星的；繁星点点的',
  'stare': '凝视；盯着看',
  'stark': '裸露的；无情的',
  'start': '开始；起点',
  'starter': '启动器；发起者',
  'startle': '惊吓；使惊跳',
  'starve': '饿死；饿得要命',
  'starvation': '饥饿；饿死',
  'state': '国家；状态',
  'statement': '声明；陈述',
  'statesman': '政治家；国务活动家',
  'static': '静态的；静电',
  'station': '车站；电台',
  'stationary': '静止的；不动的',
  'stationery': '文具；信纸',
  'statistic': '统计；统计数据',
  'statistical': '统计的；统计学的',
  'statue': '雕像；塑像',
  'statutory': '法定的；规定的',
  'steamer': '蒸汽机；轮船',
  'status': '地位；状态',
  'steadily': '稳定地；稳步地',
  'steamy': '蒸热的；多雾的',
  'stay': '停留；暂住',
  'steady': '稳定的；稳固的',
  'steak': '牛排；肉片',
  'steal': '偷；窃取',
  'steam': '蒸汽；蒸',
  'steel': '钢；钢铁',
  'steep': '陡峭的；急剧的',
  'steer': '驾驶；引导',
  'step': '脚步；步骤',
  'stereotype': '刻板印象；模式',
  'stern': '严厉的；船尾',
  'steward': '乘务员；管家',
  'stewardess': '女乘务员；女管家',
  'stick': '棍；粘贴',
  'sticky': '粘性的；粘稠的',
  'stiff': '僵硬的；生硬的',
  'stiffen': '使僵硬；变硬',
  'stifle': '抑制；窒息',
  'stigma': '耻辱；污名',
  'still': '仍然；静止的',
  'stimulation': '刺激；激励',
  'stimulus': '刺激物；促进因素',
  'stimulant': '兴奋剂；刺激剂',
  'sting': '刺痛；螫',
  'stipulate': '规定；明确指出',
  'stipulation': '规定；条款',
  'stir': '搅拌；激起',
  'stitch': '针线；缝纫',
  'stock': '库存；股票',
  'stocking': '长袜；存货',
  'stomach': '胃；腹部',
  'stone': '石头；宝石',
  'stool': '凳子；厕所',
  'stoop': '弯腰；屈服',
  'stop': '停止；阻止',
  'tend': '照料；倾向',
  'tension': '紧张；张力',
  'tender': '温柔的；易受伤的',
  'tennis': '网球',
  'tense': '时态；紧张的',
  'tent': '帐篷',
  'tenure': '任期',
  'term': '期限；学期',
  'terminal': '终端；末端的',
  'termination': '终止；结束',
  'terribly': '非常；可怕地',
  'terrace': '梯田；阳台',
  'territorial': '领土的；领地的',
  'terrain': '地形；地势',
  'terrify': '使害怕；恐吓',
  'terrorism': '恐怖主义',
  'terrorist': '恐怖分子',
  'terrible': '可怕的；很糟的',
  'terrific': '极好的；了不起的',
  'territory': '领土；地域',
  'terror': '恐怖；惊吓',
  'tertiary': '第三的；三级',
  'test': '测试；考验',
  'testify': '作证；证明',
  'testimony': '证词；证言',
  'text': '文本；正文',
  'textbook': '教科书',
  'textile': '纺织品',
  'thankful': '感激的',
  'texture': '质地；纹理',
  'theatrical': '戏剧的；做作的',
  'than': '比',
  'thank': '感谢',
  'thanksgiving': '感恩节',
  'that': '那；那个',
  'the': '这；那个',
  'theater': '剧院',
  'theatre': '剧院',
  'theft': '盗窃',
  'their': '他们的',
  'theirs': '他们的',
  'them': '他们',
  'theme': '主题；题目',
  'themselves': '他们自己',
  'then': '那时；然后',
  'theory': '理论；学说',
  'theoretical': '理论的；理论上的',
  'therapy': '治疗；疗法',
  'therapist': '治疗师',
  'therapeutic': '治疗的；有益的',
  'there': '那里；在那里',
  'therefore': '因此；所以',
  'thermal': '热的；热量的',
  'thermometer': '温度计',
  'these': '这些',
  'thesis': '论文；论题',
  'they': '他们',
  'thick': '厚的；浓的',
  'thief': '小偷',
  'thigh': '大腿',
  'thin': '薄的；瘦的',
  'thing': '东西；事情',
  'think': '思考；认为',
  'thinking': '思考；想法',
  'third': '第三的；三分之一',
  'thirst': '渴望；口渴',
  'thirsty': '口渴的；渴望的',
  'thirteen': '十三',
  'thirty': '三十',
  'this': '这个；这时',
  'thorn': '荆棘；刺',
  'thorny': '多刺的；棘手的',
  'those': '那些',
  'though': '虽然；尽管',
  'thought': '思想；想法',
  'thoughtful': '深思的；体贴的',
  'thousand': '一千',
  'thread': '线；线索',
  'threat': '威胁；恐吓',
  'threaten': '威胁；恐吓',
  'three': '三',
  'thrift': '节俭；节约',
  'thrifty': '节俭的；节约的',
  'thrill': '兴奋；激动',
  'thriller': '惊悚片；惊悚小说',
  'throat': '喉咙；咽喉',
  'throne': '王座；宝座',
  'through': '穿过；通过',
  'throughout': '贯穿；遍及',
  'throw': '扔；抛',
  'thrust': '推；推进',
  'thumb': '拇指',
  'thunder': '雷声；轰鸣',
  'thunderous': '雷鸣般的；响亮的',
  'thursday': '星期四',
  'thus': '因此；于是',
  'tick': '滴答声；勾选',
  'ticket': '票；券',
  'tickle': '挠痒；逗笑',
  'tide': '潮汐；潮流',
  'tidal': '潮汐；潮水',
  'tidy': '整洁；整齐',
  'tie': '系；纽带',
  'tiger': '老虎',
  'tigress': '雌虎',
  'tight': '紧的；紧密',
  'tile': '瓷砖；瓦片',
  'tighten': '拧紧；拉紧',
  'till': '直到；直到那时',
  'tilt': '倾斜；倾向',
  'timely': '及时的；适时的',
  'timing': '时机；时间安排',
  'timber': '木材；木料',
  'time': '时间；时代',
  'timid': '胆小的；羞怯的',
  'tired': '疲倦的；累的',
  'tiring': '累人的；使人疲倦的',
  'tireless': '不知疲倦的；不懈的',
  'tiresome': '令人厌倦的；讨厌的',
  'tin': '锡；罐头',
  'tiny': '微小的；极小的',
  'tip': '尖端；小费',
  'tire': '轮胎；使疲劳',
  'tissue': '组织；纸巾',
  'title': '标题；头衔',
  'to': '到；向',
  'toast': '烤面包片；祝酒',
  'tobacco': '烟草；烟叶',
  'today': '今天',
  'toe': '脚趾',
  'together': '一起；共同',
  'toil': '辛勤劳动；苦工',
  'tolerance': '容忍；宽容',
  'tolerant': '宽容的；容忍的',
  'tolerable': '可容忍的；尚可的',
  'toilet': '厕所；洗手间',
  'tonnage': '吨位；总吨数',
  'token': '象征；代币',
  'toll': '通行费；伤亡',
  'tomato': '番茄；西红柿',
  'tomorrow': '明天',
  'ton': '吨；大量',
  'tone': '音调；语气',
  'tongue': '舌头；语言',
  'tonight': '今晚',
  'too': '也；太',
  'tool': '工具；用具',
  'tooth': '牙齿',
  'top': '顶部；最高',
  'topic': '主题；话题',
  'topple': '推翻；倒塌',
  'torch': '火炬；火把',
  'tornado': '龙卷风',
  'torture': '折磨；拷问',
  'toss': '扔；掷',
  'total': '总共；全部',
  'touch': '触摸；接触',
  'tough': '坚韧的；困难的',
  'tour': '旅行；游览',
  'tourism': '旅游业；观光',
  'tourist': '游客；旅客',
  'tournament': '锦标赛；比赛',
  'tow': '拖；牵引',
  'toward': '朝；向',
  'towel': '毛巾',
  'tower': '塔；高楼',
  'town': '镇；城市',
  'township': '乡镇；镇区',
  'toxic': '有毒的；有害的',
  'toy': '玩具',
  'track': '轨道；路径',
  'tract': '地带；区域',
  'tractor': '拖拉机',
  'trade': '贸易；交易',
  'trademark': '商标；标志',
  'tradition': '传统；习俗',
  'traditional': '传统的；惯例的',
  'traffic': '交通；运输',
  'trafficking': '走私；非法交易',
  'tragedy': '悲剧；惨事',
  'tragic': '悲剧的；悲惨的',
  'tragical': '悲剧的；悲惨的',
  'trail': '小径；痕迹',
  'trailer': '拖车；拖斗',
  'train': '火车；训练',
  'trainer': '教练；训练器',
  'training': '训练；培养',
  'tram': '有轨电车',
  'tranquil': '平静的；宁静的',
  'tranquility': '宁静；平静',
  'transaction': '交易；事务',
  'transcend': '超越；超出',
  'transference': '转移；转让',
  'transcript': '副本；记录',
  'transfer': '转移；调动',
  'transform': '改变；转换',
  'transformation': '转变；变化',
  'transient': '短暂的；转瞬即逝的',
  'transistor': '晶体管',
  'vapor': '蒸汽；蒸气',
  'vapour': '蒸汽；蒸气',
  'various': '多样的；各种的',
  'variety': '种类；多样性',
  'vary': '变化；不同',
  'variation': '变化；变种',
  'variant': '变种；变化形式',
  'vegetable': '蔬菜；植物',
  'vegetarian': '素食主义者',
  'vegetation': '植被；植物',
  'vehicle': '车辆；交通工具',
  'veil': '面纱；掩饰',
  'vein': '静脉；纹理',
  'velocity': '速度；速率',
  'velvet': '天鹅绒；柔软',
  'vendor': '小贩；卖主',
  'vent': '通风口；排气孔',
  'ventilate': '通风；使通风',
  'ventilation': '通风；通风系统',
  'venue': '地点；场所',
  'verb': '动词；行为',
  'verbal': '口头的；言语的',
  'verdict': '裁决；判决',
  'verge': '边缘；边界',
  'verification': '核实；证实',
  'versatile': '多才多艺的；多用途的',
  'verse': '诗；韵文',
  'version': '版本；翻译',
  'versus': '与...相对；对抗',
  'vertical': '垂直的；纵向的',
  'very': '非常；极其',
  'vessel': '容器；船舶',
  'vest': '背心；服装',
  'veteran': '老手；老兵',
  'veto': '否决；否决权',
  'via': '经由；通过',
  'vibrate': '振动；颤动',
  'vibration': '振动；颤动',
  'vice': '缺点；恶习',
  'vicinity': '邻近；附近',
  'vicious': '恶毒的；恶劣的',
  'victimize': '使受害；使受苦',
  'victim': '受害者；牺牲品',
  'victory': '胜利；成功',
  'victorious': '胜利的；得胜的',
  'video': '视频；录像',
  'view': '看法；风景',
  'viewpoint': '观点；视角',
  'vigor': '活力；精力',
  'vigour': '活力；精力',
  'vigorous': '精力充沛的；有力的',
  'village': '村庄；乡村',
  'villager': '村民；村民',
  'vinegar': '醋；酸味',
  'violate': '违反；侵犯',
  'violation': '违反；违规',
  'violent': '暴力的；猛烈的',
  'violence': '暴力；暴行',
  'violin': '小提琴',
  'violinist': '小提琴家',
  'virgin': '处女；未经使用的',
  'virginity': '贞节；纯洁',
  'virtual': '虚拟的；实质上的',
  'virtually': '几乎；实际上',
  'virtuous': '道德的；纯洁的',
  'virus': '病毒',
  'visa': '签证',
  'visible': '看得见的；明显的',
  'visibility': '能见度；可见性',
  'vision': '视力；远见',
  'visionary': '有远见的；空想的',
  'visit': '访问；参观',
  'visitor': '访问者；参观者',
  'visual': '视觉的；看得见的',
  'visualize': '想象；使视觉化',
  'vitality': '活力；生命力',
  'vitamin': '维生素',
  'vocabulary': '词汇；词汇量',
  'vocal': '嗓音的；大声的',
  'vocation': '职业；天职',
  'vocational': '职业的；职业培训的',
  'vogue': '时尚；流行',
  'voice': '声音；发言权',
  'void': '空虚；无效',
  'volatility': '易变性；波动性',
  'volcano': '火山',
  'volcanic': '火山的；多火的',
  'volleyball': '排球',
  'volt': '伏特；电压单位',
  'volume': '体积；卷',
  'voluminous': '庞大的；多卷的',
  'volunteer': '志愿者；志愿',
  'vote': '投票；选票',
  'voter': '投票者；选举人',
  'voucher': '凭证；收据',
  'vow': '誓言；誓约',
  'voyage': '航行；旅行',
  'vulgar': '粗俗的；通俗的',
  'vulnerability': '脆弱；易受伤',
  'wage': '工资；报酬',
  'transit': '运输；经过',
  'transition': '过渡；转变',
  'transitional': '过渡期的；过渡的',
  'translate': '翻译；转化',
  'translation': '翻译；译文',
  'translator': '翻译者；译者',
  'transmission': '传输；传播',
  'transmitter': '发射机；发送者',
  'transparency': '透明度；透明性',
  'transplant': '移植；移栽',
  'transplantation': '移植手术；移植',
  'transportation': '运输；交通',
  'transport': '运输；运输工具',
  'trap': '陷阱；捕捉',
  'trash': '垃圾；废物',
  'trauma': '创伤；心理创伤',
  'traumatic': '创伤的；引起心理创伤的',
  'travel': '旅行；移动',
  'tray': '托盘；盘子',
  'tread': '轮胎花纹；行走',
  'treasure': '宝藏；珍宝',
  'treasury': '国库；宝库',
  'treasurer': '财务主管；出纳',
  'treat': '对待；治疗',
  'treatment': '治疗；对待',
  'treaty': '条约；协定',
  'tree': '树；树木',
  'trek': '长途跋涉；旅行',
  'tremble': '颤抖；发抖',
  'tremendous': '巨大的；惊人的',
  'trench': '战壕；沟渠',
  'trend': '趋势；倾向',
  'trial': '审判；试验',
  'triangle': '三角形；三角',
  'triangular': '三角形的；三角的',
  'tribe': '部落；民族',
  'tribal': '部落的；部族的',
  'tribune': '讲台；发言人',
  'tribute': '颂词；贡品',
  'trick': '诡计；把戏',
  'tricky': '狡猾的；棘手的',
  'trickle': '细流；慢慢流',
  'trifle': '琐事；小事',
  'triumphant': '胜利的；得意的',
  'trillion': '万亿；兆',
  'trim': '修剪；整理',
  'trip': '旅行；失足',
  'triple': '三倍的；三重的',
  'triumph': '胜利；成功',
  'trolley': '手推车；电车',
  'troop': '军队；一群人',
  'tropical': '热带的；炎热的',
  'trophy': '奖杯；奖品',
  'troublesome': '麻烦的；令人烦恼的',
  'tropic': '回归线；热带地区',
  'truly': '真正地；确实地',
  'trouble': '麻烦；烦恼',
  'trousers': '裤子；长裤',
  'truck': '卡车；货车',
  'true': '真实的；真正的',
  'trumpet': '喇叭；小号',
  'trustee': '受托人；监护人',
  'trunk': '树干；大衣箱',
  'truthful': '诚实的；真实的',
  'trust': '信任；信赖',
  'trying': '艰难的；令人烦恼的',
  'truth': '真理；真实',
  'try': '尝试；试图',
  'tub': '浴盆；桶',
  'tube': '管子；试管',
  'tuck': '塞入；卷起',
  'tuesday': '星期二',
  'tug': '拖；拉',
  'tuition': '学费；教学',
  'tumble': '跌倒；翻滚',
  'tumor': '肿瘤；瘤',
  'tumour': '肿瘤；瘤',
  'tune': '曲调；调音',
  'tunnel': '隧道；地道',
  'turbulent': '动荡的；狂暴的',
  'turbulence': '动荡；混乱',
  'turkey': '火鸡；土耳其',
  'turmoil': '混乱；动荡',
  'turn': '转动；转向',
  'turnout': '出席人数；结果',
  'tutorial': '辅导；教程',
  'turnover': '营业额；周转',
  'twelfth': '第十二',
  'twentieth': '第二十',
  'turtle': '海龟；乌龟',
  'tutor': '导师；家庭教师',
  'typist': '打字员',
  'twelve': '十二',
  'twenty': '二十',
  'twice': '两次；两倍',
  'twin': '双胞胎；孪生',
  'twist': '扭曲；旋转',
  'two': '二；两个',
  'type': '类型；打字',
  'typewriter': '打字机',
  'typical': '典型的；代表性的',
  'tyre': '轮胎',
  'ugly': '丑陋的；难看的',
  'ugliness': '丑陋；丑恶',
  'ultimately': '最终；根本地',
  'ultra': '超；极端的',
  'umbrella': '伞',
  'unanimous': '一致的；无异议的',
  'uncertain': '不确定的；不肯定的',
  'uncertainty': '不确定；疑虑',
  'uncle': '叔叔',
  'uncover': '揭露；揭开',
  'under': '下面；在...下面',
  'underdeveloped': '欠发达的；不发达的',
  'underestimate': '低估',
  'undergraduate': '大学生',
  'underground': '地下的；秘密的',
  'underline': '在...下面画线；强调',
  'underlie': '位于...下面；构成...的基础',
  'underneath': '下面；在...下面',
  'understand': '理解；明白',
  'understanding': '理解；谅解',
  'undertaking': '承担；事业',
  'underwear': '内衣',
  'undo': '解开；撤销',
  'undoubtedly': '毫无疑问地',
  'uneasy': '不安的；不舒服的',
  'unemployed': '失业的',
  'unemployment': '失业',
  'unfold': '展开；揭示',
  'uniformity': '一致性；统一性',
  'unify': '统一；使一致',
  'unilateral': '单方面的；单边的',
  'union': '联盟；联合',
  'unique': '独特的；独一无二的',
  'unit': '单位；单元',
  'unite': '联合；团结',
  'unity': '统一；团结',
  'universe': '宇宙',
  'universal': '普遍的；全体的',
  'university': '大学',
  'unleash': '释放；解开',
  'unless': '除非；如果不',
  'until': '直到；在...之前',
  'unveil': '揭开；公布',
  'up': '向上；起来',
  'update': '更新；修订',
  'upgrade': '升级；提升',
  'uphold': '支持；维护',
  'upload': '上传',
  'upon': '在...之上；关于',
  'upper': '上面的；上部的',
  'upright': '直立的；正直的',
  'uprising': '起义；暴动',
  'upset': '翻倒；不安',
  'upstairs': '楼上',
  'up-to-date': '最新的；现代化的',
  'upward': '向上；上升的',
  'upwards': '向上；上升地',
  'uranium': '铀',
  'urban': '城市的；都市的',
  'urge': '催促；强烈要求',
  'urbanize': '使城市化',
  'urbanization': '城市化',
  'urgent': '紧急的；急迫的',
  'urgency': '紧急；紧迫',
  'urine': '尿液',
  'urinate': '排尿',
  'us': '我们；我们这些人',
  'usage': '使用；用法',
  'use': '使用；用途',
  'user': '用户',
  'useful': '有用的；有益的',
  'useless': '无用的；无价值的',
  'used': '用过的；旧的',
  'usual': '通常的；惯例的',
  'usually': '通常；经常',
  'utility': '效用；公共事业',
  'utilise': '利用；使用',
  'utilization': '利用；使用',
  'utilisation': '利用；使用',
  'utmost': '极度的；最大的',
  'utter': '完全的；彻底的',
  'utterly': '完全地；彻底地',
  'vacant': '空缺的；空虚的',
  'vacancy': '空缺；空地',
  'vacation': '假期；休假',
  'vaccine': '疫苗',
  'vaccinate': '接种疫苗',
  'vaccination': '疫苗接种',
  'vacuum': '真空；空虚',
  'vain': '徒劳的；虚荣的',
  'vanity': '虚荣；自负',
  'validate': '验证；确认',
  'validity': '有效性；合法性',
  'valley': '山谷；河谷',
  'value': '价值；重要性',
  'valuable': '宝贵的；有价值的',
  'valve': '阀门；瓣膜',
  'van': '货车；面包车',
  'year': '年；年份',
  'yearly': '每年的；年度的',
  'yearning': '渴望；向往',
  'yell': '喊叫；叫喊',
  'yearn': '渴望；向往',
  'yellow': '黄色；淡黄',
  'yeah': '是的；对',
  'yes': '是的；对',
  'yesterday': '昨天；昨日',
  'yet': '然而；但是',
  'yoga': '瑜伽；瑜伽术',
  'yoghurt': '酸奶；优格',
  'you': '你；你们',
  'young': '年轻；年少',
  'youngster': '年轻人；少年',
  'your': '你的；你们的',
  'yours': '你的；你们的',
  'yourself': '你自己；你们自己',
  'yourselves': '你们自己；你们各自',
  'youth': '青春；青年',
  'zeal': '热情；热忱',
  'youthful': '年轻的；青春的',
  'zealous': '热心的；热情的',
  'zero': '零；零点',
  'zigzag': '之字形；曲折',
  'zip': '拉链；拉紧',
  'zipper': '拉链；拉锁',
  'zone': '地区；区域',
  'zoological': '动物学的；动物园的',
  'zoo': '动物园；动物园',
  'zoology': '动物学；动物学',
  'zoom': '急速移动；放大',
  'white': '白色；纯洁',
  'who': '谁',
  'whoever': '无论谁',
  'whole': '整个；全部',
  'wholly': '完全地',
  'wholesale': '批发；大规模的',
  'wholesome': '健康的；有益的',
  'whom': '谁（宾格）',
  'whose': '谁的',
  'why': '为什么',
  'wicked': '邪恶的；恶劣的',
  'wide': '宽的；广阔的',
  'width': '宽度',
  'widen': '变宽；扩大',
  'widespread': '普遍的；广泛的',
  'widow': '寡妇',
  'widower': '鳏夫',
  'wield': '挥舞；运用',
  'wife': '妻子',
  'wild': '野生的；狂野的',
  'wilderness': '荒野；荒地',
  'wildlife': '野生动物',
  'will': '意志；意愿',
  'willpower': '意志力',
  'win': '赢得；胜利',
  'wind': '风',
  'window': '窗户',
  'wine': '酒',
  'wing': '翅膀；翼',
  'wink': '眨眼；示意',
  'winter': '冬天',
  'wipe': '擦；抹去',
  'wire': '电线；金属丝',
  'wise': '聪明的；明智的',
  'wish': '愿望；希望',
  'wit': '智慧；机智',
  'witch': '女巫；巫婆',
  'with': '和；用',
  'withdraw': '撤回；提取',
  'wither': '枯萎；凋谢',
  'withhold': '拒绝；保留',
  'within': '在...之内',
  'without': '没有；在外面',
  'wolf': '狼',
  'woman': '女人；妇女',
  'wonder': '奇迹；惊奇',
  'wonderful': '精彩的；了不起的',
  'wood': '木头；树林',
  'wooden': '木制的；木头的',
  'wool': '羊毛；绒线',
  'woolen': '羊毛制的',
  'woollen': '羊毛制的',
  'word': '词；言语',
  'wording': '措辞；用词',
  'work': '工作；劳动',
  'worker': '工人；劳动者',
  'workforce': '劳动力',
  'workout': '锻炼；训练',
  'workshop': '车间；研讨会',
  'world': '世界；地球',
  'worldwide': '全世界的',
  'worm': '虫；蠕虫',
  'worry': '担心；忧虑',
  'worried': '担心的；忧虑的',
  'worse': '更糟的；更坏的',
  'worship': '崇拜；敬仰',
  'worst': '最坏的；最差的',
  'willing': '愿意的；乐意的',
  'willingness': '愿意；乐意',
  'winner': '赢家；获胜者',
  'windy': '多风的；有风的',
  'winery': '酒厂',
  'wisdom': '智慧；明智',
  'witty': '机智的；风趣的',
  'withdrawal': '撤回；提取',
  'worth': '价值；值得',
  'worthless': '无价值的；无用的',
  'worthwhile': '值得的；有价值的',
  'worthiness': '价值；值得',
  'worthy': '值得的；有价值的',
  'wrapping': '包装；包裹',
  'would': '将会；愿意',
  'wreckage': '残骸；废墟',
  'wrestling': '摔跤；角力',
  'wrap': '包裹；卷',
  'wreck': '破坏；失事',
  'wrench': '扳手；猛扭',
  'wrestle': '摔跤；斗争',
  'wretched': '可怜的；悲惨的',
  'wrinkle': '皱纹；起皱',
  'wrist': '手腕；腕关节',
  'write': '写；书写',
  'writer': '作家；作者',
  'writing': '写作；书写',
  'wrong': '错误的；不正确的',
  'x-ray': '光；射线',
  'yacht': '游艇；快艇',
  'yard': '院子；场地',
  'yawn': '打哈欠',
  'waiter': '服务员；男服务员',
  'waitress': '服务员；女服务员',
  'wagon': '马车；货车',
  'waggon': '马车；货车',
  'waist': '腰部；腰围',
  'wait': '等待；等候',
  'waive': '放弃；撤销',
  'waiver': '放弃；放弃书',
  'wake': '醒来；唤醒',
  'waken': '醒来；唤醒',
  'walk': '行走；散步',
  'wall': '墙壁；墙',
  'wallet': '钱包；皮夹',
  'wander': '漫步；徘徊',
  'want': '想要；需要',
  'war': '战争；战斗',
  'ward': '病房；护理',
  'wardrobe': '衣柜；衣橱',
  'ware': '商品；货物',
  'warehouse': '仓库；货栈',
  'warfare': '战争；冲突',
  'warm': '温暖的；暖和的',
  'warmth': '温暖；暖意',
  'warn': '警告；告诫',
  'warning': '警告；预告',
  'warranty': '保证；保修',
  'warrior': '战士；勇士',
  'wary': '谨慎的；机警的',
  'wash': '洗涤；清洗',
  'washing': '洗涤；洗衣',
  'waste': '浪费；废物',
  'wasteful': '浪费的；奢侈的',
  'watch': '手表；观察',
  'watchful': '警觉的；留心的',
  'water': '水；水分',
  'waterproof': '防水的；不透水的',
  'watertight': '不透水的；密封的',
  'watt': '瓦特；功率单位',
  'wavy': '波浪状的；起伏的',
  'weak': '弱的；虚弱的',
  'weakness': '弱点；虚弱',
  'weaken': '削弱；减弱',
  'wealth': '财富；财产',
  'wealthy': '富有的；富裕的',
  'weapon': '武器；兵器',
  'wear': '穿戴；磨损',
  'weariness': '疲劳；厌倦',
  'weary': '疲倦的；厌烦的',
  'weather': '天气；气候',
  'weave': '编织；交织',
  'web': '网络；蜘蛛网',
  'webcast': '网络广播；网络直播',
  'website': '网站；网址',
  'wed': '结婚；结合',
  'wedding': '婚礼；婚宴',
  'wedge': '楔子；楔形物',
  'wednesday': '星期三',
  'weed': '杂草；铲除',
  'week': '周；星期',
  'weekly': '每周的；周报',
  'weekday': '工作日；平日',
  'weekend': '周末',
  'weep': '哭泣；流泪',
  'weigh': '称重；权衡',
  'weight': '重量；分量',
  'weird': '奇怪的；不可思议的',
  'welcome': '欢迎；迎接',
  'welfare': '福利；福利事业',
  'well': '井；好',
  'well-being': '健康；幸福',
  'well-known': '著名的；知名的',
  'well-off': '富裕的；富有的',
  'west': '西方；西部',
  'western': '西方的；西部的',
  'westerner': '西方人',
  'wet': '湿的；多雨的',
  'whale': '鲸鱼',
  'wharf': '码头；泊位',
  'what': '什么；多么',
  'whatever': '无论什么；无论怎样',
  'whatsoever': '无论什么；无论怎样',
  'wheat': '小麦；麦子',
  'wheel': '轮子；车轮',
  'when': '何时；当时',
  'whenever': '无论何时；随时',
  'where': '哪里；在哪里',
  'wherever': '无论哪里；无论哪里',
  'whereabouts': '在哪里；行踪',
  'whereas': '然而；鉴于',
  'whereby': '借以；由此',
  'whether': '是否；无论',
  'which': '哪一个；哪一些',
  'whichever': '无论哪一个；无论哪一些',
  'while': '当……时；虽然',
  'whilst': '当……时；然而',
  'whip': '鞭子；鞭打',
  'whirl': '旋转；涡流',
  'whisky': '威士忌；威酒',
  'whisper': '耳语；低声说',
  'whistle': '口哨；哨子',
  'analyze': '分析；解析',
  'artillery': '炮兵；大炮',
  'as': '像；如同',
  'ascend': '上升；攀登',
  'ascendance': '统治；支配',
  'ascribe': '归因于；归咎于',
  'ash': '灰烬；灰',
  'ashamed': '羞耻的；害臊的',
  'ashore': '上岸；在岸上',
  'aside': '旁边；在旁边',
  'ask': '问；请求',
  'asleep': '睡着的',
  'aspect': '方面；外观',
  'aspire': '渴望；立志',
  'ass': '驴',
  'assassination': '暗杀；行刺',
  'assassin': '刺客；暗杀者',
  'assassinate': '暗杀；行刺',
  'assault': '攻击；袭击',
  'assemble': '集合；装配',
  'assembly': '集合；集会',
  'assertion': '断言；声明',
  'assertive': '断言的；自信的',
  'assessment': '评估；评价',
  'assignment': '分配；任务',
  'assimilation': '同化；吸收',
  'assist': '帮助；协助',
  'assistance': '帮助；援助',
  'assistant': '助手；助理',
  'associate': '联想；关联',
  'association': '协会；联合',
  'assorted': '各式各样的；混合的',
  'assortment': '种类；混合物',
  'assume': '假定；承担',
  'assumption': '假定；设想',
  'assure': '保证；确保',
  'assurance': '保证；确信',
  'astonish': '使惊讶；使震惊',
  'astonishment': '惊讶；震惊',
  'astray': '迷路；误入歧途',
  'astronaut': '宇航员',
  'astronomy': '天文学',
  'astronomer': '天文学家',
  'astronomical': '天文学的；巨大的',
  'asylum': '庇护所；收容所',
  'at': '在；向',
  'athlete': '运动员',
  'athletic': '运动的；运动员的',
  'atlas': '地图集；大百科全书',
  'atmosphere': '大气；气氛',
  'atmospheric': '大气的；气氛的',
  'atom': '原子',
  'atomic': '原子的；原子能的',
  'atop': '在...顶部',
  'atrocity': '残暴；暴行',
  'atrocious': '残暴的；极坏的',
  'attach': '附加；贴上',
  'attachment': '附件；依恋',
  'attack': '攻击；进攻',
  'attainment': '成就；达到',
  'attempt': '尝试；企图',
  'attend': '出席；照顾',
  'attendance': '出席；出席人数',
  'attendant': '服务员；随从',
  'attention': '注意；注意力',
  'attentive': '注意的；留心的',
  'attic': '阁楼；顶楼',
  'attitude': '态度；看法',
  'attorney': '律师',
  'attract': '吸引；引起',
  'attraction': '吸引；吸引力',
  'attractive': '吸引人的；诱人的',
  'attributable': '可归因于的',
  'auction': '拍卖',
  'auctioneer': '拍卖师',
  'audience': '观众；听众',
  'audio': '音频的；听觉的',
  'audit': '审计；查账',
  'auditing': '审计',
  'auditorium': '礼堂；会堂',
  'augment': '增加；增强',
  'augmentation': '增加；增强',
  'august': '尊贵的；崇高的',
  'aunt': '阿姨；姑母',
  'auntie': '阿姨；姑母',
  'authenticity': '真实性；可靠性',
  'author': '作者；创造者',
  'authoritative': '权威的；有权威的',
  'authority': '权威；权力',
  'authorize': '授权；批准',
  'authorise': '授权；批准',
  'authorization': '授权；批准',
  'authorisation': '授权；批准',
  'automobile': '汽车',
  'autobiography': '自传',
  'autobiographic': '自传体的',
  'automate': '自动化',
  'automation': '自动化',
  'autonomous': '自治的；自主的',
  'autumn': '秋天',
  'auxiliary': '辅助的；辅助的',
  'avail': '可用；利用',
  'available': '可用的；可得到的',
  'availability': '可用性；有效性',
  'avenue': '大道；途径',
  'average': '平均的；平均数',
  'avert': '避免；防止',
  'aversion': '厌恶；反感',
  'aviation': '航空；航空学',
  'avoid': '避免；躲避',
  'avoidance': '避免；回避',
  'await': '等待；期待',
  'awake': '醒着的；唤醒',
  'award': '奖励；授予',
  'aware': '意识到的；知道的',
  'awareness': '意识；认识',
  'away': '离开；远离',
  'awe': '敬畏；敬畏之情',
  'awesome': '令人敬畏的；令人惊叹的',
  'awful': '可怕的；糟糕的',
  'awkward': '尴尬的；笨拙的',
  'ax': '斧头',
  'axe': '斧头',
  'axis': '轴；轴线',
  'baby': '婴儿；小孩',
  'bachelor': '单身汉；学士',
  'back': '背部；后面',
  'background': '背景；背景资料',
  'backup': '备份；后援',
  'backward': '向后的；落后的',
  'backwards': '向后；相反地',
  'backyard': '后院',
  'bacon': '熏肉',
  'bacteria': '细菌',
  'bad': '坏的；不好的',
  'badge': '徽章；证章',
  'badly': '恶劣地；非常',
  'badminton': '羽毛球',
  'baffle': '迷惑；阻碍',
  'bag': '包；袋子',
  'baggage': '行李',
  'bail': '保释；赎回',
  'bait': '诱饵；饵料',
  'bake': '烘焙；烤',
  'bakery': '面包店',
  'balance': '平衡；余额',
  'balcony': '阳台',
  'bald': '秃头的；无毛的',
  'ball': '球；舞会',
  'ballet': '芭蕾舞',
  'balloon': '气球',
  'ballot': '投票；选票',
  'bamboo': '竹子',
  'ban': '禁止；禁令',
  'banana': '香蕉',
  'band': '乐队；带子',
  'bandage': '绷带',
  'bang': '砰的一声；猛击',
  'bank': '银行；河岸',
  'banknote': '纸币',
  'bankrupt': '破产的；使破产',
  'bankruptcy': '破产',
  'banner': '横幅；旗帜',
  'banquet': '宴会；盛宴',
  'bar': '酒吧；条',
  'barbecue': '烧烤；烤肉',
  'bbq': '烧烤',
  'barber': '理发师',
  'bare': '裸露的；仅仅',
  'barely': '几乎不；勉强',
  'bargain': '便宜货；讨价还价',
  'barge': '驳船',
  'bark': '树皮；吠叫',
  'barn': '谷仓；畜舍',
  'barometer': '晴雨表；气压计',
  'barracks': '兵营',
  'barrel': '桶；枪管',
  'barren': '贫瘠的；不生育的',
  'barrier': '障碍；屏障',
  'base': '基础；底部',
  'baseball': '棒球',
  'basement': '地下室',
  'basic': '基本的；根本的',
  'basically': '基本上；根本地',
  'basin': '盆地；流域',
  'basis': '基础；根据',
  'basket': '篮子',
  'basketball': '篮球',
  'bass': '低音；鲈鱼',
  'bat': '蝙蝠；球拍',
  'batch': '一批；一组',
  'bath': '洗澡；浴缸',
  'bathe': '洗澡；沐浴',
  'bathroom': '浴室；洗手间',
  'battalion': '营；大量',
  'batter': '投球手；打击',
  'battery': '电池；炮兵',
  'battle': '战斗；斗争',
  'bay': '海湾；港湾',
  'bypass': '绕行；旁路',
  'cab': '出租车；驾驶室',
  'cabbage': '卷心菜',
  'cosy': '舒适的',
  'grand': '宏伟的；重大的',
  'grandchild': '孙子；孙女',
  'grandchildren': '孙子辈；孙女辈',
  'grandson': '孙子',
  'granddaughter': '孙女',
  'grandparent': '祖父母；外祖父母',
  'grandfather': '祖父；外公',
  'grandmother': '祖母；外婆',
  'grant': '授予；拨款',
  'granted': '授予；同意的',
  'grape': '葡萄',
  'graph': '图表；图解',
  'graphic': '图表的；图形的',
  'graphically': '图形地；直观地',
  'industrialise': '工业化',
  'juvenile': '青少年的；幼稚的',
  'overhead': '头上的；；管理费用',
  'overwhelmingly': '压倒性地；无法抵抗地',
  'pretence': '假装；虚伪',
  'towards': '朝向；对于',
  'wireless': '无线的'
};
