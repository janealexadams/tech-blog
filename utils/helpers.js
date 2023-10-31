module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    check_id: (id1, id2) => {
      if (id1 === id2){
        return '<button class="delete"></button> <button class="update"></button>'; 
      }
    },
    delete_post: function (id1, id2, options) {
      if (id1 === id2) {
        return options.fn(this); 
      }
    },
    update_post: function (id1, id2, options) {
      if (id1 === id2) {
        return options.fn(this); 
      }
    }
  };
  