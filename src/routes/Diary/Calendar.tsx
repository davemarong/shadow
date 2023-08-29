import { Diary } from "../../assets/types/Types";
import { AddEntryCTA } from "../../components/AddEntryCTA/AddEntryCTA";
import { Calendar as CalenderComp } from "../../components/Calendar/Calendar";

interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  return (
    <div>
      {diary.length === 0 && <AddEntryCTA />}
      <CalenderComp diary={diary} />- Her må du bruke den live oppdaterings
      query slik at det automatisk dukker opp nye entries. - Når er har trykt på
      "save" på add entry pagen, så må det komme opp en snackbar/link direkt til
      calendar pagen, slik at bruekren kan se at noe har sjedd
    </div>
  );
};
