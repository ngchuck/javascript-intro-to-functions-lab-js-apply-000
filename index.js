function shout(deep)
{
  deep=deep.toUpperCase();
  return deep;
}

function whisper(deep)
{
  deep=deep.toLowerCase();
  return deep;
}

function logShout(deep)
{
  console.log(shout(deep));
}

function logWhisper(deep)
{
  console.log(whisper(deep));
}
