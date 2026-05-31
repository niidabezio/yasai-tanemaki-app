// 絵文字フォールバック（画像未生成の野菜用）
const EMOJI_MAP: Record<string, string> = {
  'tomato':'🍅','eggplant':'🍆','cucumber':'🥒','pepper':'🫑','shishito':'🫑',
  'chili':'🌶️','pumpkin':'🎃','watermelon':'🍉','melon':'🍈','okra':'🌿',
  'zucchini':'🥒','bittermelon':'🥒','shiroouri':'🥒','togan':'🥬','hayatouri':'🥒',
  'tsurumurasaki':'🌿','morohiya':'🌿','strawberry':'🍓','hakusai':'🥬','cabbage':'🥬',
  'lettuce':'🥬','green-lettuce':'🥬','saladana':'🥬','spinach':'🥬','komatsuna':'🥬',
  'mizuna':'🥬','chingensai':'🥬','broccoli':'🥦','cauliflower':'🥦','shungiku':'🌼',
  'nozawana':'🥬','celery':'🌿','parsley':'🌿','asparagus-green':'🌱','white-asparagus':'🌱',
  'udo':'🌿','eisai':'🌿','kale':'🥬','takana':'🥬','coriander':'🌿','leaf-shiso':'🍃',
  'norabona':'🥬','nabana':'🌸','fuki':'🌿','chicory':'🥬','warabi':'🌿','taranoki':'🌿',
  'daikon':'🥕','carrot':'🥕','turnip':'🌰','gobou':'🌿','lotus-root':'🌸','satoimo':'🥔',
  'wakegi':'🧅','nagaimo':'🥔','jinenjo':'🥔','edamame':'🫘','green-beans':'🫘',
  'snap-pea':'🫛','sayaendou':'🫛','minori-endou':'🫛','broad-bean':'🫘','sweet-corn':'🌽',
  'potato':'🥔','sweet-potato':'🍠','onion':'🧅','garlic':'🧄','rakkyo':'🧅',
  'negi':'🌿','nira':'🌿','ginger':'🫚','leaf-ginger':'🫚','myoga':'🌿','mitsuba':'🌿',
};

interface Props {
  vegetableId: string;
  size?: number;
}

export function VegetableAvatar({ vegetableId, size = 60 }: Props) {
  const imgSrc = `/vegetables/${vegetableId}.png`;

  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#f5f5f0' }}>
      <img
        src={imgSrc}
        alt={vegetableId}
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={e => {
          // 画像がなければ絵文字フォールバック
          const el = e.currentTarget.parentElement!;
          const emoji = EMOJI_MAP[vegetableId] ?? '🌱';
          el.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:${Math.round(size*0.55)}px;background:#f0f8f0">${emoji}</div>`;
        }}
      />
    </div>
  );
}
