"use client"

import Image from 'next/image'
import Pic from '@/public/shanshui-wb.webp'

export default function Home(){
return (
  <div className="flex flex-col gap-10 justify-center items-center min-h-screen p-2">
    <h1 className="text-center">劝学篇 <br></br><span className="text-lg">荀子</span></h1>

    <Image
      src={Pic}
      alt="shanshui-wb"
      sizes="100vw"
      
        style={{
          width: '65%',
          height: 'auto',}}
    />
    <div className="text-center">
    <p>君子曰：学不可以已。</p>

<p>青，取之于蓝，而青于蓝；冰，水为之，而寒于水。</p>

<p>木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。</p>

<p>故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。</p>

<p>吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。</p>

<p>登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。</p>

<p>假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。</p>

<p>君子生非异也，善假于物也。</p>

<p>积土成山，风雨兴焉；积水成渊，蛟龙生焉；积善成德，而神明自得，圣心备焉。</p>

<p>故不积跬步，无以至千里；不积小流，无以成江海。</p>

<p>骐骥一跃，不能十步；驽马十驾，功在不舍；锲而舍之，朽木不折；锲而不舍，金石可镂。</p>

<p>蚓无爪牙之利，筋骨之强，上食埃土，下饮黄泉，用心一也。</p>

<p>蟹六跪而二螯，非蛇鳝之穴无可寄托者，用心躁也。
</p>
  </div>
  </div>
)

}

