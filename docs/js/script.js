document.addEventListener('DOMContentLoaded', function(){
  var list = document.getElementById('list');

  document.getElementById('memo_form').addEventListener('submit', function(e){

    e.preventDefault();
    var form = document.getElementById('form');

    var memo = document.createElement('li');

    var memo_content = document.createTextNode(form.value);

    var delete_btn = document.createElement('button');
    delete_btn.setAttribute('class', 'delete_btn');
    delete_btn.appendChild(document.createTextNode('削除'))
    delete_btn.addEventListener('click', function(){
            if(window.confirm("削除しますか？")){
              memo.parentNode.removeChild(memo);
            }
    });

    memo.appendChild(memo_content);
    memo.appendChild(delete_btn);

    list.appendChild(memo);

    document.getElementById('form').value = "";

  });
});
