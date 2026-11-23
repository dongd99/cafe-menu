import MenuCard from '@/components/MenuCard'
import Section from '@/components/Section'
import StampCard from '@/components/StampCard';
import menus from '@/data/menus'
import MenuBoard from '@/components/MenuBoard'

const categories =[
  {key:'coffee', label:'☕ 커피'},
  {key:'drink', label:'🍹 음료'},
  {key:'dessert', label:'🍰 디저트'},
  {key:'bakery', label:'🥐 빵'},

];


export default function Home() {
  
  const available = menus.filter((menu)=>(!menu.soldOut));
  const newMenus = menus.filter((menu)=>(menu.isNew));
  return (
    <main>
    <h1>☕동동 카페</h1>
    {/* <p>전체 {menus.length}개ㆍ주문 가능 {available.length}</p>
    {newMenus.length > 0 &&(
      <p className="notice">
        🎉 신메뉴 : {newMenus.map((menu)=> menu.name).join(', ')}
      </p>
    )}
    {categories.map((cat)=>{
      const items = menus.filter((menu)=>(menu.category === cat.key))
      return (
        <Section key={cat.key} title={`${cat.label} (${items.length})`}>
          {items.length===0? <p className='empty'>준비중입니다.</p>:
            (items.map((menu)=> <MenuCard key={menu.id}{...menu}/>))
          }

        </Section>
      );
    })}

    <p>전체 {menus.length}개, 주문 가능 {available.length}</p> */}
    <StampCard/>
    <MenuBoard menus={menus}/>





    {/* <div className="menu-grid">
      {menus.map((menu)=>(
        <MenuCard
        key={menu.id} 
        emoji={menu.emoji}
        name={menu.name}
        price={menu.price}
        desc={menu.desc}
        isNew={menu.isNew}
        soldOut={menu.soldOut}
        />
      ))}
    </div> */}
    {/* <Section title="오늘의 추천">
      <MenuCard name="아메리카노" price={3500} desc="진한 에스프레소+물"/>
      <MenuCard name="카페라테" price={4000} desc="진한 에스프레소+우유" isNew/>
      <MenuCard name="헤이즐넛라테" price={4500} desc="진한 에스프레소+우유+헤이즐넛 시럽" soldOut/>

    </Section> */}

    
    </main>
  );
}
