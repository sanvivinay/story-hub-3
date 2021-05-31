import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
          I wrap my fingers tightly around the clinging plastic of the trash bag, pull it open as wide as it’ll go, and watch him dump the remnants of our happiness into it.

His large arms twist and flex unnecessarily as he shovels extra hors d'oeuvres and scraps of entree into the bag. His upper lip is a thin white line, stretched tight below frowning eyes. 

The faint and smoky gleam of the first stars illuminates our dining room. The windows are open to the still air, mingling the scent of grass and dew with the smell of recently extinguished candles. Near-empty glasses of wine sit with little pools of ruby liquid congealing at the bottom. I examine the imprints on the glasses, pink half-moons where lips lingered, small smudges from restless fingers. 

I clear the table and he rinses the plates, loading my great-grandmother’s delicate china into the dishwasher with a force that makes me cringe. I say nothing but plan to return later and wash it all by hand.

Somewhere outside in the cool October air rings the plaintive, staccato song of an owl. 

Not long ago, I would have added my voice to the bird’s, smiling at the easy rhythm of the duet. But tonight, silence slices into the fading evening once more and I leave it to fester like an open wound.

He leans backwards against the kitchen counter, glass of amber-colored whiskey in his calloused hand. I feel his eyes follow me around the room as I continue tidying up, returning the candles to their places, piling the used cloth napkins near the hall that leads to the laundry room. The starlight catches on the folds of my satin dress as I move. I haven’t worn a dress in ages. It feels foreign, out of place against my skin.

“Some party,” he says.

I nod, barely meeting his sharp grey eyes.

“Surprised the Williamses came. I haven’t talked to George in ages.”

I shrug. “I ran into Melanie at the store the other day and reminded her.”

“Oh.” He runs his finger along the rim of his glass, staring at the chairs where George and Melanie sat only an hour earlier. “Did you see George at the store, too?”

“No, just Mel,” I reply lightly. 

He stands, leaves the kitchen, and plops himself into an armchair in the living room, whiskey still attached to his hand like glue. 

I glance away, my gaze lingering on the neat bookshelves in the corner where George and I had chuckled over our mutual dislike of Great Expectations, reminiscing about wrinkly Dr. Barnum’s English Lit course. As we spoke, I realized George hadn’t changed much since college; his eyes still held that idealistic sparkle that made us instant friends. I, on the other hand, have faded. Dulled. 

George was too polite to say anything, but I know he noticed.

“How long is your sister staying in town?” His voice is gravelly, starting to slur.

“Just until tomorrow afternoon. We were thinking of getting coffee together before she leaves.”

“You two didn’t talk much tonight,” he notes.

“No,” I reply, wiping the table slowly. “She’s been a bit reserved since the divorce.”

“That’s a shame. I liked Drew.”

“I didn’t,” I say quickly, feeling my blood heat in my cheeks as I think of the man’s infidelity, of how broken Sarah was when she called and told me everything. “I never did.”

He stills, musing and nursing the last of his whiskey. I watch the way it lingers on the fine line of his lips, which are pursed even more tightly together.

“We can leave the rest for tomorrow,” he says, gesturing at the last of the mess. “Come sit with me.”

I wipe down the last corner of the table, taking my time as I place the damp towel on the edge of the kitchen sink. I straighten the hem of my silvery dress, imagining for a moment that it is armor, cold and heavy and safe. 

When I approach, he pulls me onto his lap with one hand and rests his chin on my taut shoulder. His face is hot, burning against my skin.

“Happy anniversary,” he whispers, wrapping his free arm a little too tightly around my waist.

“Happy anniversary,” I reply. I watch the starlight glitter in the diamond on my finger, catch a glimpse of my dark eyes in the golden band.

I try to remember when we first met, years ago, back before this sour taste hung in the air between us. All that comes to me is dim figures, specters and stains of who we used to be. Me, young and bright, full of the effortless weight of possibility. Him, tall and smiling, overflowing with confident infatuation.

But I realize now that he’s always had a bitterness to him, hidden beneath a fine layer of cloying honey. And from the first time we kissed, we burned into one another like cheap vodka and called it love.

He tilts his head, leaning into the curve of my neck. His soft waves of hair tickle my chin. 

“You’d never hurt me, would you?” he asks. It’s more of a statement than a question, firm with a small lilt of uncertainty in the final fatal syllable. 

I turn a little, forcing him to lift his head from my shoulder and meet my eyes.

“Would you?” My voice is little more than a whisper.

He is silent. Somewhere in that vast, unspoken space between us lies the answer to every question. I stand, watching his fingers cling for a moment to my hip before falling away, his hand wilting like a lily too long removed from the sun.

The owl resumes its song and I cross the room to close the windows, shivering at the final gust of cold air. I see myself reflected in the glass, my face distorted by the angles of the windowpanes. His figure is little more than a streak of color in the reflection, distant and unremarkable.

I glance over at what’s left: the garbage bag in the corner, crumbs on the table, empty wine bottles on the counter and the last bubbles of dish soap in the sink. 

“I’ll take the trash out in the morning,” I say, and head to bed without looking back.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: "grey",
    flex: 1,
    fontFamily: "Berlin Sans FB Demi",
  },
  header: {
    backgroundColor: 'pink',
  },
  headerText: {
    fontFamily: "Berlin Sans FB Demi",
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: "Berlin Sans FB Demi",
    fontSize: 20,
    padding: 15,
  },
});
