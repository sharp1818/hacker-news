import NewComponent from '../../components/newComponent';
import SelectComponent from '../../components/selectComponent';

function AllNews() {
  return (
    <div>
      <SelectComponent />
      <NewComponent id={10} created={1000} title="hola" url="xd" />
      <NewComponent id={11} created={1001} title="hola1" url="xd1" />
    </div>
  );
}

export default AllNews;
