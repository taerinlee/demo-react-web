
function createData(id, parentId, name, calories, fat, carbs, protein, detail) {
  return { id, parentId, name, calories, fat, carbs, protein, detail };
}

export const rows = [
    createData(
      1,
      0,
      'Frozen yoghurt',
      159,
      6.0,
      24,
      4.0,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    ),
    createData(
      2,
      0,
      'Ice cream sandwich',
      237,
      9.0,
      37,
      4.3,
      'Maecenas rutrum urna vel lacus viverra, id ultrices dui rutrum'
    ),
    createData(
      3,
      0,
      'Eclair',
      262,
      16.0,
      24,
      6.0,
      'Morbi congue gravida nunc, eu cursus felis vulputate id'
    ),
    createData(
      4,
      0,
      'Cupcake',
      305,
      3.7,
      67,
      4.3,
      'Vestibulum efficitur, ipsum consectetur finibus maximus, ligula dolor vehicula ex, sed viverra nulla mauris id purus'
    ),
    createData(
      5,
      0,
      'Gingerbread',
      356,
      16.0,
      49,
      3.9,
      ' Suspendisse vehicula eu libero eget viverra'
    ),
    createData(
      6,
      3,
      'Gingerbread Sub',
      356,
      16.0,
      49,
      3.9,
      ' Suspendisse vehicula eu libero eget viverra'
    ),
    createData(
      7,
      3,
      'Gingerbread Sub2',
      356,
      16.0,
      49,
      3.9,
      ' Suspendisse vehicula eu libero eget viverra'
    )
  ];